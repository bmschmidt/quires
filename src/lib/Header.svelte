<script lang="ts">
  export let data : Header
  export let settings
  import Elements from '$lib/Elements.svelte'
  const [level, meta, elems] = data;
  const [id, attrs, class_list] = meta;
  const classes = class_list.join(" ")
</script>

{#if level <= 1}
<h1 id={id} class={classes} {...attrs}>
  <Elements {elems} {settings} />
</h1>
{:else if level <= 2}
<h2 id={id} class={classes}>
  <Elements {elems} {settings} />
</h2>
{:else if level <= 3}
<h3 id={id} class={classes}>
  <Elements {elems} {settings} />
</h3>
{:else if level <= 4}
<h4 id={id} class={classes}>
  <Elements {elems} {settings} />
</h4>
{:else if level <= 5}
<h5 id={id} class={classes}>
  <Elements {elems} {settings} />
</h5>
{:else}
<h6 id={id} class={classes}>
  <Elements {elems} {settings} />
</h6>
{/if}