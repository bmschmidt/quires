<script>
  import doc from './gibbon.md'
  import Document from '$lib/Document.svelte';
	import Div from '$lib/Div.svelte';
</script>

<div class="document">
<Document ast={doc.document}>

</Document>
</div>

<style>
  div.document {
    max-width: 40em;
    margin-left: 10em;
  }
</style>