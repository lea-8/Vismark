<script>
  import { onMount } from 'svelte'
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = '',  // source: https://observablehq.com/plot/features/plots#marks-option
    xData = '', 
    yData = '',
    fillData = '',
    titleData = '',
    groupBy = ''
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

    plotBar(data, xData, yData, fillData, titleData, groupBy);
  });

  function plotBar(dataset, xVar, yVar, fillVar, titleVar, groupVar) {
    let plotGraph =  Plot.plot({
      // marginTop: 20,
      // marginRight: 20,
      // marginBottom: 30,
      // marginLeft: 40,
      title: titleVar,
      // caption: "[ CAPTION ]",
      x: {axis: null, paddingOuter: 0.2},
      y: {grid: true},
      marks: [
        Plot.barY(dataset, {
          x: xVar, 
          y: yVar, 
          fill: fillVar,
          fx: groupVar
        }),
        // Plot.barY(dataset, {x: xVar, y: yVar, fill: fillVar, dx: -2, dy: -2}),
        Plot.ruleY([0])
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>