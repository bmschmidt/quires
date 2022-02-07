<script>
  export let data
  export let settings
  import Elements from '$lib/Elements.svelte'
</script>

<strong><Elements {settings} elems={data} /></strong>