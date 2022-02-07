<script lang="ts">
  export let data
  export let settings
  import { onMount } from 'svelte';
  import Elements from '$lib/Elements.svelte'

  let node = undefined;
  $: observed = false;
  onMount(() => {
    node.__svandoc = {
      visible: () => {observed = true},
      hidden: () => observed = false
    }
    settings.observer.observe(node)
  })
</script>

<p bind:this={node} class:observed={observed}>
  <Elements elems={data} {settings} />
</p>

<style>
  p {
    margin: 100px;
    transition: opacity background-color;
    width: 14em;
    opacity: 0.33;
    background-color: #e0e0e0;
  }
  p.observed {
    opacity: 1;
    background-color: #f0f0f0;
  }
</style>