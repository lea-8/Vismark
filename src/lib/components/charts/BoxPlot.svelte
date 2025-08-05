<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = '',  // source: https://observablehq.com/@observablehq/plot-stacked-area-chart
    xData = '',
    yData = '',
    // fillData = '',
    fillColour = '',
    titleData = ''
    // xAxisUser
    // yAxisUser
    // showTootlTip
  } = $props();
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
        Plot.boxY(dataset, {x: xVar, y: yVar, fill: fillVar}),
        Plot.frame({stroke: "black", anchor: "bottom"})
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>