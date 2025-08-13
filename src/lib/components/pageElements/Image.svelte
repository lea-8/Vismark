<!--
  @component
	Wraps around a simple image, with the option to scale the size.

	@example
	```
	<Image path="derry_graph.png" scale="20%" />
	```
-->

<script>
	/** Path to image file */
	export let path = '';
	/** Scale factor for the image. Has to be String with '%' sign included */
	export let scale = '100%';
</script>

<img src={path} width={scale} alt={path} />
