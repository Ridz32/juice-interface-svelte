<script>
	import { connectedAccount, disconnectWallet, walletConnect } from '$stores/web3';
	let opened = false;
</script>

{#if $connectedAccount}
	<div class="ant-space-item" style="position: relative;">
		<div
			class="ant-dropdown-trigger"
			style="height: 45px; border-radius: 2px; padding: 4px 19px 7px; display: flex; flex-direction: column; align-items: center; background: var(--background-l2);  user-select:none;cursor: pointer"
			on:click={() => (opened = !opened)}
		>
			<span style="line-height: 22px;">
				{$connectedAccount.slice(0, 6)}...{$connectedAccount.slice(-6)}
			</span>
			<div style="vertical-align: middle; line-height: 1; color: var(--text-tertiary);">
				<span style="font-family: sans-serif;">Ξ</span>0
			</div>
		</div>
		{#if opened}
			<div style="position: absolute; top: 50px; left: 0px; width: 100%;">
				<div>
					<div
						class="ant-dropdown ant-dropdown-placement-bottomRight"
						style="padding: 0px; min-width: 164px; left: 0; top: 0;"
					>
						<ul
							class="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light"
							role="menu"
							tabindex="0"
							data-menu-list="true"
						>
							<li
								class="ant-dropdown-menu-item"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-56979-2-0"
								style="padding: 10px 15px;"
							>
								<span class="ant-dropdown-menu-title-content"
									><a
										class="hover-action"
										href="https://etherscan.io/address/{$connectedAccount}"
										target="_blank"
										rel="noopener noreferrer"
										style="font-weight: 400;"
										>{$connectedAccount.slice(0, 6)}...{$connectedAccount.slice(-4)}</a
									>
									<span
										role="img"
										aria-label="copy"
										tabindex="-1"
										class="anticon anticon-copy copyIcon"
										style="z-index: 1; color: var(--text-primary)"
										><svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="copy"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
											><path
												d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
											/></svg
										></span
									></span
								>
							</li>
							<li
								class="ant-dropdown-menu-item"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-56979-2-1"
								style="padding: 10px 15px; color: var(--text-primary) display: flex; justify-content: space-between;"
							>
								<span
									class="ant-dropdown-menu-title-content"
									on:click={() => ((opened = false), disconnectWallet())}
								>
									Disconnect
									<span
										role="img"
										aria-label="logout"
										style="padding-left: 25px;"
										class="anticon anticon-logout"
									>
										<svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="logout"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
											><path
												d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
											/></svg
										>
									</span>
								</span>
							</li>
						</ul>
						<div aria-hidden="true" style="display: none;" />
					</div>
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div class="ant-space-item">
		<button type="button" class="ant-btn" on:click={() => walletConnect()}>Connect</button>
	</div>
{/if}
