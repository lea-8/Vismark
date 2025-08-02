<script>
  import { onMount } from 'svelte'
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = '',  // source: https://observablehq.com/@observablehq/plot-stacked-area-chart
    xData = '',
    yData = '',
    fillData = '',
    titleData = ''
    // captionData
    // xAxisUser
    // yAxisUser
  } = $props();
  let data;
  let chartContainer;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotHistogram(data, xData, yData, fillData, titleData);
  });

  function plotHistogram(dataset, xVar, yVar, fillVar, titleVar) {
    let plotGraph = Plot.plot({
      title: titleVar,
      y: {grid: true},
      color: {legend: true},
      marks: [
        Plot.rectY(dataset, Plot.binX({y: yVar}, {x: xVar, fill: fillVar})),
        Plot.ruleY([0])
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>