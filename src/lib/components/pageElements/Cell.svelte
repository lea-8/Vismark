<script>
<<<<<<< HEAD
	export let hideCell = false;
	// export let rowSpan = '';
	// export let colSpan = '';
	// export let sticky = false;
=======
  export let hideCell = false;
  // export let rowSpan = '';
  // export let colSpan = '';
  // export let sticky = false;
>>>>>>> main
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class="cell" style="--hide-cell: {hideCell}">
	<slot />
</div>

<style>
<<<<<<< HEAD
	.cell {
		border: if(style(--hide-cell: true): 0px solid #ffffff; else: 2px solid #ececec;);
		border-radius: 5px;
		background-color: if(style(--hide-cell: true): transparent; else: rgb(248, 248, 248) ;);
		padding: 1em;
	}
</style>
=======
  .cell {
    border: if(style(--hide-cell: true): 0px solid #ffffff; else: 2px solid #ececec;); 
    border-radius: 5px;
    background-color: if(style(--hide-cell: true): transparent; else: rgb(248, 248, 248);); 
    padding: 1em;
  }
</style>
>>>>>>> main
