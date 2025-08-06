<script>
  let {
    hideCell = false,
    rowSpan = '',
    colSpan = '',
    sticky = false
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
    background-color: if(style(--hide-cell: true): #ffffff00; else: rgb(248, 248, 248);); 
    padding: 1em;
  }
</style>