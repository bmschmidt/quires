<script>
  export let data
  export let settings
  const _ = settings;
  const [[id, classes, kv], inlines, [url]] = data;
  const attrs = Object.fromEntries(kv)
  const text = inlines.map(inline => inline.c).filter(d => d).join(" ")
</script>

<img {id} class="{classes.join(" ")}" src="{url}" alt="{text}" {...attrs}/>