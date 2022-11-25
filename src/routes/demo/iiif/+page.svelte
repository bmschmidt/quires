<script lang="ts">
  import raw from '/src/demo_data/iiif.json?raw'
  import Document from '$lib/Document.svelte'
  // The overwritten image class.
  import Image from '../_Image.svelte'
</script>

<Document ast={JSON.parse(raw)} settings={{elements: {Image}}} />