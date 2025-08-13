<!--
  @component
	Defines a cell within a grid

	@example
	```
	<Cell hideCell="{false}"> Some text and charts here! </Cell>
	```
-->

<script>
	export let hideCell = false;
	// export let sticky = false;
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class="cell" style="--hide-cell: {hideCell}">
	<slot />
</div>

<style>
	.cell {
		border: if(style(--hide-cell: true): 0px solid #ffffff; else: 2px solid #ececec;);
		border-radius: 5px;
		background-color: if(style(--hide-cell: true): transparent; else: rgb(248, 248, 248) ;);
		padding: 1em;
	}
</style>
