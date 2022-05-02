# Merkle Airdrop Starter

Quickly bootstrap an ERC20 token airdrop to a Merkle tree of recipients.

Steps:

1. Generate Merkle tree of recipients by following README in [generator/](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/tree/master/generator)
2. Setup and deploy MerkleClaimERC20 contracts by following README in [contracts/](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/tree/master/contracts)
3. Setup and deploy front-end by following README in [frontend/](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/tree/master/frontend)

## Similar work and credits

- [Astrodrop](https://astrodrop.xyz/)—Simpler way to spin up a airdrop with claim page, given existing token
- [Uniswap Merkle Distributor](https://github.com/Uniswap/merkle-distributor)—Uniswap's merkle distribution smart contracts

# frontend

Accompanies [MerkleDropERC20](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/tree/master/contracts) contracts; heavy similarity to the [GAS DAO airdrop frontend](https://www.gasdao.org/) (GAS DAO: implemented by [sax](https://twitter.com/0xsaxophone), originally inspired by work from [design @ens](https://twitter.com/dzneth) for the [$ENS airdrop claim](https://claim.ens.domains/)).

Allows users to connect their wallet and claim airdrops, given they are part of the Merkle tree.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Run + deploy

The frontend is built to be fully configurable and ready-to-go in under 10 minutes of dev time. Steps to customize and deploy:

1. Modify `config.ts:L9` with exact config from `generator/config.json`
2. Copy environment variables (`cp .env.sample .env.local`) and modify parameters
3. Update the `logo.png` (recommended: 250x250) and `meta.png` (recommended: 1200x637) in `public/`
4. Then, `npm install` (install dependencies) and `npm run dev` to run development build

## License

[GNU Affero GPL v3.0](https://github.com/Anish-Agnihotri/merkle-airdrop-starter/blob/master/LICENSE)

## Disclaimer

_These smart contracts are being provided as is. No guarantee, representation or warranty is being made, express or implied, as to the safety or correctness of the user interface or the smart contracts. They have not been audited and as such there can be no assurance they will work as intended, and users may experience delays, failures, errors, omissions or loss of transmitted information. Anish Agnihotri is not liable for any of the foregoing. Users should proceed with caution and use at their own risk._
