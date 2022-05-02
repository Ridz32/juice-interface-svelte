<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let shown = false;
</script>

{#if shown}
	<div>
		<div tabindex="-1" class="ant-drawer ant-drawer-right ant-drawer-open">
			<div
				class="ant-drawer-mask"
				in:fade={{ duration: 100 }}
				out:fade
				on:click={() => (shown = false)}
			/>
			<div
				class="ant-drawer-content-wrapper"
				style="width: 600px;"
				in:fly={{ x: 120 }}
				out:fly={{ x: 120 }}
			>
				<div class="ant-drawer-content">
					<div class="ant-drawer-wrapper-body">
						<div class="ant-drawer-header-no-title">
							<button
								type="button"
								aria-label="Close"
								class="ant-drawer-close"
								style="--scroll-bar:0px;"
								on:click={() => (shown = false)}
								><span role="img" aria-label="close" class="anticon anticon-close"
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
								></button
							>
						</div>
						<div class="ant-drawer-body">
							<div class="ant-space ant-space-vertical" style="width: 100%; gap: 24px;">
								<div class="ant-space-item" style=""><h1>Tools</h1></div>
								<div class="ant-space-item" style="">
									<section>
										<h3>Transfer unclaimed JBX</h3>
										<p>Your balance: 0</p>
										<form class="ant-form ant-form-horizontal">
											<div class="ant-row ant-form-item" style="row-gap: 0px;">
												<div class="ant-col ant-col-4 ant-form-item-label">
													<label for="amount" class="" title="Amount">Amount</label>
												</div>
												<div class="ant-col ant-col-20 ant-form-item-control">
													<div class="ant-form-item-control-input">
														<div class="ant-form-item-control-input-content">
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
																								step="1"
																								placeholder="0"
																								class="ant-input-number-input"
																								value=""
																							/>
																						</div>
																					</div>
																					<div
																						style="margin-left: -40px; z-index: 1; font-size: 0.8rem;"
																					>
																						<div id="accessory69.51907575991166">
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
													</div>
												</div>
											</div>
											<div class="ant-row ant-form-item" style="row-gap: 0px;">
												<div class="ant-col ant-col-4 ant-form-item-label">
													<label for="to" class="" title="To">To</label>
												</div>
												<div class="ant-col ant-col-20 ant-form-item-control">
													<div class="ant-form-item-control-input">
														<div class="ant-form-item-control-input-content">
															<div class="ant-row ant-form-item" style="row-gap: 0px;">
																<div class="ant-col ant-form-item-control">
																	<div class="ant-form-item-control-input">
																		<div class="ant-form-item-control-input-content">
																			<input
																				autocomplete="off"
																				placeholder="juicebox.eth / 0x0000000000000000000000000000000000000000"
																				type="string"
																				class="ant-input"
																				value=""
																			/>
																			<div
																				class="ant-row ant-form-item"
																				style="height: 0px; max-height: 0px; margin: 0px; row-gap: 0px;"
																			>
																				<div class="ant-col ant-form-item-control">
																					<div class="ant-form-item-control-input">
																						<div class="ant-form-item-control-input-content">
																							<input
																								autocomplete="off"
																								hidden={true}
																								type="string"
																								class="ant-input"
																								value=""
																							/>
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
												</div>
											</div>
											<div class="ant-row ant-form-item" style="row-gap: 0px;">
												<div class="ant-col ant-col-20 ant-form-item-control">
													<div class="ant-form-item-control-input">
														<div class="ant-form-item-control-input-content">
															<button type="button" class="ant-btn ant-btn-primary ant-btn-sm"
																><span>Transfer JBX</span></button
															>
														</div>
													</div>
												</div>
											</div>
										</form>
									</section>
								</div>
								<div class="ant-space-item" style="">
									<div class="ant-divider ant-divider-horizontal" role="separator" />
								</div>
								<div class="ant-space-item" style="">
									<section>
										<h3>Add to Balance</h3>
										<p>Add funds to this project's balance without minting tokens.</p>
										<form class="ant-form ant-form-horizontal">
											<div class="ant-row ant-form-item" style="row-gap: 0px;">
												<div class="ant-col ant-col-4 ant-form-item-label">
													<label for="amount" class="" title="Amount">Amount</label>
												</div>
												<div class="ant-col ant-col-20 ant-form-item-control">
													<div class="ant-form-item-control-input">
														<div class="ant-form-item-control-input-content">
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
																								step="1"
																								placeholder="0"
																								class="ant-input-number-input"
																								value=""
																							/>
																						</div>
																					</div>
																					<div
																						style="margin-left: -40px; z-index: 1; font-size: 0.8rem;"
																					>
																						<div id="accessory61.315193358252685">
																							<div
																								role="button"
																								style="cursor: default; color: rgba(0, 0, 0, 0.933); background: rgb(231, 227, 220); font-weight: 500; white-space: nowrap; padding: 1px 6px; margin-left: 0px; margin-right: 0px; border-radius: 1px;"
																							>
																								ETH
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
													</div>
												</div>
											</div>
											<div class="ant-row ant-form-item" style="row-gap: 0px;">
												<div class="ant-col ant-col-20 ant-form-item-control">
													<div class="ant-form-item-control-input">
														<div class="ant-form-item-control-input-content">
															<button type="button" class="ant-btn ant-btn-primary ant-btn-sm"
																><span>Add to balance</span></button
															>
														</div>
													</div>
												</div>
											</div>
										</form>
									</section>
								</div>
								<div class="ant-space-item"><br /></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
