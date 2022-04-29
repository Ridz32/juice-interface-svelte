<script lang="ts">
	import { browser } from '$app/env';

	export let xx = ['0'];
	export let yy = [0];
	export let width = browser ? window.innerWidth : 500;

	let d = '';
	let lastY = 0;

	let minY = yy.reduce((a, b) => Math.min(a, b));
	let maxY = yy.reduce((a, b) => Math.max(a, b));

	$: {
		d = '';
		for (let i = 0; i < yy.length; i++) {
			let p = 50;
			let y = lastY;
			lastY = ((yy[i] - minY) / (maxY - minY)) * 190;
			if (i === 0) {
				d += `M${(i * width) / xx.length + 6},${200 - lastY}`;
			} else {
				d += `L${(i * width) / xx.length + 6} ${200 - lastY}`;
			}
		}
	}
</script>

<svg
	class="recharts-surface"
	width={width - 40}
	height="240"
	viewBox="0 0 {width - 40} 240"
	version="1.1"
>
	<defs>
		<clipPath id="recharts1-clip">
			<rect x="5" y="5" height="200" width={width - 10} />
		</clipPath>
	</defs>
	<g class="recharts-cartesian-grid">
		<g class="recharts-cartesian-grid-horizontal">
			{#each [5, ...Array(20)
					.fill(0)
					.map((_, i) => 6.631850518002923 + i * 33.1901289901174)
					.filter((i) => i <= 205), 205] as i}
				<line
					stroke="#00000018"
					stroke-dasharray="4 2"
					fill="none"
					x="5"
					y="5"
					width={width - 50}
					height="200"
					offset="[object Object]"
					x1="5"
					x2={width - 5}
					y1={i}
					y2={i}
					style="padding-left: 200px;"
				/>
			{/each}
		</g>
		<g class="recharts-cartesian-grid-vertical">
			{#each [5, ...Array(xx.length)
					.fill(0)
					.map((_, i) => 6.631850518002923 + (i * width) / xx.length)
					.filter((i) => i <= width - 42), width - 42] as i}
				<line
					stroke="#00000018"
					stroke-dasharray="4 2"
					fill="none"
					x="5"
					y="5"
					width={width - 50}
					height="200"
					offset=""
					x1={i}
					x2={i}
					y1="5"
					y2="205"
					style="padding-left: 200px;"
				/>
			{/each}
		</g>
	</g>
	<g class="recharts-layer recharts-line">
		<path
			stroke="#f5a312"
			stroke-width="2"
			fill="none"
			points=""
			width={width - 50}
			height="200"
			class="recharts-curve recharts-line-curve"
			type="monotone"
			{d}
			data-n="M5,195.9090909090911C9.069734579016643,195.6747409399802,13.139469158033283,195.44039097086932,17.209203737049926,195.34867558109292C21.27893831606657,195.25696019131652,25.34867289508321,195.27457861812204,29.418407474099855,195.21110249642834C33.4881420531165,195.14762637473464,37.557876632133144,195.04717091765792,41.627611211149784,194.9678188509307C45.69734579016642,194.8884667842035,49.76708036918307,194.8097785200559,53.83681494819971,194.734990096065C57.90654952721635,194.6602016720741,61.976284106232995,194.5900598661424,66.04601868524963,194.51908830698528C70.11575326426627,194.44811674782815,74.18548784328293,194.4491124516976,78.25522242229957,194.30916074112227C82.3249570013162,194.16920903054694,86.39469158033285,186.48740899266568,90.46442615934949,186.48740899266568C94.53416073836613,186.48740899266568,98.60389531738278,186.48740899266568,102.67362989639942,186.48740899266568C106.74336447541606,186.48740899266568,110.8130990544327,181.59828172489497,114.88283363344934,171.8200271893536C118.95256821246598,162.0417726538122,123.02230279148263,53.84582432774516,127.09203737049927,53.27052875858264C131.1617719495159,52.69523318942013,135.23150652853255,52.40758540483887,139.30124110754917,52.40758540483887C143.37097568656583,52.40758540483887,147.44071026558248,52.40758540483887,151.51044484459914,52.40758540483887C155.5801794236158,52.40758540483887,159.6499140026324,52.40205371667423,163.71964858164907,52.39099034034495C167.7893831606657,52.37992696401567,171.85911773968235,52.2900370313334,175.92885231869897,52.0881304133103C179.99858689771563,51.88622379528721,184.06832147673225,46.12549608179408,188.1380560557489,44.320644525752144C192.20779063476556,42.515792969710205,196.27752521378218,42.03843593951,200.34725979279884,41.25902107705869C204.41699437181546,40.47960621460738,208.48672895083212,39.891421812020695,212.55646352984874,39.64415535104426C216.6261981088654,39.39688889006783,220.69593268788202,39.520522120556045,224.76566726689867,39.27325565957961C228.83540184591533,39.02598919860318,232.90513642493198,34.85067097164653,236.97487100394864,34.85067097164653C241.04460558296526,34.85067097164653,245.11434016198191,34.85067097164653,249.18407474099854,34.85067097164653C253.25380932001516,34.85067097164653,257.3235438990318,34.85067097164653,261.39327847804844,34.85067097164653C265.4630130570651,34.85067097164653,269.5327476360817,34.85067097164653,273.60248221509835,34.85067097164653C277.672216794115,34.85067097164653,281.7419513731317,34.70518757290808,285.81168595214837,34.70496630538102C289.881420531165,34.70474503785396,293.9511551101816,34.704634404090434,298.02088968919827,34.704634404090434C302.0906242682149,34.704634404090434,306.1603588472316,34.704634404090434,310.23009342624823,34.704634404090434C314.2998280052649,34.704634404090434,318.3695625842815,34.704634404090434,322.43929716329814,34.704634404090434C326.5090317423148,34.704634404090434,330.5787663213314,34.24835310579907,334.64850090034804,34.07800476875735C338.7182354793647,33.90765643171564,342.7879700583813,33.94618463978495,346.85770463739794,33.682544381840145C350.9274392164146,33.41890412389534,354.99717379543125,30.434668992630556,359.0669083744479,30.42924793822894C363.13664295346456,30.423826883827324,367.20637753248116,30.426537411028132,371.2761121114978,30.421116356626516C375.34584669051446,30.4156953022249,379.4155812695311,30.356838140149026,383.48531584854777,30.324035229330267C387.5550504275644,30.291232318511508,391.624785006581,30.290789783458166,395.6945195855977,30.22429889171396C399.76425416461433,30.157807999969755,403.8339887436309,28.795353204926602,407.9037233226476,28.30690513995548C411.97345790166423,27.818457074984355,416.04319248068083,27.88436713947055,420.1129270596975,27.29361050188723C424.18266163871414,26.702853864303904,428.2523962177308,24.90253829255691,432.32213079674744,24.762365314455522C436.3918653757641,24.622192336354136,440.4615999547807,24.69227882540483,444.53133453379735,24.552105847303444C448.601069112814,24.411932869202058,452.67080369183066,24.333936066075008,456.7405382708473,23.897596503618132C460.81027284986396,23.461256941161256,464.8800074288806,21.738080760875995,468.94974200789727,21.738080760875995C473.0194765869139,21.738080760875995,477.0892111659305,21.738080760875995,481.1589457449472,21.738080760875995C485.77263049663145,21.738080760875995,490.3863152483157,17.91449492589244,495,14.090909090908884"
		/>
	</g>
	<g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
		<g class="recharts-cartesian-axis-ticks">
			{#each yy as _, index}
				<g class="recharts-layer recharts-cartesian-axis-tick">
					<text
						stroke="none"
						type="number"
						orientation="left"
						width="60"
						height="200"
						x="9"
						y={172.26693227620544 - index * 32.19012899011739}
						fill="#00000055"
						font-size="11"
						visibility="visible"
						class="recharts-text recharts-cartesian-axis-tick-value"
						text-anchor="start"
					>
						<tspan x="9" dy="0.355em">{_}</tspan>
					</text>
				</g>
			{/each}
		</g>
	</g>
	<g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
		<g class="recharts-cartesian-axis-ticks">
			{#each xx as _, index}
				<g class="recharts-layer recharts-cartesian-axis-tick">
					<line
						stroke="#00000018"
						type="number"
						orientation="bottom"
						width={width - 50}
						height="30"
						x="5"
						y="205"
						class="recharts-cartesian-axis-tick-line"
						fill="none"
						x1={6.631850518002923 + (index * width) / xx.length}
						y1="209"
						x2={6.631850518002923 + (index * width) / xx.length}
						y2="205"
					/>
					<g transform="translate({6.631850518002923 + (index * width) / xx.length},211)">
						<text dy="12" font-size="11" fill="#00000055" visibility="visible">{_}</text>
					</g>
				</g>
			{/each}
			<!-- <g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="6.631850518002923"
					y1="209"
					x2="6.631850518002923"
					y2="205"
				/>
				<g transform="translate(6.631850518002923,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">3/29</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="79.88707294030249"
					y1="209"
					x2="79.88707294030249"
					y2="205"
				/>
				<g transform="translate(79.88707294030249,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/02</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="153.14229536260206"
					y1="209"
					x2="153.14229536260206"
					y2="205"
				/>
				<g transform="translate(153.14229536260206,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/07</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="226.39751778490162"
					y1="209"
					x2="226.39751778490162"
					y2="205"
				/>
				<g transform="translate(226.39751778490162,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/11</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="299.6527402072012"
					y1="209"
					x2="299.6527402072012"
					y2="205"
				/>
				<g transform="translate(299.6527402072012,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/16</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="372.90796262950073"
					y1="209"
					x2="372.90796262950073"
					y2="205"
				/>
				<g transform="translate(372.90796262950073,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/20</text>
				</g>
			</g>
			<g class="recharts-layer recharts-cartesian-axis-tick">
				<line
					stroke="#00000018"
					type="number"
					orientation="bottom"
					width={width - 50}
					height="30"
					x="5"
					y="205"
					class="recharts-cartesian-axis-tick-line"
					fill="none"
					x1="446.1631850518003"
					y1="209"
					x2="446.1631850518003"
					y2="205"
				/>
				<g transform="translate(446.1631850518003,211)">
					<text dy="12" font-size="11" fill="#00000055" visibility="visible">4/25</text>
				</g>
			</g> -->
		</g>
	</g>
</svg>
