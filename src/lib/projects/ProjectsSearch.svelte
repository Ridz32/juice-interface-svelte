<script>
	import { getProjectsByHandle } from '$data/project';
	import Icon from '$lib/components/Icon.svelte';
	import Input from '$lib/components/Input.svelte';

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
	<Input bind:value={$searchText} placeholder="Search projects by handle" type="text">
		<div slot="addon">
			{#if $searchText}
				<Icon name="closeCircle" on:click={handleClear} />
			{/if}
		</div>
	</Input>

	<style>
		div[slot='addon'] {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0;
			height: 100%;
			display: flex;
			align-items: end;
			justify-content: center;
		}
		div[slot='addon']:hover {
			color: var(--icon-action-primary);
		}
	</style>
</form>
