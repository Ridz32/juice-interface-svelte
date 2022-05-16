import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { create, type IPFS } from 'ipfs-core';
import cors from 'cors';
import https from 'https';

let node: IPFS;

const app = admin.initializeApp();
const storage = admin.storage(app);

export const getIpfsFileByCid = functions.https.onRequest((request, response) => {
	cors({ origin: true })(request, response, async () => {
		// TODO: restrict cross origin

		if (request.method !== 'POST') {
			response.status(404).end();
			return;
		}

		const cid = request.body.cid;

		if (!cid) {
			response.status(400).end();
			return;
		}

		response.setHeader('access-control-allow-origin', '*');

		const bucketFile = storage.bucket('juicebox-svelte.appspot.com').file(cid);
		try {
			if (await bucketFile.getMetadata()) {
				console.log('Using bucket file');
				const stream = bucketFile.createReadStream();
				stream.pipe(response);
				stream.on('end', () => response.end());
				return;
			}
		} catch (error) {}

		const gateways = [
			'https://ipfs.io/ipfs/',
			'https://cloudflare-ipfs.com/ipfs/',
			'https://ipfs.infura.io/ipfs/',
			'https://ipfs.fleek.co/ipfs/',
			'https://gateway.pinata.cloud/ipfs/'
		];

		for (const gateway of gateways) {
			const url = `${gateway}${cid}`;
			try {
				await new Promise((resolve, reject) => {
					https
						.get(url, (res) => {
							if (200 <= res.statusCode && res.statusCode < 400) {
								res.pipe(response);
								let data = [];
								res.on('data', (chunk: Buffer) => {
									data = [...data, ...Uint8Array.from(chunk)];
								});
								res.on('end', async function () {
									console.log('\nSaving to bucket\n');
									await bucketFile.save(Buffer.from(data), {
										public: true
									});
									response.end();
									resolve(true);
								});
							} else throw Error('failed');
						})
						.on('error', (error) => {
							response.status(500).json({
								error: error.message
							});
							reject();
						});
				});
				return;
			} catch (error) {
				console.log('GET:', url);
				console.error(error.message);
			}
		}

		let maxRetries = 3;
		let retried = 0;
		while (retried++ < maxRetries) {
			try {
				node = (await create()) as IPFS;

				let data: number[] = [];
				for await (const chunk of node.cat(cid)) {
					response.write(chunk);
					data = [...data, ...Uint8Array.from(chunk)];
				}

				console.log('\nSaving to bucket\n');
				await bucketFile.save(Buffer.from(data), {
					public: true
				});
				response.status(200).end();
				return;
			} catch (error) {
				response.status(500).json({
					error: 'failed to get file'
				});
			}
		}
	});
});
