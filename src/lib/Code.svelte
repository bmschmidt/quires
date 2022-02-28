<script lang="ts">
  import type { n } from 'src/global';
  export let data : NodeType.Code
  export let settings

  import Elements from '$lib/Elements.svelte'

  const [[id, classes, kv], text] = data
  const attrs = Object.fromEntries(kv)
</script>

<code id={id} class={classes.join(" ")} {...attrs}>
  {text}
</code>