<input type="checkbox" {...$$props} />

<style>
	input[type='checkbox'] {
		appearance: none;
		margin-right: 20px;
		color: currenColor;
		width: 20px;
		height: 20px;
		border: 1px solid var(--stroke-action-primary);
		border-radius: var(--radius-sm);
		background-color: var(--background-l2);

		display: grid;
		place-content: center;
	}

	input[type='checkbox']::before {
		content: '';
		width: 15px;
		height: 15px;
		transform: scale(0);
		transition: 120ms transform ease-in-out;
		box-shadow: inset 20px 20px var(--icon-action-primary);
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}
</style>
