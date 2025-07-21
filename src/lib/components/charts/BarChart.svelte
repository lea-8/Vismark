<script>
  import { onMount } from 'svelte'
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = '',  // source: https://observablehq.com/plot/features/plots#marks-option
    titleData = '',
    xData = '', 
    yData = '',
    // captionData
    // xAxisUser
    // yAxisUser
    // fillUser
  } = $props();
  let data;
  let chartContainer;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotBar(data, xData, yData, titleData);
  });

  function plotBar(dataset, xVar, yVar, title) {
    let plotGraph =  Plot.plot({
      // marginTop: 20,
      // marginRight: 20,
      // marginBottom: 30,
      // marginLeft: 40,
      title: title,
      // caption: "[ CAPTION ]",
      x: {padding: 0.4},
      y: {grid: true},
      marks: [
        Plot.barY(dataset, {x: xVar, y: yVar, dx: 2, dy: 2}),
        Plot.barY(dataset, {x: xVar, y: yVar, fill: "green", dx: -2, dy: -2}),
        Plot.frame()
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>