<script lang="ts">
	export let opended = false;

	export let languages = {
		en: 'EN',
		ru: 'RU',
		tr: 'TR',
		fr: 'FR',
		es: 'ES',
		pt: 'PT',
		zh: '中文'
	};
</script>

{#if opended}
	<div
		class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft "
		style="position: absolute; border: 1px solid rgba(0, 0, 0, 0.094); margin-right: 20px; box-shadow: 0px 8px 12px var(--boxShadow-primary); min-width: 33px; left: 0; top: 100%;"
	>
		<div>
			<div role="listbox" id="rc_select_0_list" style="height: 0px; width: 0px; overflow: hidden;">
				<div role="option" id="rc_select_0_list_0" aria-selected="false">en</div>
				<div role="option" id="rc_select_0_list_1" aria-selected="false">zh</div>
			</div>
			<div class="rc-virtual-list" style="position: relative;">
				<div
					class="rc-virtual-list-holder"
					style="max-height: 256px; overflow-y: auto; overflow-anchor: none;"
				>
					<div>
						<div
							class="rc-virtual-list-holder-inner"
							style="display: flex; flex-direction: column;"
						>
							<div
								aria-selected="false"
								class="ant-select-item ant-select-item-option ant-select-item-option-active"
							>
								<div class="ant-select-item-option-content"><div>EN</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>中文</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>RU</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>TR</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>PT</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>ES</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
							<div aria-selected="false" class="ant-select-item ant-select-item-option">
								<div class="ant-select-item-option-content"><div>FR</div></div>
								<span
									class="ant-select-item-option-state"
									unselectable
									aria-hidden="true"
									style="user-select: none;"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
