<!--
  @component
	Dropdown element. Wraps the HTML in easier syntax and fewer tags.

	@example
	```
	<Dropdown shownText="This is a dropdown!"> This is hidden text. </Dropdown>
	```
-->

<script>
	/** The text hidden 'within' the dropdown */
	export let shownText = '';
</script>

<!-- svelte-ignore slot_element_deprecated -->
<details>
	<summary>{shownText}</summary>
	<br />
	<slot />
</details>
