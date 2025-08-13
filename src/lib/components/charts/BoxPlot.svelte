<!--
@component
Box plot chart

@example

```svelte
<BoxPlot
	dataPath="data/morley.csv"
	xData="Expt"
	yData="Speed"
	fillColour="#eb66a7"
	titleData="Speed of Light - Morley Experiment"
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
	/** Colour for the box markers */
	export let fillColour = '';
	/** Chart title */
	export let titleData = '';

	let data;
	let chartContainer;

	async function loadData() {
		data = await d3.csv(dataPath, d3.autoType);
	}
	onMount(async () => {
		await loadData();

		plotBox(data, xData, yData, fillColour, titleData);
	});

	function plotBox(dataset, xVar, yVar, fillVar, titleVar) {
		let plotGraph = Plot.plot({
			title: titleVar,
			y: {
				grid: true,
				inset: 6
			},
			marks: [
				Plot.boxY(dataset, { x: xVar, y: yVar, fill: fillVar }),
				Plot.frame({ stroke: 'black', anchor: 'bottom' })
			]
		});
		chartContainer.appendChild(plotGraph);

		return () => plotGraph.remove();
	}
</script>

<div bind:this={chartContainer}></div>
