# Vismark
A lightweight libary for creating webpages in Svelte projects. Vismark allows for defining complex layouts and data visualisations using extended Markdown syntax. Available on npm as [vismark](https://www.npmjs.com/package/vismark).

## Installation
To install, use your desired package manager to install vismark. For npm this can be done as follows:

```bash
npm install vismark
```

This will add all the needed dependencies as well.

Next, you will need to add vismark as the preprocessor in the `svelte.confg.js` file in the root of your project. Import the `vismarkConfig()` function from `vismark/config` and wrap the current Svelte config in it. For example, a simple Svelte project created with `npx sv create my-app`, would need to be edited in the following way:

``` JavaScript
import { vismarkConfig } from 'vismark/config';
// other imports

const config = vismarkConfig({
  // leave existing config as is
});
```

## Usage
Vismark allows you to write webpages in extended Markdown syntax. In order to do this, you can write up your wepage in a file using the `.vismd` extension.

These pages then need to be added to a `+page.svelte` as a regular Svelte component. This means if I write a page called `AboutMe.vismd`, then I can make sure it is actually reflected in the codebase by adding the following to the `+page.svelte`:

``` html
<script>
  import AboutMe from './AboutMe.vismd'
</script>

<AboutMe />
```

A repository showcasing some example wpbages created with Vismark can be found at [Vismark Examples](https://github.com/lea-8/Vismark-Examples)
More information on adding pages in Svelte can be found in the [Svelte routing docs](https://svelte.dev/docs/kit/routing).

### Chart components
#### Area Chart
Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of columns that contain the y values
- `titleData` (String) - title of the chart

Example usage:
```html
<AreaChart 
  dataPath='/data/unemployment.csv'
  xData='date'
  yData='unemployed'
  titleData='Unemployement over time'
/>
```

#### Bar Chart
Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of columns that contain the y values
- `titleData` (String) - title of the chart

Example usage:
``` html
  <BarChart
    titleData="English letter ocurrences"
    dataPath="data/alphabet.csv" 
    xData="letter"
    yData="frequency"
  />
```

#### Line Chart
Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (Array(String)) - names of columns that contain the y values (one column will have one line)
- `titleData` (String) - title of the chart

Example usage:
``` html
---
yData: ["Open", "High", "Low", "Close"]

---

<LineChart 
  dataPath="data/aapl.csv" 
  xData="Date"
  yData={yData}
  titleData="Apple share price over time"
/>
```

#### Example data
Example data that can be used can be found in the [Vismark Examples repo](https://github.com/lea-8/Vismark-Examples/tree/main/static/data).

### Layout components

### Markdown syntax

## Running Locally
To preview the page, you can run:

``` bash
npm run dev
```
