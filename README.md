# Vismark

A lightweight libary for creating webpages in Svelte projects. Vismark allows for defining complex layouts and data visualisations using extended Markdown syntax. Available on npm as [vismark](https://www.npmjs.com/package/vismark).

Example pages created with Vismark can be found at [Vismark Examples](https://github.com/lea-8/Vismark-Examples).

## Installation

For npm installation can be done as follows:

```bash
npm install vismark
```

This will add all the needed dependencies as well.

Next, you will need to add vismark as the preprocessor in the `svelte.confg.js` file in the root of your project. Import the `vismarkConfig()` function from `vismark/config` and wrap the current Svelte config in it. For example, a simple Svelte project created with `npx sv create my-app`, would need to be edited in the following way:

```JavaScript
import { vismarkConfig } from 'vismark/config';
// other imports

const config = vismarkConfig({
  // leave existing config as is
});
```

## Usage

Vismark allows you to write webpages in extended Markdown syntax. In order to do this, you can write up your wepage in a file using the `.vismd` extension.

These pages then need to be added to a `+page.svelte` as a regular Svelte component. This means if I write a page called `AboutMe.vismd`, then I can make sure it is actually reflected in the codebase by adding the following to the `+page.svelte`:

```html
<script>
	import AboutMe from './AboutMe.vismd';
</script>

<AboutMe />
```

A repository showcasing some example wpbages created with Vismark can be found at [Vismark Examples](https://github.com/lea-8/Vismark-Examples)
More information on adding pages in Svelte can be found in the [Svelte routing docs](https://svelte.dev/docs/kit/routing).

## Markdown syntax

Basic markdown syntax is supported as defined in the [commonmark spec](https://commonmark.org/). They also provide a [cheat sheet](https://commonmark.org/help/) of simple commands for headings, text formatting, links, and lists.

<!-- *To define variables such as arrays, these can be defined at the top of the `.vismd` file within a block separated by three dashes:*

``` markdown
---
myArray: [item1, item2, item3, etc]

---
``` -->

Additional support is also available for footnotes and maths formulae formatting.

### Foonotes

Footnotes allow you to keep the main text free from clutter. You can add them by specifying the footnote number (e.g. `^1`) and surrounding it with square brackets. An example is given below:

```markdown
Here's the main text with a footnote[^1].

[^1]: This is the first footnote.
```

### Maths

In order to render maths formulae nicely, the KaTeX library is used. A list of supported maths symbols and notation can be found in the [KaTeX docs](https://katex.org/docs/supported). The maths must then be placed inside either:

- Single dollar signs (`$`), e.g. `$E = mc^2$` for inline display.
- Surrounded by three backticks and specifying 'math' for maths on a new line:
  <pre>
    ```math
    E = mc^2
    ```
  </pre>

- Double dollar signs (`$$`), for centered maths formulae:
  ```latex
  $$
  E = mc^2
  $$
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

```html
<Chart variable1="something" variable2="something" />
```

The variables will allow you to parameterise the chart by defining a title, x and y variables and the path to the dataset used. **All data must be in [Comma-Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) format.**

#### Example data

Sample data can be found [here](https://github.com/lea-8/Vismark/tree/main/src/lib/assets/sampleData) if you want to follow along with the examples here.

#### Area Chart

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of column that contain the y values
- `fillData` (String) - name of column containing the data for colouring the chart markers
- `titleData` (String) - title of the chart

Example usage:

```html
<AreaChart
	dataPath="/data/unemployment.csv"
	xData="date"
	yData="unemployed"
	fillData="industry"
	titleData="Unemployement over time"
/>
```

#### Bar Chart

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of columns that contain the y values
- `fillData` (String) - name of column containing the data for colouring the chart markers
- `groupBy` (String) - name of the column containing the facets to partition the bars into groups
- `titleData` (String) - title of the chart

Example usage:

```html
<BarChart
	dataPath="data/population-state-age.csv"
	xData="key"
	yData="population"
	fillData="key"
	groupBy="state"
	titleData="Population age for 6 US states"
/>
```

#### Box Plot

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of column that contain the y values
- `fillColour` (String) - name or value of the colour of the boxes in the plot
- `titleData` (String) - title of the chart

Example usage:

```html
<BoxPlot
	dataPath="data/morley.csv"
	xData="Expt"
	yData="Speed"
	fillColour="#eb66a7"
	titleData="Speed of Light - Morley Experiment"
/>
```

#### Histogram

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of column that contain the y values
- `fillData` (String) - name of column containing the data for colouring the chart markers
- `titleData` (String) - title of the chart

Example usage:

```html
<Histogram
	dataPath="data/olympians.csv"
	xData="weight"
	yData="count"
	fillData="sex"
	titleData="Olympic athletes by weight"
/>
```

#### Line Chart

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of column that contain the y values
- `fillData` (String) - name of column containing the data for colouring the chart markers
- `titleData` (String) - title of the chart

Example usage:

```html
<LineChart
	dataPath="data/unemployment.csv"
	xData="date"
	yData="unemployed"
	fillData="industry"
	titleData="Unemployment by industry over time"
/>
```

#### Scatter Plot

Variables:

- `dataPath` (String) - path to the data
- `xData` (String) - name of column that contains the x values
- `yData` (String) - name of column that contain the y values
- `fillData` (String) - name of column containing the data for colouring the chart markers
- `titleData` (String) - title of the chart

Example usage:

```html
<ScatterPlot
	dataPath="data/penguins.csv"
	xData="culmen_length_mm"
	yData="culmen_depth_mm"
	fillData="species"
	titleData="Penguin culmen sizes by species"
/>
```

<!-- #### Example data
Example data that can be used can be found in the [Vismark Examples repo](https://github.com/lea-8/Vismark-Examples/tree/main/static/data). -->

### Page elements

Page elements are components that define larger parts of a page to add expressivity.

#### Grid layout

Grid and Cell components are special, as they require opening and closing tags. They define a grid layout by specifying the number of columns in the Grid and using Cells to add content to every part of the grid. The content goes in between the opening and closing tags like so: `<Grid>content</Grid>` and `<Cell>content</Cell>`

Example usage:

```html
<Grid columns="{2}" showGrid="{false}">
	<Cell hideCell="{false}"> Some text and charts here! </Cell>
</Grid>
```

> [!NOTE]
> Please note that new lines must surround the content within a Grid/Cell.

Variables for the Cell component:

- `hideCell` (Boolean, default=false) - If true, the cell background colour and border become white and the cell becomes transparent.

Variables for Grid component:

- `columns` (Integer, default=2) - number of columns in the grid
- `showGrid` (Boolean, default=false) - this is a helper option that highlights the outline of the entire grid (useful for development)

Once a Grid layout has been defined using `<Grid></Grid>`, the Cell components will be added one by one to the right of the previous and after the full width of the grid has been used, the next cell will appear beneath it. For example, if 2 columns are specified the `<Cell></Cell>` components will appear on the page like this:

![Graphical representation of the grid layout with two columns](/static/grid_layout_docs.png)

#### Header & Footer

Currently, the `<Header />` and `<Footer />` components are not parameterisable, but this might change based on user feedback.

Example usage:

```html
<header />

... Some text and charts ...

<footer />
```

#### Image

An image (.jpeg, .png, .svg) with an option to specify its size.

Variables:

- `path` (String) - path to the image file
- `scale` (String) - percentage to scale the image by. (For example, to make the image half the size, specify `scale="50%"`)

Example usage:

```html
<image path="derry_graph.png" scale="20%" />
```

#### Widget

A widget allows you to style chunks of a page.

Variables:

- `borderColour` (String) - colour of the border
- `backgroundColour` (String) - colour of the background
- `badgeType` (String) - an optional badge to give additional information on what data is being displayed. The options are:
  - `totalUK` - shows the total benefit/cost for all of the UK
  - `perCapita` - show the cost/benefit per person in each LAD
  - `relativeCB` - Contribution to national benefits

Example usage:

```html
<Widget borderColour="#000000" backgroundColour="#f0f0f0" badgeType="totalUK">
	Some text and charts here!
</Widget>
```

### Text components

#### Dropdown

<details>
<summary>A dropdown allows you to  click on the arrow...</summary>
<br>
... to reveal some more details.
</details>
<br>

Arguments:

- `shownText` (String) - The text that is always visible (next to the dropdown arrow icon ▼)

Example usage:

```html
<Dropdown shownText="This is a dropdown!"> This is hidden text. </Dropdown>
```

## Previewing the page locally

To preview the page, you can run:

```bash
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

Alternatively, add the file association [through the UI](https://code.visualstudio.com/docs/languages/overview#_add-a-file-extension-to-a-language). Other code editors and IDEs may have similar options.

### More examples

Feel free to explore some example pages created with Vismark at [Vismark Examples](https://github.com/lea-8/Vismark-Examples).
