<script lang="ts">

  export let document;
  import Scrollership from '$lib/custom/ScrollershipWrapper.svelte'

  // Can return a promise for a constructor to avoid 
  // browser-only problems.
  
  const API = async () => import('$lib/../scrollership/nori.js')

</script>

<Scrollership {API} ast={document}></Scrollership>