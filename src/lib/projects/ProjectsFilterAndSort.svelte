<script>
	import Collapse from '$lib/components/Collapse.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { sortType, searchFilter } from '$stores/projectsForm';

	const SORT_TYPES_MAP = {
		totalPaid: 'Total Raised',
		createdAt: 'Date Created'
	};
	let options = [];
	Object.keys(SORT_TYPES_MAP).forEach((key) => {
		options.push({
			label: SORT_TYPES_MAP[key],
			value: key
		});
	});
</script>

<!-- <div class="filter-and-sort"> -->
<Collapse class="collapse">Filter</Collapse>
	{#each $searchFilter as filter}
		<label>
			<input type="checkbox" bind:checked={filter.selected} />
			{filter.filterType}
		</label>
	{/each}
<div class="filter-and-sort">
	<Dropdown {options} bind:value={$sortType} />
</div>
<style>
	.filter-and-sort {
		position: absolute;
		z-index: 20;
		right: 0;
		width: 180px;
	}
</style>
