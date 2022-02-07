<script>
  export let data
  export let settings
  const [[id, classes, kv], elems] = data
  const attrs = Object.fromEntries(kv)
  import { page } from '$app/stores'
  import Elements from './Elements.svelte'
</script>

<span 
  class="{classes.join(" ")}"
  {...attrs}><Elements {settings} {elems} />
</span>
