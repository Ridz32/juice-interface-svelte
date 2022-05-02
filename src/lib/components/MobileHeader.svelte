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
							><img src="/images/juice_logo-ol.png" alt="Juicebox logo" style="height: 30px;" /></a
						>
					</div>
					<div class="ant-space-item">
						<span
							role="img"
							aria-label="menu"
							class="anticon anticon-menu"
							style="color: rgba(0, 0, 0, 0.933); font-size: 20px; padding-top: 6px; padding-left: 10px;"
							><svg
								viewBox="64 64 896 896"
								focusable="false"
								data-icon="menu"
								width="1em"
								height="1em"
								fill="currentColor"
								aria-hidden="true"
								><path
									d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
								/></svg
							></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<div class="padding" />

<style>
	header {
		z-index: 1000;
	}
	.padding {
		height: 64px;
		width: 500px;
		position: relative;
		display: flex;
	}
	@media (min-width: 766.99px) {
		header {
			display: none !important;
		}
		.padding {
			display: none;
		}
	}
	.ant-collapse {
		background: var(--background-l0);
	}
</style>
