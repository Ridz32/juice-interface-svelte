<script lang="ts">
	import { BigNumber } from 'ethers';

	const OptionValue = {
    days: 60 * 60 * 24,
		hours: 60 * 60,
		minutes: 60,
		seconds: 1
	};

  export let value: BigNumber = BigNumber.from(14 * OptionValue.days);

	let inputValue: number = 14;
	let option = OptionValue.days;

	function setValue(e: Event) {
		value = BigNumber.from(inputValue * option);
	}

	function capitalize(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
</script>

<label for="fundingCycle">
	<small>*</small> Funding cycle duration
</label>
<section>
	<input id="fundingCycle" placeholder="14" on:blur={setValue} bind:value={inputValue} />
	<select bind:value={option} on:select={setValue}>
		{#each Object.keys(OptionValue) as key}
			<option value={OptionValue[key]}>{capitalize(key)}</option>
		{/each}
	</select>
</section>

<style>
	label {
		display: block;
		margin: 20px 0px 10px;
	}
	small {
		font-size: 8px;
		color: red;
		vertical-align: text-top;
	}

	section {
		display: flex;
	}

	/* TODO input abstraction */
	select,
	input {
		background: transparent;
		border: 1px solid #d9d9d9;
		border-radius: 2px;
		color: rgba(0, 0, 0, 0.85);
		font-variant: tabular-nums;
		font-family: inherit;
		font-size: 14px;
		font-weight: 300;
		width: 150px;
		margin-left: 20px;
	}

	input {
		flex-grow: 1;
		margin: 0;
		list-style: none;
		-webkit-font-feature-settings: 'tnum', 'tnum';
		font-feature-settings: 'tnum', 'tnum';
		position: relative;
		display: inline-block;
		/* width: 100%; */
		min-width: 0;
		padding: 4px 11px;
		line-height: 1.5715;
		transition: all 0.3s;
		box-sizing: border-box;
	}
</style>
