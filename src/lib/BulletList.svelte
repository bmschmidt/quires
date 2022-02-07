<script lang="ts">
  export let data : n.NodeType.BulletList
  export let settings;
  import Elements from '$lib/Elements.svelte';
  import type { n } from 'src/global';

</script>

<ul>
  {#each data as datum}
  <li>
    <Elements {settings} elems={datum} />
  </li>
  {/each}
</ul>