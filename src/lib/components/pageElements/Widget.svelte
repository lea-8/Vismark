<!--
  @component
	Defines a rectangular section of the page.

	@example
	```
	<Widget borderColour="#000000" backgroundColour="#f0f0f0" badgeType="totalUK">
		Some text and charts here!
	</Widget>
	```
-->

<script>
	import { onMount } from 'svelte';

	import badgeTotal from '../../assets/badges/total.png';
	import badgePerCapita from '../../assets/badges/per_capita.png';
	import badgeRelative from '../../assets/badges/percentage.png';

	/** Colour of the border */
	export let borderColour = '#ececec';
	/** Colour of the background */
	export let backgroundColour = '#f8f8f8';
	/** Type of icon visible */
	export let badgeType = ''; // totalUK, perCapita, relativeCB

	let badgeContainer;
	$: badgePath = '';
	const baseRelPath = '../../assets/badges/';

	onMount(() => {
		setBadgePath(badgeType);
	});

	/**
	 * Set the path to the relevant badge icon file
	 * @param badgeUser - The name of the badge the user wants
	 */
	function setBadgePath(badgeUser) {
		if (badgeUser === 'totalUK') {
			badgePath = badgeTotal;
		} else if (badgeUser === 'perCapita') {
			badgePath = badgePerCapita;
		} else if (badgeUser === 'relativeCB') {
			badgePath = badgeRelative;
		} else {
			// remove the badge div.
			const element = document.getElementById('badgeDiv');
			element.remove(); // Removes the div with the 'badgeDiv' id

			return;
		}
	}
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div
	class="widget"
	style="
    --border-colour: {borderColour};
    --background-colour: {backgroundColour}
    "
>
	<div class="aggregation-icon-container" id="badgeDiv">
		<img src={badgePath} alt="badge" width="36" height="36" />
	</div>
	<slot />
</div>

<style>
	/* Styling for the widget */
	.widget {
		border: 2px solid var(--border-colour);
		border-radius: 8px;
		background-color: var(--background-colour);
		padding: 1em;
		margin: 0.5em 0em;
	}

	/* Styling for the badge icon */
	.aggregation-icon-container {
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		width: 99%;
		margin-top: 20px;
		margin-right: 10px;
	}
</style>
