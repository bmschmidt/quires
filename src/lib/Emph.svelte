<script lang="ts">
  export let data;
  export let settings;
  import Elements from '$lib/Elements.svelte';
</script>

<em><Elements {settings} elems={data} /></em>