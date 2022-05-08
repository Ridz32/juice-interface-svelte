<script lang="ts">
	import Chart from './Chart.svelte';
	import { getContext, onMount } from 'svelte';
	import DropDown from './DropDown.svelte';
	import Holders from './Holders.svelte';
	import DistributeFunds from './DistributeFunds.svelte';
	import type { Project } from '$models/subgraph-entities/project';
	import type Store from '$utils/Store';
import { getTruncatedAddress } from '$lib/components/Address.svelte';
	let clientWidth = 500;
	let tab = 0;

	let holdersOpened = false;
	let distributeOpened = false;

	const projectsContext = getContext('PROJECT') as {
		project: Store<Project>;
		// metadata: Store<ProjectMetadataV4>;
		// currentFC: Store<V1FundingCycle>;
		balance: Store<number>;
		balanceInCurrency: Store<number>;
		overflow: Store<number>;
		owner: Store<string>;
		// currency: Store<V1CurrencyOption>;
		tokenSymbol: Store<string>;
		tokenAddress: Store<string>;
	};

	const tokenSymbol = projectsContext.tokenSymbol;
	const tokenAddress = projectsContext.tokenAddress;

	// $: console.log($project);

	onMount(async () => {
		// new Chart(chartCanvas, {
		// 	type: 'line',
		// 	data: {
		// 		labels: ['3/30', '4/03', '4/08', '4/12', '4/17', '4/21', '4/26'],
		// 		datasets: [
		// 			{
		// 				label: '',
		// 				backgroundColor: 'rgb(245, 163, 18)',
		// 				borderColor: 'rgb(245, 163, 18)',
		// 				data: [
		// 					6070, 6075, 6073, 6074, 6075, 6270, 6070, 6070, 6070, 6070, 6070, 6070, 6070, 6070,
		// 					6070, 6070, 6070, 6070, 6070, 6070, 6070, 6070
		// 				]
		// 			}
		// 		]
		// 	},
		// 	options: {}
		// });
	});
</script>

<div
	class="ant-col ant-col-xs-24 ant-col-md-12"
	style="padding-left: 20px; padding-right: 20px; margin-top: 40px;"
	bind:clientWidth
