<script lang="ts">
  // import Image from 'pandoc-svelte-components/Image.svelte';
  import Image from '$lib/Image.svelte';
  import IiifImage from './_Image_OSD.svelte';  
  import type { NodeContent } from '../../types/node';
  export let data : NodeContent["Image"]
  export let settings;

  const [attr, contents, [url, urltype]] = data;

</script>
The image <code>src</code> passed in the markdown is <code>{url}</code>
<br>
{#if url.endsWith(".json")}'
  <IiifImage {data} {settings} />
{:else}
  <Image {data} {settings}></Image>
{/if}