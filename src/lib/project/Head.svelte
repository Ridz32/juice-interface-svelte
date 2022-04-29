<script>
	import Drawer from './Drawer.svelte';

	let drawerShown = false;
</script>

<div>
	<div
		style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start;"
	>
		<div style="margin-right: 1.25rem; margin-bottom: 1.25rem; height: 100%;">
			<div
				style="display: flex; align-items: center; justify-content: center; overflow: hidden; height: 120px; width: 120px; border-radius: 1px;"
			>
				<img
					src="/juicebox-dao.png"
					alt="JuiceboxDAO logo"
					style="max-height: 100%; min-width: 100%; object-fit: cover; object-position: center center;"
				/>
			</div>
		</div>
		<div style="flex: 1 1 0%; min-width: 70%;">
			<div
				style="display: flex; justify-content: space-between; flex-wrap: wrap; align-items: flex-start;"
			>
				<h1
					style="font-size: 2.4rem; line-height: 2.8rem; margin: 0px; color: rgba(0, 0, 0, 0.933);"
				>
					JuiceboxDAO
				</h1>
				<div style="display: flex; align-items: center;">
					<span style="color: rgba(0, 0, 0, 0.333); padding-right: 10px;"
						>ID: 1 <span style="padding: 2px 4px; background: rgb(231, 227, 220); cursor: default;"
							>V1</span
						></span
					>
					<div>
						<button
							type="button"
							class="ant-btn ant-btn-text ant-btn-icon-only"
							on:click={() => (drawerShown = !drawerShown)}
							><span role="img" aria-label="tool" class="anticon anticon-tool"
								><svg
									viewBox="64 64 896 896"
									focusable="false"
									data-icon="tool"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									><path
										d="M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"
									/></svg
								></span
							></button
						>
					</div>
				</div>
			</div>
			<div
				style="display: flex; flex-wrap: wrap; padding-top: 8px; padding-bottom: 4px; font-weight: 500;"
			>
				<span style="color: rgba(0, 0, 0, 0.6); margin-right: 20px; font-weight: 600;"
					>@juicebox</span
				><a
					href="https://snapshot.org/#/jbdao.eth"
					target="_blank"
					rel="noopener noreferrer"
					style="font-weight: 500; margin-right: 20px;">snapshot.org/#/jbdao.eth</a
				><a
					href="https://twitter.com/juiceboxETH"
					target="_blank"
					rel="noopener noreferrer"
					style="font-weight: 500; margin-right: 20px; white-space: pre;"
					><span style="margin-right: 4px;"
						><span role="img" aria-label="twitter" class="anticon anticon-twitter"
							><svg
								viewBox="64 64 896 896"
								focusable="false"
								data-icon="twitter"
								width="1em"
								height="1em"
								fill="currentColor"
								aria-hidden="true"
								><path
									d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
								/></svg
							></span
						></span
					>@juiceboxETH</a
				><a
					href="https://discord.gg/W9mTVG4QhD"
					target="_blank"
					rel="noopener noreferrer"
					style="font-weight: 500; display: flex; align-items: center; margin-right: 20px; white-space: pre;"
					><span style="display: flex; margin-right: 4px;"
						><svg
							width="71"
							height="55"
							viewBox="0 0 71 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style="height: 13px; width: 16.7818px;"
							><g clip-path="url(#clip0)"
								><path
									d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
									fill="currentColor"
								/></g
							><defs
								><clipPath id="clip0"><rect width="71" height="55" fill="currentColor" /></clipPath
								></defs
							></svg
						></span
					>Discord</a
				>
			</div>
			<div>
				<div style="margin-top: 5px; max-width: 700px; display: inline;">
					<span style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
						>Supports projects built using the Juicebox protocol, and the development of the
						protocol itself. All projects withdrawing funds from their treasury pay a 2.5%
						membership fee and receive JBX at the current issuance rate. JBX members govern the NFT
						tha...</span
					><button type="button" class="ant-btn ant-btn-link" style="padding: 0px; height: auto;"
						><span>Read more</span></button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<Drawer bind:shown={drawerShown} />
