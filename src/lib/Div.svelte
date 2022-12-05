<script lang="ts">
  export let data
  export let settings

  import Elements from '$lib/Elements.svelte'

  const [[id, classes, kv], elems] = data
  const attrs = Object.fromEntries(kv)
  const custom_els = settings['elements']
  let component = null;
  for (let classname of classes) {
    if (custom_els[`div.${classname}`]) {
      component = custom_els[`div.${classname}`]    
    }
  }
</script>

{#if component}
  <svelte:component this={component} {data} {settings} />
{:else}
  <div id="{id}" class="scroll-mt-36 {classes.join(" ")}" {...attrs}>
    <Elements {settings} {elems} />
  </div>
{/if}
