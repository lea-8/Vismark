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
<div class="cell {hideCell ? 'hide' : 'show'}">
	<slot />
</div>

<style>
	.cell.show {
		border: 2px solid #ececec;
		border-radius: 5px;
		background-color: rgb(248, 248, 248);
		padding: 1em;
	}

	.cell.hide {
		border: 0px solid transparent;
		border-radius: 5px;
		background-color: transparent;
		padding: 1em;
	}
</style>
