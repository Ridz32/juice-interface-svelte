<script>
	import Collapse from '$lib/components/Collapse.svelte';
	import { projectSortType } from '$models/project-visibility';
	import { sortType, searchFilter } from '$stores/projectsForm';
</script>

<div class="filter-and-sort">
	<Collapse class="collapse">Filter</Collapse>
	<select value={searchFilter} multiple>
		{#each searchFilter as filter}
			<option value={filter}>
				{filter}
			</option>
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
