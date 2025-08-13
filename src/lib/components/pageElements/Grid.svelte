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
<!-- <div class="grid-layout" style="--num-columns: {columns}; --show-grid: {showGrid}"> -->
<div class="grid-layout {showGrid ? 'show-grid' : 'hide-grid'}">
	<slot />
</div>

<style>
	.grid-layout.show-grid {
		display: grid;
		grid-template-columns: repeat(var(--num-columns), 1fr);
		gap: 1rem;
		border: 2px solid #f76707;
		border-radius: 5px;
		margin: 0.5em 0em;
	}

	.grid-layout.hide-grid {
		display: grid;
		grid-template-columns: repeat(var(--num-columns), 1fr);
		gap: 1rem;
		border: 0px solid #ffffff;
		border-radius: 5px;
		margin: 0.5em 0em;
	}
</style>