>
	<div style="margin-bottom: 40px;">
		<div>
			<div style="display: flex; justify-content: space-between; align-items: baseline;">
				<div>
					<div class="ant-space ant-space-horizontal ant-space-align-center" style="gap: 24px;">
						<div class="ant-space-item" on:click={() => (tab = 0)}>
							<div
								style="text-transform: uppercase; font-size: 0.8rem; font-weight: {tab === 0
									? 600
									: 400}; color: rgba(0, 0, 0, {tab === 0 ? 0.6 : 0.333}); cursor: pointer;"
							>
								Volume
							</div>
						</div>
						<div class="ant-space-item" on:click={() => (tab = 1)}>
							<div
								style="text-transform: uppercase; font-size: 0.8rem; font-weight: {tab === 1
									? 600
									: 400}; color: rgba(0, 0, 0, {tab === 1 ? 0.6 : 0.333}); cursor: pointer;"
							>
								In Juicebox
							</div>
						</div>
					</div>
				</div>
				<DropDown
					options={['24 HOURS', '7 DAYS', '30 DAYS', '90 DAYS', '1 YEAR']}
					selected="30 DAYS"
				/>
			</div>
			<div style="position: relative;">
				{#if tab === 0}
					<Chart
						width={clientWidth}
						data={Array(100)
							.fill(0)
							.map((_, i) => {
								const date = new Date(i * 86400000);
								return [
									`${date.getMonth() + 1}/${date.getDate()}`,
									Math.random() * i * 0.2 + i * 0.8
								];
							})}
					/>
				{:else if tab === 1}
					<Chart
						width={clientWidth}
						data={Array(100)
							.fill(0)
							.map((_, i) => {
								const date = new Date(i * 86400000);
								return [
									`${date.getMonth() + 1}/${date.getDate()}`,
									Math.random() * i * 0.2 + i * 0.8
								];
							})}
					/>
				{/if}
			</div>
		</div>
	</div>
	<div style="margin-bottom: 40px;">
		<div>
			<div class="ant-space ant-space-vertical" style="gap: 24px;">
				<div class="ant-space-item">
					<div class="ant-statistic">
						<div class="ant-statistic-title">
							<span style="color: rgb(245, 163, 18); font-weight: 600;">
								<span style="margin-right: 5px;">{$tokenSymbol}</span>
								<span
									role="img"
									aria-label="question-circle"
									tabindex="-1"
									class="anticon anticon-question-circle"
								>
									<svg
										viewBox="64 64 896 896"
										focusable="false"
										data-icon="question-circle"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
										/>
										<path
											d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
										/>
									</svg>
								</span>
							</span>
						</div>
						<div class="ant-statistic-content">
							<div class="ant-descriptions">
								<div class="ant-descriptions-view">
									<table>
										<tbody>
											<tr class="ant-descriptions-row">
												<td class="ant-descriptions-item" colspan="1">
													<div class="ant-descriptions-item-container">
														<span class="ant-descriptions-item-label" style="width: 128px;"
															>Address</span
														>
														<span class="ant-descriptions-item-content">
															<div style="width: 100%;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>{getTruncatedAddress($tokenAddress)}</span
																>
															</div>
														</span>
													</div>
												</td>
											</tr>
											<tr class="ant-descriptions-row">
												<td class="ant-descriptions-item" colspan="1">
													<div class="ant-descriptions-item-container">
														<span class="ant-descriptions-item-label" style="width: 128px;"
															>Total supply</span
														>
														<span class="ant-descriptions-item-content">
															<div
																style="display: flex; justify-content: space-between; align-items: baseline; width: 100%; gap: 5px; flex-wrap: wrap;"
															>
																2,433,212,945<button
																	type="button"
																	class="ant-btn ant-btn-sm"
																	on:click={() => (holdersOpened = !holdersOpened)}>Holders</button
																>
															</div>
														</span>
														<Holders bind:opened={holdersOpened} />
													</div>
												</td>
											</tr>
											<tr class="ant-descriptions-row">
												<td class="ant-descriptions-item" colspan="1">
													<div class="ant-descriptions-item-container">
														<span class="ant-descriptions-item-label" style="width: 128px;"
															>Your balance</span
														>
														<span class="ant-descriptions-item-content">
															<div
																style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: space-between; width: 100%;"
															>
																<div>
																	<div>0 {$tokenSymbol}</div>
																	<div>0 claimable</div>
																	<div
																		style="cursor: default; font-size: 0.8rem; font-weight: 500; color: var(--text-tertiary);"
																	>
																		0% of supply
																	</div>
																</div>
																<button type="button" class="ant-btn ant-btn-sm">Manage</button>
															</div>
														</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
			<span style="color: rgb(245, 163, 18); font-weight: 600; margin-bottom: 10px;">
				<span style="margin-right: 5px;">Funding cycle</span>
				<span
					role="img"
					aria-label="question-circle"
					tabindex="-1"
					class="anticon anticon-question-circle"
				>
					<svg
						viewBox="64 64 896 896"
						focusable="false"
						data-icon="question-circle"
						width="1em"
						height="1em"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
						/>
						<path
							d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
						/>
					</svg>
				</span>
			</span>
		</div>
		<div
			class="ant-space ant-space-horizontal ant-space-align-center"
			style="font-size: 0.8rem; margin-bottom: 12px; gap: 16px;"
		>
			<div class="ant-space-item" style="">
				<div
					class="hover-text-secondary"
					role="button"
					style="text-transform: uppercase; cursor: pointer; color: var(--text-secondary); font-weight: 600;"
				>
					Current
				</div>
			</div>
			<div class="ant-space-item" style="">
				<div
					class="hover-text-secondary"
					role="button"
					style="text-transform: uppercase; cursor: pointer; color: var(--text-tertiary); font-weight: 500;"
				>
					Upcoming
				</div>
			</div>
			<div class="ant-space-item">
				<div
					class="hover-text-secondary"
					role="button"
					style="text-transform: uppercase; cursor: pointer; color: var(--text-tertiary); font-weight: 500;"
				>
					History
				</div>
			</div>
		</div>
		<div>
			<div style="position: relative;">
				<div style="margin-bottom: 10px;">
					<div
						style="background: var(--background-l2); box-shadow: var(--background-l1) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
					>
						<div
							class="ant-collapse ant-collapse-icon-position-left minimal"
							style="background: transparent; border: none;"
						>
							<div class="ant-collapse-item" style="border: none;">
								<div class="ant-collapse-header" role="button" tabindex="0" aria-expanded="false">
									<span
										role="img"
										aria-label="right"
										class="anticon anticon-right ant-collapse-arrow"
									>
										<svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="right"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
											/>
										</svg>
									</span>
									<div
										style="display: flex; width: 100%; justify-content: space-between; cursor: pointer;"
									>
										<div>
											<span>Cycle #20</span>
										</div>
										<span style="color: var(--text-secondary); margin-left: 10px;">
											9d 19h 22m until #21
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="margin-bottom: 10px;">
					<div
						style="background: var(--background-l2); box-shadow: var(--background-l1) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
					>
						<div>
							<div class="ant-space ant-space-vertical" style="width: 100%; gap: 24px;">
								<div class="ant-space-item" style="">
									<div
										style="display: flex; justify-content: space-between; align-items: baseline;"
									>
										<div>
											<div>
												<span style="font-size: 1rem; font-weight: 500;">
													<span>US$</span>0
												</span>
												<span
													style="font-size: 0.7rem; font-weight: 500; cursor: default; color: var(--text-secondary);"
												>
													<span style="margin-right: 5px;">AVAILABLE</span>
													<span
														role="img"
														aria-label="question-circle"
														tabindex="-1"
														class="anticon anticon-question-circle"
													>
														<svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="question-circle"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
															/>
															<path
																d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
															/>
														</svg>
													</span>
												</span>
											</div>
											<div
												style="font-size: 0.7rem; font-weight: 500; cursor: default; color: var(--text-tertiary);"
											>
												<div>
													<span>US$</span>170,300<span>/170,300 </span> distributed
												</div>
												<div>
													<div
														class="ant-space ant-space-horizontal ant-space-align-center"
														style="gap: 8px;"
													>
														<div class="ant-space-item" style="">
															<div
																style="vertical-align: middle; line-height: 1; color: var(--text-tertiary);"
															>
																<span style="font-family: sans-serif;">Ξ</span>5.9231
															</div>
														</div>
														<div class="ant-space-item">
															<span role="img" aria-label="crown" class="anticon anticon-crown">
																<svg
																	viewBox="64 64 896 896"
																	focusable="false"
																	data-icon="crown"
																	width="1em"
																	height="1em"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																	/>
																</svg>
															</span> owner balance
														</div>
													</div>
												</div>
											</div>
										</div>
										<button
											type="button"
											class="ant-btn ant-btn-ghost ant-btn-sm"
											on:click={() => (distributeOpened = !distributeOpened)}
											>Distribute funds</button
										>
									</div>
									<DistributeFunds bind:opened={distributeOpened} />
								</div>
								<div class="ant-space-item">
									<div>
										<span>
											<span style="margin-right: 5px;">
												<h4 style="display: inline-block;">Funding Distribution</h4>
											</span>
											<span
												role="img"
												aria-label="question-circle"
												tabindex="-1"
												class="anticon anticon-question-circle"
											>
												<svg
													viewBox="64 64 896 896"
													focusable="false"
													data-icon="question-circle"
													width="1em"
													height="1em"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
													/>
													<path
														d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
													/>
												</svg>
											</span>
										</span>
										<div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>tankbottoms.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">22.64% (<span>US$</span>37,615)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div>
																<div style="font-weight: 500;">
																	<a
																		class="text-primary hover-text-action-primary hover-text-decoration-underline"
																		href="#/p/peel"
																		style="font-weight: 500;">@peel</a
																	>:
																</div>
																<div
																	style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 10px;"
																>
																	<span>
																		<span style="margin-right: 5px;">Tokens:</span>
																		<span
																			role="img"
																			aria-label="question-circle"
																			tabindex="-1"
																			class="anticon anticon-question-circle"
																		>
																			<svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="question-circle"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																				/>
																				<path
																					d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																				/>
																			</svg>
																		</span>
																	</span>
																	<span
																		style="cursor: default; user-select: all; line-height: 22px;"
																		>dao.jbx.eth</span
																	>
																	<span role="img" aria-label="crown" class="anticon anticon-crown">
																		<svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="crown"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																		>
																			<path
																				d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																			/>
																		</svg>
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">18.05% (<span>US$</span>29,989)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>jango.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">12.63% (<span>US$</span>20,984)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>0x7cF2...0F26C1</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">6.01% (<span>US$</span>9,985)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>drgorilla.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">5.83% (<span>US$</span>9,686)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div>
																<div style="font-weight: 500;">
																	<a
																		class="text-primary hover-text-action-primary hover-text-decoration-underline"
																		href="#/p/wagmistudios"
																		style="font-weight: 500;">@wagmistudios</a
																	>:
																</div>
																<div
																	style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 10px;"
																>
																	<span>
																		<span style="margin-right: 5px;">Tokens:</span>
																		<span
																			role="img"
																			aria-label="question-circle"
																			tabindex="-1"
																			class="anticon anticon-question-circle"
																		>
																			<svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="question-circle"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																				/>
																				<path
																					d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																				/>
																			</svg>
																		</span>
																	</span>
																	<span
																		style="cursor: default; user-select: all; line-height: 22px;"
																		>dao.jbx.eth</span
																	>
																	<span role="img" aria-label="crown" class="anticon anticon-crown">
																		<svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="crown"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																		>
																			<path
																				d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																			/>
																		</svg>
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">5.53% (<span>US$</span>9,187)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>filipv.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">5.48% (<span>US$</span>9,104)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div>
																<div style="font-weight: 500;">
																	<a
																		class="text-primary hover-text-action-primary hover-text-decoration-underline"
																		href="#/p/canudaocomm"
																		style="font-weight: 500;">@canudaocomm</a
																	>:
																</div>
																<div
																	style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 10px;"
																>
																	<span>
																		<span style="margin-right: 5px;">Tokens:</span>
																		<span
																			role="img"
																			aria-label="question-circle"
																			tabindex="-1"
																			class="anticon anticon-question-circle"
																		>
																			<svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="question-circle"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																				/>
																				<path
																					d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																				/>
																			</svg>
																		</span>
																	</span>
																	<span
																		style="cursor: default; user-select: all; line-height: 22px;"
																		>dao.jbx.eth</span
																	>
																	<span role="img" aria-label="crown" class="anticon anticon-crown">
																		<svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="crown"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																		>
																			<path
																				d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																			/>
																		</svg>
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">4.81% (<span>US$</span>7,991)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div>
																<div style="font-weight: 500;">
																	<a
																		class="text-primary hover-text-action-primary hover-text-decoration-underline"
																		href="#/p/lexicondevils"
																		style="font-weight: 500;">@lexicondevils</a
																	>:
																</div>
																<div
																	style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 10px;"
																>
																	<span>
																		<span style="margin-right: 5px;">Tokens:</span>
																		<span
																			role="img"
																			aria-label="question-circle"
																			tabindex="-1"
																			class="anticon anticon-question-circle"
																		>
																			<svg
																				viewBox="64 64 896 896"
																				focusable="false"
																				data-icon="question-circle"
																				width="1em"
																				height="1em"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
																				/>
																				<path
																					d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
																				/>
																			</svg>
																		</span>
																	</span>
																	<span
																		style="cursor: default; user-select: all; line-height: 22px;"
																		>dao.jbx.eth</span
																	>
																	<span role="img" aria-label="crown" class="anticon anticon-crown">
																		<svg
																			viewBox="64 64 896 896"
																			focusable="false"
																			data-icon="crown"
																			width="1em"
																			height="1em"
																			fill="currentColor"
																			aria-hidden="true"
																		>
																			<path
																				d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																			/>
																		</svg>
																	</span>
																</div>
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">3.97% (<span>US$</span>6,596)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>0xstvg.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">3% (<span>US$</span>4,984)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>viraz.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.8% (<span>US$</span>2,990)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>zom-bae.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.8% (<span>US$</span>2,990)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>twodam.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.68% (<span>US$</span>2,791)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>lazervike.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.65% (<span>US$</span>2,741)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>0x6212...A02ADf</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.28% (<span>US$</span>2,126)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>0xA848...588664</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.2% (<span>US$</span>1,993)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>gulan.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">1.2% (<span>US$</span>1,993)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>0xFc81...AD56e1</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">0.67% (<span>US$</span>1,113)</span>
													</div>
												</div>
											</div>
											<div style="margin-bottom: 5px;">
												<div
													style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
												>
													<div style="line-height: 1.4;">
														<div style="display: flex; align-items: baseline;">
															<div style="font-weight: 500; display: flex; align-items: baseline;">
																<span style="cursor: default; user-select: all; line-height: 22px;"
																	>mieos.eth</span
																>:
															</div>
														</div>
													</div>
													<div>
														<span style="font-weight: 400;">0.67% (<span>US$</span>1,113)</span>
													</div>
												</div>
											</div>
											<div
												style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
											>
												<div style="line-height: 1.4;">
													<div style="display: flex; align-items: baseline;">
														<div style="font-weight: 500; display: flex; align-items: baseline;">
															<span style="cursor: default; user-select: all; line-height: 22px;"
																>dao.jbx.eth</span
															>
															<span style="margin-left: 5px;">
																<span role="img" aria-label="crown" class="anticon anticon-crown">
																	<svg
																		viewBox="64 64 896 896"
																		focusable="false"
																		data-icon="crown"
																		width="1em"
																		height="1em"
																		fill="currentColor"
																		aria-hidden="true"
																	>
																		<path
																			d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
																		/>
																	</svg>
																</span>
															</span>:
														</div>
													</div>
												</div>
												<div>
													<div style="font-weight: 400;">0.1% (<span>US$</span>166)</div>
												</div>
											</div>
											<form class="ant-form ant-form-vertical" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="margin-bottom: 10px;">
					<div
						style="background: var(--background-l2); box-shadow: var(--background-l1) 10px 10px; border-radius: 1px; stroke: none; overflow: hidden; padding: 20px;"
					>
						<div>
							<div>
								<span>
									<span style="margin-right: 5px;">
										<h4 style="display: inline-block;">Reserved JBX (50%)</h4>
									</span>
									<span
										role="img"
										aria-label="question-circle"
										tabindex="-1"
										class="anticon anticon-question-circle"
									>
										<svg
											viewBox="64 64 896 896"
											focusable="false"
											data-icon="question-circle"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
											/>
											<path
												d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
											/>
										</svg>
									</span>
								</span>
							</div>
							<div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>sagekellyn.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>mieos.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>natasha-pankina.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>zeugh.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>burtula.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>tankbottoms.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>jasonz.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>zom-bae.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>johnnyd.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>drgorilla.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>filipv.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>twodam.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>0xstvg.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>aeolian.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>peri.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div style="margin-bottom: 5px;">
									<div
										style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
									>
										<div style="line-height: 1.4;">
											<div style="display: flex; align-items: baseline;">
												<div style="font-weight: 500; display: flex; align-items: baseline;">
													<span style="cursor: default; user-select: all; line-height: 22px;"
														>jango.eth</span
													>:
												</div>
											</div>
										</div>
										<div>3.75%</div>
									</div>
								</div>
								<div
									style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 5px;"
								>
									<div style="line-height: 1.4;">
										<div style="display: flex; align-items: baseline;">
											<div style="font-weight: 500; display: flex; align-items: baseline;">
												<span style="cursor: default; user-select: all; line-height: 22px;"
													>dao.jbx.eth</span
												>
												<span style="margin-left: 5px;">
													<span role="img" aria-label="crown" class="anticon anticon-crown">
														<svg
															viewBox="64 64 896 896"
															focusable="false"
															data-icon="crown"
															width="1em"
															height="1em"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
															/>
														</svg>
													</span>
												</span>:
											</div>
										</div>
									</div>
									<div>
										<span style="font-weight: 400;">40%</span>
									</div>
								</div>
							</div>
							<div
								style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px;"
							>
								<span>360,471 JBX reserved</span>
								<button type="button" class="ant-btn ant-btn-sm" style="margin-left: 10px;"
									>Distribute JBX</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	svg {
		max-width: calc(100vw - 40px);
	}
</style>
