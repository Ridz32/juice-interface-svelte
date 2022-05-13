<script lang="ts">
	import ProjectsTab from './ProjectsTab.svelte';
	import { projectCategory } from '$models/project-visibility';
	import type { ProjectCategory } from '$models/project-visibility';

	const TAB_TYPE_NAMES: { [k in ProjectCategory]: string } = {
		all: `All`,
		holdings: `Holdings`,
		myprojects: `My Projects`,
		trending: `Trending`
	};
</script>

<div
	style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; max-width: 100vw;"
>
	<div style="height: 40px; margin-top: 15px;">
		<div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 24px;">
			{#each projectCategory as category}
				<div class="ant-space-item">
					<ProjectsTab type={category} title={TAB_TYPE_NAMES[category]} />
				</div>
			{/each}
		</div>
	</div>
</div>
