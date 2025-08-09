<script>
  export let shownText = "";
</script>

<!-- svelte-ignore slot_element_deprecated -->
<details>
<summary>{shownText}</summary>
<br>
<slot/>
</details>