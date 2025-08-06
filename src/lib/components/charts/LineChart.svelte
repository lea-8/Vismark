<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import * as Plot from '@observablehq/plot';

  import { colours } from './chartglobals.js';
  
  let { 
    dataPath = '',  // source: https://observablehq.com/@observablehq/sample-datasets
    xData = '', 
    yData = '',
    fillData = '',
    titleData = ''
  } = $props();
  let data;
  let chartContainer;

  async function loadData() {
    data = await d3.csv(dataPath, d3.autoType);
  }
  onMount(async () => {
    await loadData();

    plotLine(data, xData, yData, fillData, titleData);
  });

  // function gatherLines(dataset, xVar, yArray) {
  //   let linePlots = []
  //   for (let i = 0; i < yArray.length; i++) {
  //     linePlots.push(Plot.lineY(dataset, {x: xVar, y: yArray[i], stroke: colours[i]}))
  //   }

  //   return linePlots;
  // }

  function plotLine(dataset, xVar, yVar, fillVar, titleVar) {
    let plotGraph = Plot.plot({
      // marginTop: 20,
      // marginRight: 20,
      // marginBottom: 30,
      // marginLeft: 40,
      // color: {legend: true},  // TODO: https://observablehq.com/@tophtucker/plot-coloring-lines-in-wide-untidy-data
      // grid: true,
      title: titleVar,
      // caption: "[ CAPTION ]",      
      marks: [
        Plot.ruleY([0]),
        // Plot.axisX({ticks: "3 months", anchor: "bottom", label: "Date", labelAnchor: "left"}),
        // Plot.axisY({anchor: "left", label: "Price", labelAnchor: "top"}),
        // ...gatherLines(dataset, xVar, yVar),
        Plot.lineY(dataset, {x: xVar, y: yVar, z: fillVar}),
        Plot.gridX(),
        // Plot.frame()
      ]
    });
    chartContainer.appendChild(plotGraph);

    return () => plotGraph.remove();
  }
</script>

<div bind:this={chartContainer}></div>