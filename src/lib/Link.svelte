<script>
  export let data
  export let settings
  import Elements from '$lib/Elements.svelte'
  const [attr, elems, [url, text]] = data;
  
</script>

<a href="{url}" title="{text}"><Elements {settings} {elems} /></a>