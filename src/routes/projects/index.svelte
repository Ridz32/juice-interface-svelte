<script lang="ts">
	import TrendingProjects from '$lib/projects/TrendingProjects.svelte';
	import AllProjects from '$lib/projects/AllProjects.svelte';
	import HoldingsProjects from '$lib/projects/HoldingsProjects.svelte';
	import MyProjects from '$lib/projects/MyProjects.svelte';
	import ProjectsInfo from '$lib/projects/ProjectsInfo.svelte';
	import ProjectsTabs from '$lib/projects/ProjectsTabs.svelte';

	import { selectedProjectsTab } from '$stores/selectedProjectsTab';
</script>

<section
	class="ant-layout"
	style="display: flex; flex-direction: column; height: 100%; background: transparent;"
>
	<div class="ant-layout-content">
		<div style="max-width: 1080px; margin: 0px auto; padding: 20px;">
			<ProjectsInfo />
			<ProjectsTabs />
			{#if $selectedProjectsTab === 'trending'}
				<TrendingProjects />
			{:else if $selectedProjectsTab === 'holdings'}
				<HoldingsProjects />
			{:else if $selectedProjectsTab === 'myprojects'}
				<MyProjects />
			{:else if $selectedProjectsTab === 'all'}
				<AllProjects />
			{/if}
		</div>
	</div>
</section>
