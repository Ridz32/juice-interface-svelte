<script>
	import { getProjectsByHandle } from '$data/project';

	import { searchText, hasSearched, searchResults, isSearching } from '$stores/projectsForm';

	const handleClear = () => {
		$searchText = '';
		$hasSearched = false;
	};

	const handleSubmit = async () => {
		if ($searchText.length === 0) {
			return;
		}
		$isSearching = true;
		$hasSearched = true;
		$searchResults = await getProjectsByHandle($searchText);
		$isSearching = false;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<span class="ant-input-affix-wrapper">
		<input
			placeholder="Search projects by handle"
			class="ant-input-group-wrapper ant-input-search"
			type="text"
			bind:value={$searchText}
		/>
		{#if $searchText != '' || $hasSearched}
			<span class="ant-input-suffix"
				><span
					role="button"
					aria-label="close-circle"
					tabindex="-1"
					class="anticon anticon-close-circle ant-input-clear-icon"
					on:click={handleClear}
					><svg
						viewBox="64 64 896 896"
						focusable="false"
						data-icon="close-circle"
						width="1em"
						height="1em"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
						/></svg
					></span
				></span
			>
		{/if}
	</span>
</form>
