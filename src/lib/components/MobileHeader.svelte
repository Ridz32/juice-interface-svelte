<script>
	import { darkMode } from '$stores';
	import { toggleTheme } from './DarkmodeToggle.svelte';

	import Icon from './Icon.svelte';

	let showMenu = false;
</script>

<header
	class="ant-layout-header top-nav top-nav-mobile"
	style="display: flex; justify-content: space-between; align-items: center; background: var(--background-l0); padding: 16px 8px; width: 100%; position: fixed;"
>
	<div class="ant-collapse ant-collapse-icon-position-left" style="border: none;">
		<div class="ant-collapse-item ant-collapse-no-arrow" style="border: none;">
			<div class="ant-collapse-header" role="button" tabindex="0" aria-expanded="false">
				<div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 8px;">
					<div class="ant-space-item" style="">
						<a href="/" style="display: inline-block;"
							><img
								src={$darkMode ? '/images/juice_logo-od.png' : '/images/juice_logo-ol.png'}
								alt="Juicebox logo"
								style="height: 30px;"
							/></a
						>
					</div>
					<div
						class="ant-space-item"
						on:click={() => {
							showMenu = !showMenu;
						}}
					>
						<span
							role="img"
							aria-label="menu"
							class="anticon anticon-menu"
							style="color: var(--text-primary) font-size: 20px; padding-top: 6px; padding-left: 10px;"
						>
							<Icon name="hamburger" />
						</span>
					</div>
				</div>
			</div>
		</div>
		{#if showMenu}
			<div class="ant-collapse-content ant-collapse-content-active" style="">
				<div class="ant-collapse-content-box">
					<ul
						class="ant-menu ant-menu-root ant-menu-inline"
						role="menu"
						tabindex="0"
						data-menu-list="true"
					>
						<div class="ant-space ant-space-vertical" style="flex: 1 1 0%; gap: 20px;">
							<div class="ant-space-item" style="">
								<a class="nav-menu-item hover-opacity centered" href="/projects">Projects</a>
							</div>
							<div class="ant-space-item" style="">
								<a class="nav-menu-item hover-opacity">FAQ</a>
							</div>
							<div class="ant-space-item">
								<a
									class="nav-menu-item hover-opacity"
									href="https://discord.gg/6jXrJSyDFf"
									target="_blank"
									rel="noreferrer">Discord</a
								>
							</div>
							<!-- TODO resource dropdown -->
							<!-- <div
								role="menuitem"
								class="ant-menu-submenu-title ant-space-item"
								tabindex="-1"
								aria-expanded="false"
								aria-haspopup="true"
								data-menu-id="rc-menu-uuid-90877-1-undefined"
								aria-controls="rc-menu-uuid-90877-1-undefined-popup"
								style="padding-left: 0px;"
							>
								<span class="ant-menu-title-content">Resources </span>
								<Icon direction="w" name="down" />
							</div> -->
						</div>
						<div eventkey="tmp_key-2" style="margin-left: 15px; margin-top: 15px">
							<li
								class="ant-menu-item ant-menu-item-active ant-menu-item-only-child"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-90877-1-undefined"
								style="padding-left: 0px;"
							>
								<span class="ant-menu-title-content"
									><div class="language-selector" style="cursor: pointer;">
										<span
											role="img"
											aria-label="global"
											class="anticon anticon-global"
											style="margin-bottom: 2px;"
										>
											<Icon name="global" />
										</span>
										<div
											class="ant-select medium ant-select-single ant-select-show-arrow"
											style="display: flex; align-items: center; justify-content: space-evenly; cursor: pointer; height: 30px; font-weight: 500;"
										>
											<div class="ant-select-selector">
												<span class="ant-select-selection-search"
													><input
														autocomplete="off"
														type="search"
														class="ant-select-selection-search-input"
														role="combobox"
														aria-expanded="false"
														aria-haspopup="listbox"
														aria-owns="rc_select_0_list"
														aria-autocomplete="list"
														aria-controls="rc_select_0_list"
														aria-activedescendant="rc_select_0_list_0"
														readonly=""
														unselectable="on"
														value=""
														id="rc_select_0"
														style="opacity: 0;"
													/></span
												><span class="ant-select-selection-item" title="English">English</span>
											</div>
											<span
												class="ant-select-arrow"
												unselectable="on"
												aria-hidden="true"
												style="user-select: none;"
												><Icon name="caret" />
											</span>
										</div>
									</div></span
								>
							</li>
							<li
								class="ant-menu-item ant-menu-item-active ant-menu-item-only-child"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-90877-1-undefined"
								style="padding-left: 0px;"
							>
								<span class="ant-menu-title-content"
									><div
										style="display: flex; cursor: pointer; align-items: center;"
										on:click={toggleTheme}
									>
										<Icon name={$darkMode ? 'moon' : 'sun'} />
										<div style="margin: 0px 0px 2px 10px;">
											{$darkMode ? 'Dark' : 'Light'} theme
										</div>
									</div></span
								>
							</li>
							<li
								class="ant-menu-item ant-menu-item-active ant-menu-item-only-child"
								role="menuitem"
								tabindex="-1"
								data-menu-id="rc-menu-uuid-90877-1-undefined"
								style="padding-left: 0px;"
							>
								<span class="ant-menu-title-content"
									><div>
										<span role="img" aria-label="message" size="16" class="anticon anticon-message"
											><Icon name="message" /></span
										><a
											class="quiet"
											href="https://auditor.typeform.com/to/REMUTIbQ?resolution=720x761&amp;referrer=stoned-banny#"
											target="_blank"
											rel="noopener noreferrer"
											style="margin: 0px 0px 2px 12px; font-weight: 400;">Give feedback</a
										>
									</div></span
								>
							</li>
						</div>
					</ul>
					<div aria-hidden="true" style="display: none;">
						<div class="ant-space ant-space-vertical" style="flex: 1 1 0%; gap: 0px;">
							<div class="ant-space-item" style="">
								<a
									class="nav-menu-item hover-opacity"
									href="/#/projects"
									style="cursor: pointer; display: flex; align-items: center; font-weight: 600; color: var(--text-primary);"
									>Projects</a
								>
							</div>
							<div class="ant-space-item" style="">
								<a
									class="nav-menu-item hover-opacity"
									style="cursor: pointer; display: flex; align-items: center; font-weight: 600; color: var(--text-primary);"
									>FAQ</a
								>
							</div>
							<div class="ant-space-item">
								<a
									class="nav-menu-item hover-opacity"
									href="https://discord.gg/6jXrJSyDFf"
									target="_blank"
									rel="noreferrer"
									style="cursor: pointer; display: flex; align-items: center; font-weight: 600; color: var(--text-primary);"
									>Discord</a
								>
							</div>
						</div>
						<div eventkey="tmp_key-2" style="margin-left: 15px;" />
					</div>
					<div style="display: flex; flex-direction: column; align-items: center;">
						<button type="button" class="ant-btn">Connect</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</header>

<style>
	a {
		cursor: pointer;
		font-weight: 600;
		color: var(--text-primary);
	}

	span[aria-label='menu'] {
		transform: scale(1.5);
	}

	.ant-menu-root {
		border: none;
	}

	@media (min-width: 766.99px) {
		header {
			display: none !important;
		}
	}
	.ant-collapse {
		background: var(--background-l0);
		z-index: 999;
		position: absolute;
		width: 100%;
		top: 0px;
	}

	.ant-collapse-item {
		border: var(--border-secondary);
	}

	.ant-collapse-content {
		padding: 20px;
	}
</style>
