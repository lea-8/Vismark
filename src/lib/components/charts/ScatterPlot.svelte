<!--
@component
Scatter plot chart

@example

```svelte
<ScatterPlot
	dataPath="data/penguins.csv"
	xData="culmen_length_mm"
	yData="culmen_depth_mm"
	fillData="species"
	titleData="Penguin culmen sizes by species"
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

		plotScatter(data, xData, yData, fillData, titleData);
	});

	function plotScatter(dataset, xVar, yVar, fillVar, titleVar) {
		let plotGraph = Plot.plot({
			title: titleVar,
			x: {
				grid: true,
				nice: true
			},
			y: {
				grid: true
			},
			marks: [
				Plot.dot(dataset, { x: xVar, y: yVar, stroke: fillVar }),
				Plot.frame({ stroke: 'black', anchor: 'bottom' }),
				Plot.frame({ stroke: 'black', anchor: 'left' })
			]
		});
		chartContainer.appendChild(plotGraph);

		return () => plotGraph.remove();
	}
</script>

<div bind:this={chartContainer}></div>
