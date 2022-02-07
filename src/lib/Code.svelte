<script>
  export let data
  export let settings
  const [[id, classes, kv], text] = data
  import Elements from '$lib/Elements.svelte'
  const attrs = Object.fromEntries(kv)
</script>

<code id={id} class={classes.join(" ")} {...attrs}>
  {text}
</code>