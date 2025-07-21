<script>
  import { onMount } from 'svelte'
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  let { 
    dataPath = '',  // source: https://observablehq.com/@observablehq/plot-stacked-area-chart
    xData = '',
    yData = '',
    titleData=''
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

    plotArea(data, yData, titleData);
  });

  function plotArea(dataset, yVar, title) {
    let plotGraph = Plot.plot({
      // marginTop: 20,
      // marginRight: 20,
      // marginBottom: 30,
      // marginLeft: 40,
      color: {legend: true},
      title: title,
      caption: "[ CAPTION ]",
      y: {
        grid: true,
        label: "[ AXIS LABEL ]"
      },
      marks: [
        Plot.areaY(dataset, {x: "date", y: yVar, fill: "industry", title: "industry"}),
        Plot.ruleY([0]),
        Plot.frame()
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>
