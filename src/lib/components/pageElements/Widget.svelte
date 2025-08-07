<script>
	import { onMount } from 'svelte';

  import badgeTotal from "../../assets/badges/total.png";
  import badgePerCapita from "../../assets/badges/per_capita.png";
  import badgeRelative from "../../assets/badges/percentage.png";

  let {
    type = '', // legend, info, chart
    borderColour='#ececec',
    backgroundColour='#f8f8f8',
    badgeType='' // totalUK, perCapita, relativeCB
  } = $props();
  let badgeContainer;

  let badgePath = $state('');
  const baseRelPath = '../../assets/badges/';

  onMount(() => {
    console.log("badgeType:", badgeType)
    setBadgePath(badgeType);
  });

  function setBadgePath(badgeUser) {
    console.log("setting badge")
    if (badgeUser === 'totalUK') {
      badgePath = badgeTotal;
    } else if (badgeUser === 'perCapita') {
      badgePath = badgePerCapita;
    } else if (badgeUser === 'relativeCB') {
      badgePath = badgeRelative;
    } else {
      console.log("no badge.")

      // remove that div.
      const element = document.getElementById("badgeDiv");
      element.remove(); // Removes the div with the 'div-02' id
      // badgeContainer.$;

      return
    }
  }

  // setBadgePath(badgeType);
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
    <img src={badgePath} alt="badge" width=36 height=36>
  </div>
  <slot />
</div>

<style>
  .widget {
    border: 2px solid var(--border-colour); 
    border-radius: 8px;
    background-color: var(--background-colour); 
    padding: 1em;
  }

  .aggregation-icon-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 99%;
    margin-top: 20px;
    margin-right: 10px;
  }
</style>