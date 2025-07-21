<script>
  let {
    hideCell = false
  } = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div 
  class="cell"
  style="--hide-cell: {hideCell}"
>
  <slot />
</div>

<style>
  .cell {
    border: if(style(--hide-cell: true): 2px solid #ffffff; else: 2px solid #ececec;); 
    border-radius: 5px;
    background-color: if(style(--hide-cell: true): #ffffff; else: rgb(248, 248, 248);); 
    padding: 1em;
  }
</style>