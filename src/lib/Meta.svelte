<script>
  export let data
  export let settings = {}

  import Elements from './Elements.svelte'
</script>

<svelte:head>
  {#if data.title}
    <title>{data["title"]['c'].map(d => d.c || " ").join(" ")}
    </title>
  {/if}
  {#each Object.keys(data) as key}
    <h1>{key}</h1>
    <Elements elems={data[key]['c']} {settings}></Elements>
  {/each}
</svelte:head>
