<script lang="ts">
  export let data
  import Resizer from '../_Callout_Resizer.svelte';
  import Scrollership from '$lib/custom/ScrollershipWrapper.svelte'

  // Can return a promise for a constructor to avoid 
  // browser-only problems.
  const controls = {
    resizer: Resizer
  }
  const API = async () => import('$lib/../scrollership/nori.js')
  
</script>

<Scrollership {controls} {API} ast={data.document}></Scrollership>