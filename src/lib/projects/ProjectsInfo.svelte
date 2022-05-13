<script>
	import Icon from '$lib/components/Icon.svelte';
</script>

<div style="display: flex; justify-content: space-between; align-items: baseline;">
	<h1>Projects on Juicebox</h1>
	<a href="create"
		><button type="button" class="ant-btn ant-btn-primary ant-btn-lg">Create project</button></a
	>
</div>

<p>
	<span>
		<Icon name="infoCircle" />
	</span>
	The Juicebox protocol is open to anyone, and project configurations can vary widely. There are risks
	associated with interacting with all projects on the protocol. Projects built on the protocol are not
	endorsed or vetted by JuiceboxDAO or Peel. Do your own research and understand the risks before committing
	your funds.
</p>

<style>
	h1 {
		color: var(--text-header);
	}

	p {
		max-width: 800px;
		margin-bottom: 20px;
		font-size: 14px;
		font-weight: 300;
		line-height: 1.4;
	}
</style>
