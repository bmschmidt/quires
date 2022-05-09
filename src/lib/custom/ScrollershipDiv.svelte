<script lang="ts">
  export let data;
  export let settings;
  import Div from "../Div.svelte"
  import ScrollershipChunk from "./ScrollershipChunk.svelte";
  import ScrollershipCodeBlock from './ScrollershipCodeBlock.svelte';

  // Overwrite any code blocks below here with the custom element.
  const new_els = {...settings['elements']}
  new_els['CodeBlock'] = ScrollershipCodeBlock
  const new_settings = {...settings, elements: new_els}

  const [[id, classes, kv], elems] = data;
  
</script>

{#if classes.includes('chunk')}
  <ScrollershipChunk {data} settings={new_settings}></ScrollershipChunk>
{:else}
  <Div {data} {settings}></Div>
{/if}