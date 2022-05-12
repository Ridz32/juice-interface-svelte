<script>
	import Collapse from '$lib/components/Collapse.svelte';
	import { projectSortType } from '$models/project-visibility';
	import { sortType, searchFilter } from '$stores/projectsForm';

	const SORT_TYPES_MAP = {
		totalPaid: 'Total Raised',
		createdAt: 'Date Created'
	};
</script>

<div class="filter-and-sort">
	<Collapse class="collapse">Filter</Collapse>
	{#each $searchFilter as filter}
		<label>
			<input type="checkbox" bind:checked={filter.selected} />
			{filter.filterType}
		</label>
	{/each}
	<select name="" id="" bind:value={$sortType}>
		{#each projectSortType as type}
			<option value={type}>{SORT_TYPES_MAP[type]}</option>
		{/each}
	</select>
</div>

<style>
	.filter-and-sort {
		display: 'flex';
		align-items: 'center';
		white-space: 'pre';
		flex-wrap: 'wrap';
		max-width: '100vw';
		border: none;
	}
</style>
