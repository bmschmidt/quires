<script lang="ts">
  export let data : n.NodeType.OrderedList;
  export let settings
  import Elements from '$lib/Elements.svelte'
  const [[startnumber, style, delim], listparts] = data;
</script>

<ol>
  {#each listparts as datum}
  <li>
    <Elements {settings} elems={datum} />
  </li>
  {/each}
</ol>