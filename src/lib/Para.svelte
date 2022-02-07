<script>
  export let data
  export let settings
  import Elements from '$lib/Elements.svelte'
</script>
<p>
  <Elements {settings} elems={data} />
</p>

