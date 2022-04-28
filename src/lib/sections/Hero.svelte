<script lang="ts">
	import '$lib/scss/button.scss';
	import Header from '$lib/components/Header.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';
</script>

<section
	class="ant-layout"
	style="display: flex; flex-direction: column; height: 100%; background: transparent;"
>
	<main class="ant-layout-content">
		<div style="max-width: 1080px; margin: 0px auto; padding: 20px;">
			<div>
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
										>ID: 1 <span
											style="padding: 2px 4px; background: rgb(231, 227, 220); cursor: default;"
											>V1</span
										></span
									>
									<div>
										<button type="button" class="ant-btn ant-btn-text ant-btn-icon-only"
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
												><clipPath id="clip0"
													><rect width="71" height="55" fill="currentColor" /></clipPath
												></defs
											></svg
										></span
									>Discord</a
								>
							</div>
							<div>
								<div style="margin-top: 5px; max-width: 700px; display: inline;">
									<span
										style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
										>Supports projects built using the Juicebox protocol, and the development of the
										protocol itself. All projects withdrawing funds from their treasury pay a 2.5%
										membership fee and receive JBX at the current issuance rate. JBX members govern
										the NFT tha...</span
									><button
										type="button"
										class="ant-btn ant-btn-link"
										style="padding: 0px; height: auto;"><span>Read more</span></button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="ant-row ant-row-bottom"
					style="margin-left: -20px; margin-right: -20px; row-gap: 0px;"
				>
					<div
						class="ant-col ant-col-xs-24 ant-col-md-12"
						style="padding-left: 20px; padding-right: 20px; margin-top: 40px;"
					>
						<div>
							<div
								style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: nowrap; margin-bottom: 15px;"
							>
								<div
									style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
								>
									<span
										><span style="margin-right: 5px;">Volume</span><span
											role="img"
											aria-label="question-circle"
											tabindex="-1"
											class="anticon anticon-question-circle"
											><svg
												viewBox="64 64 896 896"
												focusable="false"
												data-icon="question-circle"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												><path
													d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
												/><path
													d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
												/></svg
											></span
										></span
									>
								</div>
								<div style="margin-left: 10px;">
									<span style="font-weight: 500; font-size: 1.1rem; line-height: 1;"
										><span style="color: rgba(0, 0, 0, 0.933);"
											><span><span style="font-family: sans-serif;">Ξ</span>6,855.3174</span></span
										></span
									>
								</div>
							</div>
							<div
								style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: nowrap;"
							>
								<div
									style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
								>
									<span
										><span style="margin-right: 5px;">In Juicebox</span><span
											role="img"
											aria-label="question-circle"
											tabindex="-1"
											class="anticon anticon-question-circle"
											><svg
												viewBox="64 64 896 896"
												focusable="false"
												data-icon="question-circle"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												><path
													d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
												/><path
													d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
												/></svg
											></span
										></span
									>
								</div>
								<div style="margin-left: 10px;">
									<div
										style="font-weight: 500; font-size: 1.1rem; line-height: 1; color: rgb(245, 163, 18); margin-left: 10px;"
									>
										<span
											style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
											><span><span style="font-family: sans-serif;">Ξ</span>5,864.10</span>
										</span><span><span>US$</span>16,815,137</span>
									</div>
								</div>
							</div>
							<div
								style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: nowrap;"
							>
								<div
									style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
								>
									<span
										><span style="margin-right: 5px;">Distributed</span><span
											role="img"
											aria-label="question-circle"
											tabindex="-1"
											class="anticon anticon-question-circle"
											><svg
												viewBox="64 64 896 896"
												focusable="false"
												data-icon="question-circle"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												><path
													d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
												/><path
													d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
												/></svg
											></span
										></span
									>
								</div>
								<div style="margin-left: 10px;">
									<div
										style="text-transform: uppercase; color: rgba(0, 0, 0, 0.933); font-size: 0.8rem; font-weight: 500;"
									>
										<span><span>US$</span>170,300</span> / <span><span>US$</span>170,300</span>
									</div>
								</div>
							</div>
							<div style="display: flex; align-items: center;">
								<div
									class="ant-progress ant-progress-line ant-progress-status-success ant-progress-default"
									style="min-width: 10px;"
								>
									<div class="ant-progress-outer">
										<div class="ant-progress-inner">
											<div
												class="ant-progress-bg"
												style="width: 100%; height: 8px; background: rgb(245, 163, 18);"
											/>
										</div>
									</div>
								</div>
								<div
									style="min-width: 4px; height: 15px; border-radius: 2px; background: rgba(0, 0, 0, 0.933); margin-left: 5px; margin-right: 5px; margin-top: 3px;"
								/>
								<div
									class="ant-progress ant-progress-line ant-progress-status-success ant-progress-default"
									style="width: 9773.83%; min-width: 10px;"
								>
									<div class="ant-progress-outer">
										<div class="ant-progress-inner">
											<div
												class="ant-progress-bg"
												style="width: 100%; height: 8px; background: rgb(245, 163, 18);"
											/>
										</div>
									</div>
								</div>
							</div>
							<div
								style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: nowrap; margin-top: 15px;"
							>
								<div
									style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
								>
									<span
										><span style="margin-right: 5px;">In wallet</span><span
											role="img"
											aria-label="question-circle"
											tabindex="-1"
											class="anticon anticon-question-circle"
											><svg
												viewBox="64 64 896 896"
												focusable="false"
												data-icon="question-circle"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
												><path
													d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
												/><path
													d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
												/></svg
											></span
										></span
									>
								</div>
								<div style="margin-left: 10px;">
									<span
										><span
											style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500;"
											><div style="display: inline-block; justify-content: space-between;">
												<span>167,241,605 JBX</span>
											</div>
											+
										</span><span style="font-weight: 500; font-size: 1.1rem; line-height: 1;"
											><span><span style="font-family: sans-serif;">Ξ</span>5.92</span></span
										></span
									>
								</div>
							</div>
							<div style="text-align: right;">
								<span
									style="text-transform: uppercase; color: rgba(0, 0, 0, 0.333); font-size: 0.8rem; font-weight: 500; cursor: pointer;"
									>All assets <span
										role="img"
										aria-label="right-circle"
										class="anticon anticon-right-circle"
										><svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="right-circle"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
											><path
												d="M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"
											/><path
												d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
											/></svg
										></span
									></span
								>
							</div>
						</div>
					</div>
					<div
						class="ant-col ant-col-xs-24 ant-col-md-12"
						style="padding-left: 20px; padding-right: 20px; margin-top: 40px;"
					>
						<div style="display: flex; width: 100%;">
							<div style="flex: 1 1 0%; margin-right: 10px;">
								<div class="formatted-number-input">
									<div class="ant-row ant-form-item" style="row-gap: 0px;">
										<div class="ant-col ant-form-item-control">
											<div class="ant-form-item-control-input">
												<div class="ant-form-item-control-input-content">
													<div style="display: flex; align-items: center;">
														<div
															class="ant-input-number antd-no-number-handler"
															style="width: 100%;"
														>
															<div class="ant-input-number-handler-wrap">
																<span
																	unselectable={true}
																	role="button"
																	aria-label="Increase Value"
																	aria-disabled="false"
																	class="ant-input-number-handler ant-input-number-handler-up"
																	><span
																		role="img"
																		aria-label="up"
																		class="anticon anticon-up ant-input-number-handler-up-inner"
																		><svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="up"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																			><path
																				d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
																			/></svg
																		></span
																	></span
																><span
																	unselectable={true}
																	role="button"
																	aria-label="Decrease Value"
																	aria-disabled="true"
																	class="ant-input-number-handler ant-input-number-handler-down ant-input-number-handler-down-disabled"
																	><span
																		role="img"
																		aria-label="down"
																		class="anticon anticon-down ant-input-number-handler-down-inner"
																		><svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="down"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																			><path
																				d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
																			/></svg
																		></span
																	></span
																>
															</div>
															<div class="ant-input-number-input-wrap">
																<input
																	autocomplete="off"
																	role="spinbutton"
																	aria-valuemin="0"
																	aria-valuenow="0"
																	step="1"
																	placeholder="0"
																	class="ant-input-number-input"
																	value="0"
																/>
															</div>
														</div>
														<div style="margin-left: -54px; z-index: 1; font-size: 0.8rem;">
															<div id="accessory1.0835528991799181">
																<div
																	role="button"
																	style="cursor: pointer; color: rgb(24, 180, 199); background: rgba(50, 200, 219, 0.267); font-weight: 500; white-space: nowrap; padding: 1px 6px; margin-left: 0px; margin-right: 0px; border-radius: 1px;"
																>
																	ETH<span
																		role="img"
																		aria-label="caret-down"
																		class="anticon anticon-caret-down"
																		style="font-size: 10px; margin-left: 4px;"
																		><svg
																			viewBox="0 0 1024 1024"
																			focusable="false"
																			data-icon="caret-down"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																			><path
																				d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
																			/></svg
																		></span
																	>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div style="font-size: 0.7rem;">
									Receive 56,035 JBX/1 ETH
									<div>
										or <span
											><span style="color: rgb(24, 180, 199); cursor: pointer; padding: 0.5rem 0px;"
												>buy JBX on exchange<span
													role="img"
													aria-label="question-circle"
													tabindex="-1"
													class="anticon anticon-question-circle"
													style="margin-left: 0.2rem;"
													><svg
														viewBox="64 64 896 896"
														focusable="false"
														data-icon="question-circle"
														width="1em"
														height="1em"
														fill="currentColor"
														aria-hidden="true"
														><path
															d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
														/><path
															d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
														/></svg
													></span
												></span
											></span
										>
									</div>
								</div>
							</div>
							<div style="text-align: center; min-width: 150px;">
								<button type="button" class="ant-btn ant-btn-primary" style="width: 100%;"
									><span>Add juice</span></button
								>
							</div>
						</div>
					</div>
				</div>
				<div
					class="ant-row"
					style="margin-left: -20px; margin-right: -20px; padding-bottom: 40px; row-gap: 0px;"
				>
					<div
						class="ant-col ant-col-xs-24 ant-col-md-12"
						style="padding-left: 20px; padding-right: 20px; margin-top: 40px;"
					>
						<div style="margin-bottom: 40px;">
							<div>
								<div style="display: flex; justify-content: space-between; align-items: baseline;">
									<div>
										<div
											class="ant-space ant-space-horizontal ant-space-align-center"
											style="gap: 24px;"
										>
											<div class="ant-space-item" style="">
												<div
													style="text-transform: uppercase; font-size: 0.8rem; font-weight: 600; color: rgba(0, 0, 0, 0.6); cursor: pointer;"
												>
													Volume
												</div>
											</div>
											<div class="ant-space-item">
												<div
													style="text-transform: uppercase; font-size: 0.8rem; font-weight: 400; color: rgba(0, 0, 0, 0.333); cursor: pointer;"
												>
													In Juicebox
												</div>
											</div>
										</div>
									</div>
									<div
										class="ant-select small ant-select-single ant-select-show-arrow"
										style="font-size: 0.7rem; text-transform: uppercase; width: 100px;"
									>
										<div class="ant-select-selector">
											<span class="ant-select-selection-search"
												><input
													autocomplete="off"
													type="search"
													class="ant-select-selection-search-input"
													role="combobox"
													aria-haspopup="listbox"
													aria-owns="rc_select_1_list"
													aria-autocomplete="list"
													aria-controls="rc_select_1_list"
													aria-activedescendant="rc_select_1_list_0"
													readonly={true}
													unselectable={true}
													value=""
													id="rc_select_1"
													style="opacity: 0;"
												/></span
											><span class="ant-select-selection-item">30 days</span>
										</div>
										<span
											class="ant-select-arrow"
											unselectable={true}
											aria-hidden="true"
											style="user-select: none;"
											><span
												role="img"
												aria-label="down"
												class="anticon anticon-down ant-select-suffix"
												><svg
													viewBox="64 64 896 896"
													focusable="false"
													data-icon="down"
													width="1em"
													height="1em"
													fill="currentColor"
													aria-hidden="true"
													><path
														d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
													/></svg
												></span
											></span
										>
									</div>
								</div>
								<div style="position: relative;">
									<div
										class="recharts-responsive-container"
										style="width: 100%; height: 240px;"
										width="500"
										height="240"
									>
										<div
											class="recharts-wrapper"
											style="position: relative; cursor: default; width: 500px; height: 240px; opacity: 1;"
										>
											<svg
												class="recharts-surface"
												width="500"
												height="240"
												viewBox="0 0 500 240"
												version="1.1"
												><defs
													><clipPath id="recharts1-clip"
														><rect x="5" y="5" height="200" width="490" /></clipPath
													></defs
												><g class="recharts-cartesian-grid"
													><g class="recharts-cartesian-grid-horizontal"
														><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="172.26693227620544"
															x2="495"
															y2="172.26693227620544"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="139.07680328608805"
															x2="495"
															y2="139.07680328608805"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="105.88667429597064"
															x2="495"
															y2="105.88667429597064"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="72.69654530585326"
															x2="495"
															y2="72.69654530585326"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="39.506416315735905"
															x2="495"
															y2="39.506416315735905"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="6.316287325618504"
															x2="495"
															y2="6.316287325618504"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="5"
															x2="495"
															y2="5"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="205"
															x2="495"
															y2="205"
															style="padding-left: 200px;"
														/></g
													><g class="recharts-cartesian-grid-vertical"
														><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="6.631850518002923"
															y1="5"
															x2="6.631850518002923"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="79.88707294030249"
															y1="5"
															x2="79.88707294030249"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="153.14229536260206"
															y1="5"
															x2="153.14229536260206"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="226.39751778490162"
															y1="5"
															x2="226.39751778490162"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="299.6527402072012"
															y1="5"
															x2="299.6527402072012"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="372.90796262950073"
															y1="5"
															x2="372.90796262950073"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="446.1631850518003"
															y1="5"
															x2="446.1631850518003"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="5"
															y1="5"
															x2="5"
															y2="205"
															style="padding-left: 200px;"
														/><line
															stroke="#00000018"
															stroke-dasharray="4 2"
															fill="none"
															x="5"
															y="5"
															width="490"
															height="200"
															offset="[object Object]"
															x1="495"
															y1="5"
															x2="495"
															y2="205"
															style="padding-left: 200px;"
														/></g
													></g
												><g class="recharts-layer recharts-line"
													><path
														stroke="#f5a312"
														stroke-width="2"
														fill="none"
														points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
														width="490"
														height="200"
														class="recharts-curve recharts-line-curve"
														type="monotone"
														d="M5,195.9090909090911C9.069734579016643,195.6747409399802,13.139469158033283,195.44039097086932,17.209203737049926,195.34867558109292C21.27893831606657,195.25696019131652,25.34867289508321,195.27457861812204,29.418407474099855,195.21110249642834C33.4881420531165,195.14762637473464,37.557876632133144,195.04717091765792,41.627611211149784,194.9678188509307C45.69734579016642,194.8884667842035,49.76708036918307,194.8097785200559,53.83681494819971,194.734990096065C57.90654952721635,194.6602016720741,61.976284106232995,194.5900598661424,66.04601868524963,194.51908830698528C70.11575326426627,194.44811674782815,74.18548784328293,194.4491124516976,78.25522242229957,194.30916074112227C82.3249570013162,194.16920903054694,86.39469158033285,186.48740899266568,90.46442615934949,186.48740899266568C94.53416073836613,186.48740899266568,98.60389531738278,186.48740899266568,102.67362989639942,186.48740899266568C106.74336447541606,186.48740899266568,110.8130990544327,181.59828172489497,114.88283363344934,171.8200271893536C118.95256821246598,162.0417726538122,123.02230279148263,53.84582432774516,127.09203737049927,53.27052875858264C131.1617719495159,52.69523318942013,135.23150652853255,52.40758540483887,139.30124110754917,52.40758540483887C143.37097568656583,52.40758540483887,147.44071026558248,52.40758540483887,151.51044484459914,52.40758540483887C155.5801794236158,52.40758540483887,159.6499140026324,52.40205371667423,163.71964858164907,52.39099034034495C167.7893831606657,52.37992696401567,171.85911773968235,52.2900370313334,175.92885231869897,52.0881304133103C179.99858689771563,51.88622379528721,184.06832147673225,46.12549608179408,188.1380560557489,44.320644525752144C192.20779063476556,42.515792969710205,196.27752521378218,42.03843593951,200.34725979279884,41.25902107705869C204.41699437181546,40.47960621460738,208.48672895083212,39.891421812020695,212.55646352984874,39.64415535104426C216.6261981088654,39.39688889006783,220.69593268788202,39.520522120556045,224.76566726689867,39.27325565957961C228.83540184591533,39.02598919860318,232.90513642493198,34.85067097164653,236.97487100394864,34.85067097164653C241.04460558296526,34.85067097164653,245.11434016198191,34.85067097164653,249.18407474099854,34.85067097164653C253.25380932001516,34.85067097164653,257.3235438990318,34.85067097164653,261.39327847804844,34.85067097164653C265.4630130570651,34.85067097164653,269.5327476360817,34.85067097164653,273.60248221509835,34.85067097164653C277.672216794115,34.85067097164653,281.7419513731317,34.70518757290808,285.81168595214837,34.70496630538102C289.881420531165,34.70474503785396,293.9511551101816,34.704634404090434,298.02088968919827,34.704634404090434C302.0906242682149,34.704634404090434,306.1603588472316,34.704634404090434,310.23009342624823,34.704634404090434C314.2998280052649,34.704634404090434,318.3695625842815,34.704634404090434,322.43929716329814,34.704634404090434C326.5090317423148,34.704634404090434,330.5787663213314,34.24835310579907,334.64850090034804,34.07800476875735C338.7182354793647,33.90765643171564,342.7879700583813,33.94618463978495,346.85770463739794,33.682544381840145C350.9274392164146,33.41890412389534,354.99717379543125,30.434668992630556,359.0669083744479,30.42924793822894C363.13664295346456,30.423826883827324,367.20637753248116,30.426537411028132,371.2761121114978,30.421116356626516C375.34584669051446,30.4156953022249,379.4155812695311,30.356838140149026,383.48531584854777,30.324035229330267C387.5550504275644,30.291232318511508,391.624785006581,30.290789783458166,395.6945195855977,30.22429889171396C399.76425416461433,30.157807999969755,403.8339887436309,28.795353204926602,407.9037233226476,28.30690513995548C411.97345790166423,27.818457074984355,416.04319248068083,27.88436713947055,420.1129270596975,27.29361050188723C424.18266163871414,26.702853864303904,428.2523962177308,24.90253829255691,432.32213079674744,24.762365314455522C436.3918653757641,24.622192336354136,440.4615999547807,24.69227882540483,444.53133453379735,24.552105847303444C448.601069112814,24.411932869202058,452.67080369183066,24.333936066075008,456.7405382708473,23.897596503618132C460.81027284986396,23.461256941161256,464.8800074288806,21.738080760875995,468.94974200789727,21.738080760875995C473.0194765869139,21.738080760875995,477.0892111659305,21.738080760875995,481.1589457449472,21.738080760875995C485.77263049663145,21.738080760875995,490.3863152483157,17.91449492589244,495,14.090909090908884"
													/></g
												><g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"
													><g class="recharts-cartesian-axis-ticks"
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="172.26693227620544"
																x2="5"
																y2="172.26693227620544"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="172.26693227620544"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6760</tspan></text
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="139.07680328608805"
																x2="5"
																y2="139.07680328608805"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="139.07680328608805"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6780</tspan></text
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="105.88667429597064"
																x2="5"
																y2="105.88667429597064"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="105.88667429597064"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6800</tspan></text
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="72.69654530585326"
																x2="5"
																y2="72.69654530585326"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="72.69654530585326"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6820</tspan></text
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="39.506416315735905"
																x2="5"
																y2="39.506416315735905"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="39.506416315735905"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6840</tspan></text
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="5"
																y="5"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="7"
																y1="6.316287325618504"
																x2="5"
																y2="6.316287325618504"
															/><text
																stroke="none"
																type="number"
																orientation="left"
																width="60"
																height="200"
																x="9"
																y="11"
																fill="#00000055"
																font-size="11"
																visibility="visible"
																class="recharts-text recharts-cartesian-axis-tick-value"
																text-anchor="start"><tspan x="9" dy="0.355em">6860</tspan></text
															></g
														></g
													></g
												><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"
													><g class="recharts-cartesian-axis-ticks"
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="6.631850518002923"
																y1="209"
																x2="6.631850518002923"
																y2="205"
															/><g transform="translate(6.631850518002923,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>3/29</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="79.88707294030249"
																y1="209"
																x2="79.88707294030249"
																y2="205"
															/><g transform="translate(79.88707294030249,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/02</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="153.14229536260206"
																y1="209"
																x2="153.14229536260206"
																y2="205"
															/><g transform="translate(153.14229536260206,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/07</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="226.39751778490162"
																y1="209"
																x2="226.39751778490162"
																y2="205"
															/><g transform="translate(226.39751778490162,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/11</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="299.6527402072012"
																y1="209"
																x2="299.6527402072012"
																y2="205"
															/><g transform="translate(299.6527402072012,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/16</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="372.90796262950073"
																y1="209"
																x2="372.90796262950073"
																y2="205"
															/><g transform="translate(372.90796262950073,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/20</text
																></g
															></g
														><g class="recharts-layer recharts-cartesian-axis-tick"
															><line
																stroke="#00000018"
																type="number"
																orientation="bottom"
																width="490"
																height="30"
																x="5"
																y="205"
																class="recharts-cartesian-axis-tick-line"
																fill="none"
																x1="446.1631850518003"
																y1="209"
																x2="446.1631850518003"
																y2="205"
															/><g transform="translate(446.1631850518003,211)"
																><text dy="12" font-size="11" fill="#00000055" visibility="visible"
																	>4/25</text
																></g
															></g
														></g
													></g
												></svg
											>
											<div
												class="recharts-tooltip-wrapper"
												style="pointer-events: none; visibility: hidden; position: absolute; top: 0px; left: 0px; transform: translate(279.538px, 69px);"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div style="margin-bottom: 40px;">
							<div>
								<div class="ant-space ant-space-vertical" style="gap: 24px;">
									<div class="ant-space-item">
										<div class="ant-statistic">
											<div class="ant-statistic-title">
												<span style="color: rgb(245, 163, 18); font-weight: 600;"
													><span style="margin-right: 5px;">JBX</span><span
														role="img"
														aria-label="question-circle"
														tabindex="-1"
														class="anticon anticon-question-circle"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="question-circle"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
															/><path
																d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
															/></svg
														></span
													></span
												>
											</div>
											<div class="ant-statistic-content">
												<div class="ant-descriptions">
													<div class="ant-descriptions-view">
														<table>
															<tbody
																><tr class="ant-descriptions-row"
																	><td class="ant-descriptions-item" colspan="1"
																		><div class="ant-descriptions-item-container">
																			<span
																				class="ant-descriptions-item-label"
																				style="width: 128px;">Address</span
																			><span class="ant-descriptions-item-content"
																				><div style="width: 100%;">
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0x3abF...646f66</span
																					>
																				</div></span
																			>
																		</div></td
																	></tr
																><tr class="ant-descriptions-row"
																	><td class="ant-descriptions-item" colspan="1"
																		><div class="ant-descriptions-item-container">
																			<span
																				class="ant-descriptions-item-label"
																				style="width: 128px;">Total supply</span
																			><span class="ant-descriptions-item-content"
																				><div
																					style="display: flex; justify-content: space-between; align-items: baseline; width: 100%; gap: 5px; flex-wrap: wrap;"
																				>
																					2,433,212,945<button
																						type="button"
																						class="ant-btn ant-btn-sm">Holders</button
																					>
																				</div></span
																			>
																		</div></td
																	></tr
																><tr class="ant-descriptions-row"
																	><td class="ant-descriptions-item" colspan="1"
																		><div class="ant-descriptions-item-container">
																			<span
																				class="ant-descriptions-item-label"
																				style="width: 128px;">Your balance</span
																			><span class="ant-descriptions-item-content"
																				><div
																					style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: space-between; width: 100%;"
																				>
																					<div>
																						<div>0 JBX</div>
																						<div>0 claimable</div>
																						<div
																							style="cursor: default; font-size: 0.8rem; font-weight: 500; color: rgba(0, 0, 0, 0.333);"
																						>
																							0% of supply
																						</div>
																					</div>
																					<button type="button" class="ant-btn ant-btn-sm"
																						>Manage</button
																					>
																				</div></span
																			>
																		</div></td
																	></tr
																></tbody
															>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
								<span style="color: rgb(245, 163, 18); font-weight: 600; margin-bottom: 10px;"
									><span style="margin-right: 5px;">Funding cycle</span><span
										role="img"
										aria-label="question-circle"
										tabindex="-1"
										class="anticon anticon-question-circle"
										><svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="question-circle"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
											><path
												d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
											/><path
												d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
											/></svg
										></span
									></span
								>
							</div>
							<div
								class="ant-space ant-space-horizontal ant-space-align-center"
								style="font-size: 0.8rem; margin-bottom: 12px; gap: 16px;"
							>
								<div class="ant-space-item" style="">
									<div
										class="hover-text-secondary"
										role="button"
										style="text-transform: uppercase; cursor: pointer; color: rgba(0, 0, 0, 0.6); font-weight: 600;"
									>
										Current
									</div>
								</div>
								<div class="ant-space-item" style="">
									<div
										class="hover-text-secondary"
										role="button"
										style="text-transform: uppercase; cursor: pointer; color: rgba(0, 0, 0, 0.333); font-weight: 500;"
									>
										Upcoming
									</div>
								</div>
								<div class="ant-space-item">
									<div
										class="hover-text-secondary"
										role="button"
										style="text-transform: uppercase; cursor: pointer; color: rgba(0, 0, 0, 0.333); font-weight: 500;"
									>
										History
									</div>
								</div>
							</div>
							<div>
								<div style="position: relative;">
									<div style="margin-bottom: 10px;">
										<div
											style="background: rgb(243, 241, 236); box-shadow: rgb(231, 227, 220) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
										>
											<div
												class="ant-collapse ant-collapse-icon-position-left minimal"
												style="background: transparent; border: none;"
											>
												<div class="ant-collapse-item" style="border: none;">
													<div
														class="ant-collapse-header"
														role="button"
														tabindex="0"
														aria-expanded="false"
													>
														<span
															role="img"
															aria-label="right"
															class="anticon anticon-right ant-collapse-arrow"
															><svg
																viewBox="64 64 896 896"
																focusable="false"
																data-icon="right"
																width="1em"
																height="1em"
																fill="currentColor"
																aria-hidden="true"
																><path
																	d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
																/></svg
															></span
														>
														<div
															style="display: flex; width: 100%; justify-content: space-between; cursor: pointer;"
														>
															<div><span>Cycle #20</span></div>
															<span style="color: rgba(0, 0, 0, 0.6); margin-left: 10px;"
																>9d 19h 22m until #21</span
															>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div style="margin-bottom: 10px;">
										<div
											style="background: rgb(243, 241, 236); box-shadow: rgb(231, 227, 220) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
										>
											<div>
												<div class="ant-space ant-space-vertical" style="width: 100%; gap: 24px;">
													<div class="ant-space-item" style="">
														<div
															style="display: flex; justify-content: space-between; align-items: baseline;"
														>
															<div>
																<div>
																	<span style="font-size: 1rem; font-weight: 500;"
																		><span>US$</span>0
																	</span><span
																		style="font-size: 0.7rem; font-weight: 500; cursor: default; color: rgba(0, 0, 0, 0.6);"
																		><span style="margin-right: 5px;">AVAILABLE</span><span
																			role="img"
																			aria-label="question-circle"
																			tabindex="-1"
																			class="anticon anticon-question-circle"
																			><svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="question-circle"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																				><path
																					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																				/><path
																					d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																				/></svg
																			></span
																		></span
																	>
																</div>
																<div
																	style="font-size: 0.7rem; font-weight: 500; cursor: default; color: rgba(0, 0, 0, 0.333);"
																>
																	<div>
																		<span>US$</span>170,300<span>/170,300 </span> distributed
																	</div>
																	<div>
																		<div
																			class="ant-space ant-space-horizontal ant-space-align-center"
																			style="gap: 8px;"
																		>
																			<div class="ant-space-item" style="">
																				<div
																					style="vertical-align: middle; line-height: 1; color: rgba(0, 0, 0, 0.333);"
																				>
																					<span style="font-family: sans-serif;">Ξ</span>5.9231
																				</div>
																			</div>
																			<div class="ant-space-item">
																				<span
																					role="img"
																					aria-label="crown"
																					class="anticon anticon-crown"
																					><svg
																						viewBox="64 64 896 896"
																						focusable="false"
																						data-icon="crown"
																						width="1em"
																						height="1em"
																						fill="currentColor"
																						aria-hidden="true"
																						><path
																							d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																						/></svg
																					></span
																				> owner balance
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<button type="button" class="ant-btn ant-btn-ghost ant-btn-sm"
																>Distribute funds</button
															>
														</div>
													</div>
													<div class="ant-space-item">
														<div>
															<span
																><span style="margin-right: 5px;"
																	><h4 style="display: inline-block;">
																		Funding Distribution
																	</h4></span
																><span
																	role="img"
																	aria-label="question-circle"
																	tabindex="-1"
																	class="anticon anticon-question-circle"
																	><svg
																		viewBox="64 64 896 896"
																		focusable="false"
																		data-icon="question-circle"
																		width="1em"
																		height="1em"
																		fill="currentColor"
																		aria-hidden="true"
																		><path
																			d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																		/><path
																			d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																		/></svg
																	></span
																></span
															>
															<div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>tankbottoms.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>22.64% (<span>US$</span>37,615)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div>
																					<div style="font-weight: 500;">
																						<a
																							class="text-primary hover-text-action-primary hover-text-decoration-underline"
																							href="#/p/peel"
																							style="font-weight: 500;">@peel</a
																						>:
																					</div>
																					<div
																						style="font-size: 0.8rem; color: rgba(0, 0, 0, 0.6); margin-left: 10px;"
																					>
																						<span
																							><span style="margin-right: 5px;">Tokens:</span><span
																								role="img"
																								aria-label="question-circle"
																								tabindex="-1"
																								class="anticon anticon-question-circle"
																								><svg
																									viewBox="64 64 896 896"
																									focusable="false"
																									data-icon="question-circle"
																									width="1em"
																									height="1em"
																									fill="currentColor"
																									aria-hidden="true"
																									><path
																										d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																									/><path
																										d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																									/></svg
																								></span
																							></span
																						>
																						<span
																							style="cursor: default; user-select: all; line-height: 22px;"
																							>dao.jbx.eth</span
																						>
																						<span
																							role="img"
																							aria-label="crown"
																							class="anticon anticon-crown"
																							><svg
																								viewBox="64 64 896 896"
																								focusable="false"
																								data-icon="crown"
																								width="1em"
																								height="1em"
																								fill="currentColor"
																								aria-hidden="true"
																								><path
																									d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																								/></svg
																							></span
																						>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>18.05% (<span>US$</span>29,989)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>jango.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>12.63% (<span>US$</span>20,984)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0x7cF2...0F26C1</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>6.01% (<span>US$</span>9,985)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>drgorilla.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>5.83% (<span>US$</span>9,686)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div>
																					<div style="font-weight: 500;">
																						<a
																							class="text-primary hover-text-action-primary hover-text-decoration-underline"
																							href="#/p/wagmistudios"
																							style="font-weight: 500;">@wagmistudios</a
																						>:
																					</div>
																					<div
																						style="font-size: 0.8rem; color: rgba(0, 0, 0, 0.6); margin-left: 10px;"
																					>
																						<span
																							><span style="margin-right: 5px;">Tokens:</span><span
																								role="img"
																								aria-label="question-circle"
																								tabindex="-1"
																								class="anticon anticon-question-circle"
																								><svg
																									viewBox="64 64 896 896"
																									focusable="false"
																									data-icon="question-circle"
																									width="1em"
																									height="1em"
																									fill="currentColor"
																									aria-hidden="true"
																									><path
																										d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																									/><path
																										d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																									/></svg
																								></span
																							></span
																						>
																						<span
																							style="cursor: default; user-select: all; line-height: 22px;"
																							>dao.jbx.eth</span
																						>
																						<span
																							role="img"
																							aria-label="crown"
																							class="anticon anticon-crown"
																							><svg
																								viewBox="64 64 896 896"
																								focusable="false"
																								data-icon="crown"
																								width="1em"
																								height="1em"
																								fill="currentColor"
																								aria-hidden="true"
																								><path
																									d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																								/></svg
																							></span
																						>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>5.53% (<span>US$</span>9,187)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>filipv.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>5.48% (<span>US$</span>9,104)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div>
																					<div style="font-weight: 500;">
																						<a
																							class="text-primary hover-text-action-primary hover-text-decoration-underline"
																							href="#/p/canudaocomm"
																							style="font-weight: 500;">@canudaocomm</a
																						>:
																					</div>
																					<div
																						style="font-size: 0.8rem; color: rgba(0, 0, 0, 0.6); margin-left: 10px;"
																					>
																						<span
																							><span style="margin-right: 5px;">Tokens:</span><span
																								role="img"
																								aria-label="question-circle"
																								tabindex="-1"
																								class="anticon anticon-question-circle"
																								><svg
																									viewBox="64 64 896 896"
																									focusable="false"
																									data-icon="question-circle"
																									width="1em"
																									height="1em"
																									fill="currentColor"
																									aria-hidden="true"
																									><path
																										d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																									/><path
																										d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																									/></svg
																								></span
																							></span
																						>
																						<span
																							style="cursor: default; user-select: all; line-height: 22px;"
																							>dao.jbx.eth</span
																						>
																						<span
																							role="img"
																							aria-label="crown"
																							class="anticon anticon-crown"
																							><svg
																								viewBox="64 64 896 896"
																								focusable="false"
																								data-icon="crown"
																								width="1em"
																								height="1em"
																								fill="currentColor"
																								aria-hidden="true"
																								><path
																									d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																								/></svg
																							></span
																						>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>4.81% (<span>US$</span>7,991)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div>
																					<div style="font-weight: 500;">
																						<a
																							class="text-primary hover-text-action-primary hover-text-decoration-underline"
																							href="#/p/lexicondevils"
																							style="font-weight: 500;">@lexicondevils</a
																						>:
																					</div>
																					<div
																						style="font-size: 0.8rem; color: rgba(0, 0, 0, 0.6); margin-left: 10px;"
																					>
																						<span
																							><span style="margin-right: 5px;">Tokens:</span><span
																								role="img"
																								aria-label="question-circle"
																								tabindex="-1"
																								class="anticon anticon-question-circle"
																								><svg
																									viewBox="64 64 896 896"
																									focusable="false"
																									data-icon="question-circle"
																									width="1em"
																									height="1em"
																									fill="currentColor"
																									aria-hidden="true"
																									><path
																										d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																									/><path
																										d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																									/></svg
																								></span
																							></span
																						>
																						<span
																							style="cursor: default; user-select: all; line-height: 22px;"
																							>dao.jbx.eth</span
																						>
																						<span
																							role="img"
																							aria-label="crown"
																							class="anticon anticon-crown"
																							><svg
																								viewBox="64 64 896 896"
																								focusable="false"
																								data-icon="crown"
																								width="1em"
																								height="1em"
																								fill="currentColor"
																								aria-hidden="true"
																								><path
																									d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																								/></svg
																							></span
																						>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>3.97% (<span>US$</span>6,596)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0xstvg.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>3% (<span>US$</span>4,984)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>viraz.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.8% (<span>US$</span>2,990)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>zom-bae.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.8% (<span>US$</span>2,990)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>twodam.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.68% (<span>US$</span>2,791)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>lazervike.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.65% (<span>US$</span>2,741)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0x6212...A02ADf</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.28% (<span>US$</span>2,126)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0xA848...588664</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.2% (<span>US$</span>1,993)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>gulan.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>1.2% (<span>US$</span>1,993)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>0xFc81...AD56e1</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>0.67% (<span>US$</span>1,113)</span
																			>
																		</div>
																	</div>
																</div>
																<div style="margin-bottom: 5px;">
																	<div
																		style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																	>
																		<div style="line-height: 1.4;">
																			<div style="display: flex; align-items: baseline;">
																				<div
																					style="font-weight: 500; display: flex; align-items: baseline;"
																				>
																					<span
																						style="cursor: default; user-select: all; line-height: 22px;"
																						>mieos.eth</span
																					>:
																				</div>
																			</div>
																		</div>
																		<div>
																			<span style="font-weight: 400;"
																				>0.67% (<span>US$</span>1,113)</span
																			>
																		</div>
																	</div>
																</div>
																<div
																	style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
																>
																	<div style="line-height: 1.4;">
																		<div style="display: flex; align-items: baseline;">
																			<div
																				style="font-weight: 500; display: flex; align-items: baseline;"
																			>
																				<span
																					style="cursor: default; user-select: all; line-height: 22px;"
																					>dao.jbx.eth</span
																				><span style="margin-left: 5px;"
																					><span
																						role="img"
																						aria-label="crown"
																						class="anticon anticon-crown"
																						><svg
																							viewBox="64 64 896 896"
																							focusable="false"
																							data-icon="crown"
																							width="1em"
																							height="1em"
																							fill="currentColor"
																							aria-hidden="true"
																							><path
																								d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																							/></svg
																						></span
																					></span
																				>:
																			</div>
																		</div>
																	</div>
																	<div>
																		<div style="font-weight: 400;">0.1% (<span>US$</span>166)</div>
																	</div>
																</div>
																<form class="ant-form ant-form-vertical" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div style="margin-bottom: 10px;">
										<div
											style="background: rgb(243, 241, 236); box-shadow: rgb(231, 227, 220) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
										>
											<div>
												<div>
													<span
														><span style="margin-right: 5px;"
															><h4 style="display: inline-block;">Reserved JBX (50%)</h4></span
														><span
															role="img"
															aria-label="question-circle"
															tabindex="-1"
															class="anticon anticon-question-circle"
															><svg
																viewBox="64 64 896 896"
																focusable="false"
																data-icon="question-circle"
																width="1em"
																height="1em"
																fill="currentColor"
																aria-hidden="true"
																><path
																	d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																/><path
																	d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																/></svg
															></span
														></span
													>
												</div>
												<div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>sagekellyn.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>mieos.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>natasha-pankina.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>zeugh.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>burtula.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>tankbottoms.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>jasonz.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>zom-bae.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>johnnyd.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>drgorilla.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>filipv.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>twodam.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>0xstvg.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>aeolian.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>peri.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div style="margin-bottom: 5px;">
														<div
															style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
														>
															<div style="line-height: 1.4;">
																<div style="display: flex; align-items: baseline;">
																	<div
																		style="font-weight: 500; display: flex; align-items: baseline;"
																	>
																		<span
																			style="cursor: default; user-select: all; line-height: 22px;"
																			>jango.eth</span
																		>:
																	</div>
																</div>
															</div>
															<div>3.75%</div>
														</div>
													</div>
													<div
														style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
													>
														<div style="line-height: 1.4;">
															<div style="display: flex; align-items: baseline;">
																<div
																	style="font-weight: 500; display: flex; align-items: baseline;"
																>
																	<span
																		style="cursor: default; user-select: all; line-height: 22px;"
																		>dao.jbx.eth</span
																	><span style="margin-left: 5px;"
																		><span
																			role="img"
																			aria-label="crown"
																			class="anticon anticon-crown"
																			><svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="crown"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																				><path
																					d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																				/></svg
																			></span
																		></span
																	>:
																</div>
															</div>
														</div>
														<div><span style="font-weight: 400;">40%</span></div>
													</div>
												</div>
												<div
													style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px;"
												>
													<span>360,471 JBX reserved</span><button
														type="button"
														class="ant-btn ant-btn-sm"
														style="margin-left: 10px;">Distribute JBX</button
													>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="ant-col ant-col-xs-24 ant-col-md-12"
						style="padding-left: 20px; padding-right: 20px; margin-top: 40px;"
					>
						<div>
							<div style="display: flex; justify-content: space-between; align-items: baseline;">
								<div
									class="ant-space ant-space-horizontal ant-space-align-center"
									style="gap: 8px;"
								>
									<div class="ant-space-item" style="">
										<h4 style="color: rgb(245, 163, 18); font-weight: 600; margin: 0px;">
											Activity
										</h4>
									</div>
									<div class="ant-space-item">
										<button type="button" class="ant-btn ant-btn-text ant-btn-icon-only"
											><span role="img" aria-label="download" class="anticon anticon-download"
												><svg
													viewBox="64 64 896 896"
													focusable="false"
													data-icon="download"
													width="1em"
													height="1em"
													fill="currentColor"
													aria-hidden="true"
													><path
														d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
													/></svg
												></span
											></button
										>
									</div>
								</div>
								<div style="margin-bottom: 20px; max-width: 100%; overflow: auto;">
									<div
										class="ant-space ant-space-horizontal ant-space-align-center"
										style="gap: 16px;"
									>
										<div class="ant-space-item" style="">
											<div
												style="text-transform: uppercase; font-size: 0.8rem; font-weight: 600; color: rgba(0, 0, 0, 0.6); cursor: pointer;"
											>
												Pay
											</div>
										</div>
										<div class="ant-space-item" style="">
											<div
												style="text-transform: uppercase; font-size: 0.8rem; font-weight: 400; color: rgba(0, 0, 0, 0.333); cursor: pointer;"
											>
												Redeem
											</div>
										</div>
										<div class="ant-space-item" style="">
											<div
												style="text-transform: uppercase; font-size: 0.8rem; font-weight: 400; color: rgba(0, 0, 0, 0.333); cursor: pointer;"
											>
												Withdraw
											</div>
										</div>
										<div class="ant-space-item">
											<div
												style="text-transform: uppercase; font-size: 0.8rem; font-weight: 400; color: rgba(0, 0, 0, 0.333); cursor: pointer;"
											>
												Reserves
											</div>
										</div>
									</div>
								</div>
							</div>
							<div style="padding-bottom: 40px;">
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0023</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>an hour ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x19d2a7556a5e4bcac7216b66d551d738af62c6c3b46682c32ad21f58dfc07ad2"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x77a9...df091c</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @cryptoislanddao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1053</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>14 hours ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xfa974772649c49a0e87d5925702d525507c239b57964b39b67451e17cfc136de"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x7e7c...e1ee70</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @rebelsdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>~0.0000</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>15 hours ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xa2ffeffbf5ccf6717da9101a015b89cd4aafd6c2e4ded906bc1383fb24f1271b"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x0eea...185469</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>web3th.eth</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.2423</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>15 hours ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xb4fb2ba30dbbe7423616fd72c0479b0f327dbfaa73f18f6db3a09e256cf75bdf"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>1.95</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>20 hours ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xba7887292bbe31909008bb0ca542c9fdf6219ecad309ab3729b23a77fd9f38ba"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xad5a...b5288f</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;" />
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>2.3103</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>20 hours ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x3ee483f39b4fdc881b7049b1531a60f0db0a0a72884f82be425a7dfbada33bee"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0024</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>2 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xa3448e8455321a6b12adaeed4e32f82a64e49d1e78a0c7522bcb9b3eeec7bac1"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x6957...ff2c5d</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @basic</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0487</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>2 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xfcbf581763b809809a08bbbbbd80e0198c8d756bfe1ba8ca1e01c6280be53699"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x6957...ff2c5d</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @deepcoin</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.25</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>2 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x2405689edd804dfd2c5e3a3365b074f55180f325cea91eb864090ca72e49b150"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>james.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;" />
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>1</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>2 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xc668542c4b4a18616c992fcc0de546748f3b138b3da29c1feda93920886cc915"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xeed7...8eef7f</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;" />
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1059</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>3 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x95b51edf7ec6e3c764f50e2b8f405d7215b78052197f1a2acb5c191d23166b6a"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x82f0...8d86e8</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lexicondevils</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0428</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>3 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xc5a01018dca373b2941cf09a3e82878709e90c78b1df20770080683860f2354f"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xd5fd...e925ad</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @urrdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.2456</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>3 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x6634f7d079046131d78ea800aebcfe74ae36ad4ee19ab546e2ed4ade47198399"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>peel.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @peel</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0538</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>4 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x53d79bea90841029b66dd28a31e63d070a0e7de8bddce679c8098ecad91deafc"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x7bf6...ce142c</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @buytwitterdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0728</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>4 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x4132d7b4543d80c95751e091eae7a31bda187146a6203516ab0341bc60aa5455"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>slice-so.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @slice</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>1.4006</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>4 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xefb74a161ebe27cea857826488a839ee7f93d112eb43a9ea2d43967d03a1be62"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>dao.jbx.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @juicebox</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1097</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>4 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x5f995dcd468596e119fe87e62269a6cfaa7e4cba523646f37d28d68c035bb2cd"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>gutterchad.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @kingpindao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0148</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>4 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xec0ce0bbcddf1515c2c86b94a4896c337aa6bd10aef5b260caa433690eb71cfc"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x4f3e...408f88</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @allinmuskdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.5569</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>5 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x2a19466cd94ff5372bc821be6a012180b14a6e9031ffc27cbd4e43014e2d2435"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x99ec...acd727</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @mountaindao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0536</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>5 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x66498ef2407e3fbf1e8b24d9896fde98134ccdc58eeae03fa1a278d63d1a2625"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xf80b...5af523</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @dreamerdao_official</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.9096</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>6 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x5dce0d32a26c9e7d343b1ba6b10c7c5e8109cfe39ad43a2e15f901dab5b791ec"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link">
														<svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														>
													</span></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x7e7c...e1ee70</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @rebelsdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0825</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>6 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x475e19b841baa7ed213c2315ad3a226cb56c55b1a9329e738fb72b52fdcabab5"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>tiledao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @tiles</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1633</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>6 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xae79a7aa563962afdbfbbd377c06c24218f9545e565add72e192d78983a54c5a"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>canudao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @canudaocomm</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.03</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>6 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xfab2232b9e85cecd6918277b2df1edde5793baf61ac09de2dafbd3cf14414da9"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x2380...ad9a1e</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;" />
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0300</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>7 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xc2cd62809b3a4d1bc6f92bf876f230a417d61e74c130cf4bc3321f248025d75e"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0585</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>8 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xf26aba64c60a12a5c6b85f7a8f8a4518cc81788df441147f7c145b934687db7b"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9cba...33dfc5</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @hundreddaox2e</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0048</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>8 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x6c3a61a59998ef2679c57ab07a205091fe6a778bce760666fc14fb898357a7bc"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x4f3e...408f88</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @allinmuskdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1341</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>9 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x7931f987144f4aac8da69fb524d610a50cf86471b75bf5262e29e4126e93da55"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xf80b...5af523</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @dreamerdao_official</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0071</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>9 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xa5e851df8c6dc1920945cc48d61dd40c8321ee9a4fdde64e85f7e1c8962eba39"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x5a40...accb50</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lossdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>1.7622</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>9 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xe6014c50b728acff4cc2dadae64226a7bb8ef5f3668254bf9815664a52218d78"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0568</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>9 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x7054b65f317c5bd300f1eac358ee97a478563f17b575da0b31f103a00774dc29"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>presidentialdao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @presidentialdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.2382</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>10 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x43cc8c0b7c8db3091699fb3278b249d1b19c3ed481b2ec47de615297c0b22a0c"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>peel.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @peel</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.2926</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>10 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x979740bc9c4dfe9c444ca7d1c3d92608babf2a3f038bbf7c9a4ef884c7cab16c"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>peace.movedao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @peace</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0849</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>10 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xf9ec5c9be4d39ec311607a6fe8d5f09329df6c27784a6f584642c668ee5ba2c0"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>wagmi-studios.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @wagmistudios</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0002</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>13 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x9fb70154c5026f25cee57ecb5a5d20c6e9aee791cdc7119b711531d7c2ef79f4"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xe47a...a0e9b4</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @thexdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0825</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>13 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x8199f4df73eacd21a6462e913a879123765db2541e65f41faaff39db6f681eb9"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>tiledao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @tiles</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0052</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>13 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x6e337b6e49be55275a2f0f9de34b48a02083bd3479c5c288a9b846ef0c2196da"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>danceroutine.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @dance</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>2.3148</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>16 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xda6f91abd4d0111520c911e5343672deacb855fe167db0d41ab9a5a8c70abe46"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1618</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>16 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xf509c0e97531fce3b26e36b5798266004cdfbfd255225c2055846c0e59497a6b"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>canudao.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @canudaocomm</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0911</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>17 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x041e7cc86d62bd0f4d5b7193aa94bb7f439688aefffa959687607126fde2423d"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>johnnyd.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @johnnydao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0971</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>17 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xb5b76d610f2257557111e08a73f68eae8ae7e77ac86d183f5864011ac17ebe42"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x82f0...8d86e8</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lexicondevils</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.2234</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>17 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x4002f9977dc633d0dd5e72843ad4456b8aad3b4ef602c5496791e26560411add"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>peel.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @peel</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0030</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>18 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xdef302f6fd967305c141733477d0d5cee569043567afb4ed3b257ba24e735684"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>danceroutine.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @dance</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.9700</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>18 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xee129e58b284a1e606c30f6e5061990a110fc9bb1e1b7f210847f483b53674c5"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>dao.jbx.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @juicebox</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>1.8448</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>18 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x77503e9ac02c3691826fda69f3fdb74b7a9f2fa5b24868d9e6a10828539cca4f"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0006</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>19 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x4cc4147e17fee4cb615bf651a686ddfccf99bdccd4b1707a9d1b42d3e8e5a88b"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x6b88...66f07c</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @myspacedao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>4.3147</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>19 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x7ae7addec8962e026cef42fdfa4db32743c1f302dd766bf15eea00b5d2a8d461"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9e84...49e46a</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @lunchdao</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.0652</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>20 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0xd832776109253ff802e21a722b8d3fa632014f78b6e036d091697a2d1c9b588c"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0xae00...25c0ff</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>Fee from @slice</span
											>
										</div>
									</div>
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.3</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>20 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x6ad8fdb04d87c5ccc8ce9480ed24962d439c5ccb51ef34f03f64f259a3c22d31"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>0x9d6f...7d8280</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;" />
								</div>
								<div
									style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(0, 0, 0, 0.094);"
								>
									<div style="display: flex; place-content: space-between;">
										<div>
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">Paid</div>
											<div style="line-height: 1.4rem; font-size: 1rem;">
												<span><span style="font-family: sans-serif;">Ξ</span>0.1</span>
											</div>
										</div>
										<div style="text-align: right;">
											<div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333);">
												<span>20 days ago</span>
												<a
													class="hover-action"
													href="https://etherscan.io/tx/0x4ffdccdb4edfe5a164ae524196c31524a0be3c2d7c8d516ed3ee14a3f4fcef32"
													target="_blank"
													rel="noopener noreferrer"
													style="font-weight: 400;"
													><span role="img" aria-label="link" class="anticon anticon-link"
														><svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="link"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
															><path
																d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"
															/></svg
														></span
													></a
												>
											</div>
											<div
												style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.333); line-height: 1.4rem;"
											>
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>yethanyen.eth</span
												>
											</div>
										</div>
									</div>
									<div style="margin-top: 5px;">
										<div style="margin-top: 5px;">
											<span
												style="color: rgba(0, 0, 0, 0.6); overflow-wrap: break-word; padding-right: 0.5rem;"
												>juice</span
											>
										</div>
									</div>
								</div>
								<div style="text-align: center; color: rgba(0, 0, 0, 0.6); cursor: pointer;">
									Load more
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="text-align: center; padding: 20px;">
				<button type="button" class="ant-btn ant-btn-link">Back to top</button>
			</div>
			<a
				class="feedback-button hide-mobile "
				href="https://auditor.typeform.com/to/REMUTIbQ?project=juicebox&amp;address=0x283e4500fd7c9e1bf83b828f13a597b47311700c&amp;resolution=1139x984&amp;referrer=stoned-banny#"
				target="_blank"
				rel="noopener noreferrer"><img src="/stoned_banny.png" alt="Stoned banny" /></a
			>
		</div>
	</main>
</section>

<style>
	a {
		color: var(--text-action-primary);
	}
	a,
	button,
	code,
	div,
	p {
		font-family: 'DM Mono', monospace;
	}

	svg {
		max-width: calc(100vw - 40px);
	}
</style>
