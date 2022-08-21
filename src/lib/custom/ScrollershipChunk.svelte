<script lang="ts">
  export let data;
  export let settings;
  import {onMount} from 'svelte'
  import Elements from '$lib/Elements.svelte'

  const [[id, classes, kv], elems] = data
  const attrs = Object.fromEntries(kv)
  let div = undefined;

  $: active = false;
  
  function activate_block() {
    // To run a block means 
    // to execute the code from each of them.
    for (let elem of elems) {
      if (elem.t == "CodeBlock") {
        if (elem.c._scrollerly_apparatus) {
          elem.c._scrollerly_apparatus.run();
        }
      }
    }
  }

  onMount(() => {
    const {observer} = settings;
    if (observer === undefined) {
      throw new Error('observer is undefined');
    }

    div.enter = () => {
      active = true;
      activate_block();
    }
    div.exit = () => {
      active = false;
    }
    observer.observe(div);
  })

</script>

<div class:active={active} bind:this={div} id="{id}" class="chunk scroll-mt-36 {classes.join(" ")}" {...attrs}>
  <Elements {settings} elems={elems} />
</div>

<style>
  .chunk {
    outline: 1px solid grey;
    padding: 10px 30px;
    margin-top: 60vh;
    background-color: #f0f0f0;
    opacity: 0.5;
  }

  

  .chunk.active {
    opacity: 0.999;
  }

</style>

