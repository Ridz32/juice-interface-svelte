<script lang="ts">
	import Collapse from './Collapse.svelte';
	import Icon from './Icon.svelte';
	import Trans from './Trans.svelte';

    let isOpen: boolean;

	const resources = [
		{
			label: 'Docs',
			href: 'https://info.juicebox.money/docs/'
		},
		{
			label: 'Blog',
			href: 'https://info.juicebox.money/blog/'
		},
		{
			label: 'Workspace',
			href: 'https://juicebox.notion.site/'
		},
		{
			label: 'Podcast',
			href: 'https://open.spotify.com/show/4G8ji7vofcOx2acXcjXIa4?si=1e5e6e171ed744e8&nd=1'
		},
		{
			label: 'Peel',
			href: 'https://discord.com/invite/XvmfY4Hkcz'
		}
	];
</script>

<Collapse bind:isOpen>
	<button><Trans>Resources</Trans> <Icon name="down" direction={isOpen ? 's' : 'n'} /></button>
	<nav slot="content">
		{#each resources as resource}
			<a href={resource.href}>{resource.label}</a>
		{/each}
	</nav>
</Collapse>

<style>
	button {
		background: none;
		border: none;
		outline: inherit;
		display: inline-flex;
		width: 120px;
		justify-content: space-between;
		cursor: pointer;
		align-items: center;
		font-weight: 600;
		color: var(--text-primary);
        line-height: 0px;
		margin: 24px 10px 0px;
	}

    nav {
        display: flex;
        flex-direction: column;
		background: var(--background-l0);
        max-width: 120px;
        border: 1px solid var(--stroke-primary);
    }

    a {
        cursor: pointer;
        align-items: center;
        line-height: 40px;
        font-weight: 500;
        color: var(--text-primary);
        padding: 0px 15px;
    }
</style>
