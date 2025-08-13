<!--
@component
Bar chart

@example

```svelte
<BarChart
	dataPath="data/population-state-age.csv"
	xData="key"
	yData="population"
	fillData="key"
	groupBy="state"
	titleData="Population age for 6 US states"
/>
```
-->

<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import * as Plot from '@observablehq/plot';

	/** Path to CSV file with data */
	export let dataPath = '';
	/** x variable */
	export let xData = '';
	/** y variable */
	export let yData = '';
	/** Data to add colour dimension */
	export let fillData = '';
	/** place groups of bars together under a common category */
	export let groupBy = '';
	/** Chart title */
	export let titleData = '';

	let data;
	let chartContainer;

	async function loadData() {
		data = await d3.csv(dataPath, d3.autoType);
	}
	onMount(async () => {
		await loadData();

		plotBar(data, xData, yData, fillData, titleData, groupBy);
	});

	function plotBar(dataset, xVar, yVar, fillVar, titleVar, groupVar) {
		let plotGraph = Plot.plot({
			title: titleVar,
			x: { axis: null, paddingOuter: 0.2 },
			y: { grid: true },
			marks: [
				Plot.barY(dataset, {
					x: xVar,
					y: yVar,
					fill: fillVar,
					fx: groupVar
				}),
				Plot.ruleY([0])
			]
		});
		chartContainer.appendChild(plotGraph);

		return () => plotGraph.remove();
	}
</script>

<div bind:this={chartContainer}></div>
