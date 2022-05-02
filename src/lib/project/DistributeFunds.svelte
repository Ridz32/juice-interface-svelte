<script lang="ts">
	export let opened = false;
</script>

{#if opened}
	<div class="ant-modal-root">
		<div class="ant-modal-mask" />
		<div
			tabindex="-1"
			class="ant-modal-wrap"
			role="dialog"
			aria-labelledby="rcDialogTitle2"
			on:click|self={() => (opened = false)}
		>
			<div role="document" class="ant-modal" style="width: 640px; transform-origin: 214.5px 612px;">
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none;"
				/>
				<div class="ant-modal-content">
					<button
						type="button"
						aria-label="Close"
						class="ant-modal-close"
						on:click={() => (opened = false)}
						><span class="ant-modal-close-x"
							><span
								role="img"
								aria-label="close"
								class="anticon anticon-close ant-modal-close-icon"
								><svg
									viewBox="64 64 896 896"
									focusable="false"
									data-icon="close"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									><path
										d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
									/></svg
								></span
							></span
						></button
					>
					<div class="ant-modal-header">
						<div class="ant-modal-title" id="rcDialogTitle2">Withdraw funds</div>
					</div>
					<div class="ant-modal-body">
						<div class="ant-space ant-space-vertical" style="width: 100%; gap: 24px;">
							<div class="ant-space-item" style="">
								<div>
									<div style="display: flex; justify-content: space-between;">
										Total funds: <div><span>US$</span>0</div>
									</div>
									<div style="display: flex; justify-content: space-between;">
										<div>JBX Fee (2.5%):</div>
										<div>- <span>US$</span>0</div>
									</div>
									<div style="display: flex; justify-content: space-between; font-weight: 500;">
										<div>Available after fee:</div>
										<div><span>US$</span>0</div>
									</div>
								</div>
							</div>
							<div class="ant-space-item" style="">
								<div>
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
																		unselectable
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
																		unselectable
																		role="button"
																		aria-label="Decrease Value"
																		aria-disabled="false"
																		class="ant-input-number-handler ant-input-number-handler-down"
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
																		aria-valuenow={0}
																		step={1}
																		placeholder="0"
																		class="ant-input-number-input"
																		value={0}
																	/>
																</div>
															</div>
															<div style="margin-left: -71px; z-index: 1; font-size: 0.8rem;">
																<div id="accessory12.468252921916513">
																	<div style="display: flex; align-items: center;">
																		<span style="margin-right: 8px; color: rgba(0, 0, 0, 0.933);"
																			>USD</span
																		>
																		<div
																			role="button"
																			style="cursor: pointer; color: rgb(24, 180, 199); background: rgba(50, 200, 219, 0.267); font-weight: 500; white-space: nowrap; padding: 1px 6px; margin-left: 0px; margin-right: 0px; border-radius: 1px;"
																		>
																			MAX
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div style="color: rgba(0, 0, 0, 0.933); margin-bottom: 10px;">
										<span style="font-weight: 500;"
											><span style="font-family: sans-serif;">Ξ</span>0</span
										> after 2.5% JBX fee
									</div>
								</div>
							</div>
							<div class="ant-space-item">
								<div>
									<h4>Funds will be distributed to:</h4>
									<div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>tankbottoms.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">22.64% (<span>US$</span>0)</span></div>
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
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>dao.jbx.eth</span
																>
																<span role="img" aria-label="crown" class="anticon anticon-crown"
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
												<div><span style="font-weight: 400;">18.05% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>jango.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">12.63% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>0x7cF2...0F26C1</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">6.01% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>drgorilla.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">5.83% (<span>US$</span>0)</span></div>
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
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>dao.jbx.eth</span
																>
																<span role="img" aria-label="crown" class="anticon anticon-crown"
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
												<div><span style="font-weight: 400;">5.53% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>filipv.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">5.48% (<span>US$</span>0)</span></div>
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
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>dao.jbx.eth</span
																>
																<span role="img" aria-label="crown" class="anticon anticon-crown"
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
												<div><span style="font-weight: 400;">4.81% (<span>US$</span>0)</span></div>
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
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>dao.jbx.eth</span
																>
																<span role="img" aria-label="crown" class="anticon anticon-crown"
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
												<div><span style="font-weight: 400;">3.97% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>0xstvg.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">3% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>viraz.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.8% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>zom-bae.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.8% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>twodam.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.68% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>lazervike.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.65% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>0x6212...A02ADf</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.28% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>0xA848...588664</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.2% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>gulan.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">1.2% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>0xFc81...AD56e1</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">0.67% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div style="margin-bottom: 5px;">
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>mieos.eth</span
															>:
														</div>
													</div>
												</div>
												<div><span style="font-weight: 400;">0.67% (<span>US$</span>0)</span></div>
											</div>
										</div>
										<div
											style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
										>
											<div style="line-height: 1.4;">
												<div style="display: flex; align-items: baseline;">
													<div style="font-weight: 500; display: flex; align-items: baseline;">
														<span style="cursor: default; user-select: all; line-height: 22px;"
															>dao.jbx.eth</span
														><span style="margin-left: 5px;"
															><span role="img" aria-label="crown" class="anticon anticon-crown"
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
											<div><div style="font-weight: 400;">0.1% (<span>US$</span>0)</div></div>
										</div>
										<form class="ant-form ant-form-vertical" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ant-modal-footer">
						<button on:click={() => (opened = false)} type="button" class="ant-btn"
							><span>Cancel</span></button
						><button
							on:click={() => (opened = false)}
							disabled
							type="button"
							class="ant-btn ant-btn-primary"><span>Withdraw</span></button
						>
					</div>
				</div>
				<div
					tabindex="0"
					aria-hidden="true"
					style="width: 0px; height: 0px; overflow: hidden; outline: none;"
				/>
			</div>
		</div>
	</div>
{/if}
