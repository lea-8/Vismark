<!--
@component
Line chart

@example

```svelte
<LineChart
	dataPath="data/unemployment.csv"
	xData="date"
	yData="unemployed"
	fillData="industry"
	titleData="Unemployment by industry over time"
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
	/** Chart title */
	export let titleData = '';

	let data;
	let chartContainer;

	async function loadData() {
		data = await d3.csv(dataPath, d3.autoType);
	}
	onMount(async () => {
		await loadData();

		plotLine(data, xData, yData, fillData, titleData);
	});

	function plotLine(dataset, xVar, yVar, fillVar, titleVar) {
		let plotGraph = Plot.plot({
			color: { legend: true },
			title: titleVar,
			marks: [
				Plot.ruleY([0]),
				Plot.lineY(dataset, { x: xVar, y: yVar, z: fillVar, stroke: fillVar }),
				Plot.gridX(),
				Plot.gridY()
			]
		});
		chartContainer.appendChild(plotGraph);

		return () => plotGraph.remove();
	}
</script>

<div bind:this={chartContainer}></div>
