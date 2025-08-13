<!--
  @component
	Defines a grid with the specified number of columns and no rows

	@example
	```
	<Grid columns="{2}" showGrid="{false}">
		Some content
	</Grid>
	```
-->

<script>
	/** Number of columns */
	export let columns = 2;
	/** Shows the grid outline for debugging purposes */
	export let showGrid = false;
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class="grid-layout" style="--num-columns: {columns}; --show-grid: {showGrid}">
	<slot />
</div>

<style>
	.grid-layout {
		display: grid;
		grid-template-columns: repeat(var(--num-columns), 1fr);
		gap: 1rem;
		border: if(style(--show-grid: true): 2px solid #f76707; else: 0px solid #ffffff;);
		border-radius: 5px;
		margin: 0.5em 0em;
	}
</style>
