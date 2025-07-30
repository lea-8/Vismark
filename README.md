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

### Markdown syntax
Basic markdown syntax is supported as defined in the [commonmark spec](https://commonmark.org/). They also provide a [cheat sheet](https://commonmark.org/help/) of simple commands for headings, text formatting, links, and lists.

*To define variables such as arrays, these can be defined at the top of the `.vismd` file within a block separated by three dashes:*

``` markdown
---
myArray: [item1, item2, item3, etc]

---
```

## Components
Components are entities on a webpage that Markdown cannot define. Every component used in a `.vismd` file needs to be imported. This can be done by adding the code below to the `.vismd` file:

```html
<script>
  import Component from 'vismark/ComponentName';
</script>
```

Then this component can be placed on the webpage, either with the `<Component />` or `<Component></Component>` syntax. Listed below are all components that Vismark supports along with an example of how to use it.

### Chart components
Chart components will start with a capital letter and be added to the page using the following syntax:

``` html
<Chart 
  variable1="somethin"
  variable2="something"
/>
```

The variables will allow you to parameterise the chart by defining a title, x and y variables and the path to the dataset used.

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

### Page elements
Page elements are components that define parts of a page to add expressivity.

#### Grid layout
Grid and Cell components are special, as they require opening and closing tags. They define a grid layout by specifying the number of columns in the Grid and using Cells to add content to every part of the grid. The content goes in between the opening and closing tags like so: `<Grid>content</Grid>` and `<Cell>content</Cell>`

Example usage:
``` html

<Grid columns={2} showGrid={false}>
  <Cell hideCell={false}>
    Some text and charts here!
  </Cell>
</Grid>
```

Variables for the Cell component:

- `hideCell` (Boolean, default=false) - If true, the cell background colour and border become white and the cell becomes invisible.

Variables for Grid component:

- `columns` (Integer, default=2) - number of columns in the grid
- `showGrid` (Boolean, default=false) - this is a helper option that highlights the outline of the entire grid (useful for development)

Once a Grid layout has been defined using `<Grid></Grid>`, the Cell components will be added one by one to the right of the previous and after the full width of the grid has been used, the next cell will appear beneath it. For example, if 2 columns are specified the `<Cell></Cell>` components will appear on the page like this:

![Graphical representation of the grid layout with two columns](/static/grid_layout_docs.png)

#### Header & Footer
Currently, the `<Header />` and `<Footer />` components are not parameterisable, but this might change based on user feedback.

Example usage:
```html
<Header />

... Some text and charts ...

<Footer />
```

## Previewing the page locally
To preview the page, you can run:

``` bash
npm run dev
```

## Additional stuff
### Syntax highlighting
If you are using Visual Studio Code for development, you can add a file association to `.vismd` files to see syntax highlighting. Add the snippet below to the `settings.json file`:

```json
"files.associations": {
    "*.vismd": "markdown"
}
```

Alternatively, add the file association [through the UI](https://code.visualstudio.com/docs/languages/overview#_add-a-file-extension-to-a-language).
