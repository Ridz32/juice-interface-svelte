<script lang="ts">
	export let options: (string | number | boolean)[] = [];
	export let selected: string | number | boolean = options[0] || '';
	export let open = false;

	let activeOption: typeof selected;
</script>

<div
	class="ant-select small ant-select-single ant-select-show-arrow"
	style="font-size: 0.7rem; text-transform: uppercase; width: 100px;"
>
	<div class="ant-select-selector" on:click={() => (open = !open)}>
		<span class="ant-select-selection-search">
			<input
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
			/>
		</span>
		<span class="ant-select-selection-item">{selected}</span>
	</div>
	<span
		class="ant-select-arrow"
		unselectable={true}
		aria-hidden="true"
		style="user-select: none;"
		on:click={() => (open = !open)}
	>
		<span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix">
			<svg
				viewBox="64 64 896 896"
				focusable="false"
				data-icon="down"
				width="1em"
				height="1em"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
				/>
			</svg>
		</span>
	</span>
	<div style="position: absolute; top: 0px; left: 0px; width: 100%;">
		<div>
			<!-- ant-select-dropdown-hidden -->
			<div
				class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
				class:ant-select-dropdown-hidden={!open}
				style="min-width: 100px; width: 100px; left: 0; top: 25px;"
			>
				<div>
					<div
						role="listbox"
						id="rc_select_1_list"
						style="height: 0px; width: 0px; overflow: hidden;"
					>
						<div role="option" id="rc_select_1_list_1" aria-selected="false">7</div>
						<div role="option" id="rc_select_1_list_2" aria-selected="true">30</div>
						<div role="option" id="rc_select_1_list_3" aria-selected="false">90</div>
					</div>
					<div class="rc-virtual-list" style="position: relative;">
						<div
							class="rc-virtual-list-holder"
							style="max-height: 256px; overflow-y: hidden; overflow-anchor: none;"
						>
							<div>
								<div
									class="rc-virtual-list-holder-inner"
									style="display: flex; flex-direction: column;"
								>
									{#each options as option}
										<div
											aria-selected="false"
											class="ant-select-item ant-select-item-option"
											class:ant-select-item-option-active={activeOption === option}
											class:ant-select-item-option-selected={selected === option}
											on:pointerenter={() => (activeOption = option)}
											on:pointerleave={() => (activeOption = '')}
											on:click={() => ((selected = option), (open = false))}
										>
											<div class="ant-select-item-option-content">{option}</div>
											<span
												class="ant-select-item-option-state"
												unselectable={true}
												aria-hidden="true"
												style="user-select: none;"
											/>
										</div>
									{/each}
								</div>
							</div>
						</div>
						<div
							class="rc-virtual-list-scrollbar"
							style="width: 8px; top: 0px; bottom: 0px; right: 0px; position: absolute; display: none;"
						>
							<div
								class="rc-virtual-list-scrollbar-thumb"
								style="width: 100%; height: 128px; top: 0px; left: 0px; position: absolute; background: rgba(0, 0, 0, 0.5); border-radius: 99px; cursor: pointer; user-select: none;"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
