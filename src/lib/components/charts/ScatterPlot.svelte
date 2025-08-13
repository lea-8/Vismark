<script>
<<<<<<< HEAD
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import * as Plot from '@observablehq/plot';

	export let dataPath = ''; // source: https://observablehq.com/@observablehq/plot-stacked-area-chart
	export let xData = '';
	export let yData = '';
	export let fillData = '';
	export let titleData = '';
	// captionData
	// xAxisUser
	// yAxisUser
	// fillUser
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
				// label: "[ AXIS LABEL ]"
			},
			y: {
				grid: true
				// label: "[ AXIS LABEL ]"
			},
			marks: [
				Plot.dot(dataset, { x: xVar, y: yVar, stroke: fillVar }),
				// Plot.ruleY(),
				// Plot.ruleX(dataset, {stroke: "gray"})
				Plot.frame({ stroke: 'black', anchor: 'bottom' }),
				Plot.frame({ stroke: 'black', anchor: 'left' })
			]
		});
		chartContainer.appendChild(plotGraph);

		return () => plotGraph.remove();
	}
=======
  import { onMount } from 'svelte'
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';
  
  export let dataPath = '';  // source: https://observablehq.com/@observablehq/plot-stacked-area-chart
  export let xData = '';
  export let yData = '';
  export let fillData = '';
  export let titleData = '';
  // captionData
  // xAxisUser
  // yAxisUser
  // fillUser
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
        // label: "[ AXIS LABEL ]"
      },
      y: {
        grid: true,
        // label: "[ AXIS LABEL ]"
      },
      marks: [
        Plot.dot(dataset, {x: xVar, y: yVar, stroke: fillVar}),
        // Plot.ruleY(),
        // Plot.ruleX(dataset, {stroke: "gray"})
        Plot.frame({stroke: "black", anchor: "bottom"}),
        Plot.frame({stroke: "black", anchor: "left"})
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
>>>>>>> main
</script>

<div bind:this={chartContainer}></div>
