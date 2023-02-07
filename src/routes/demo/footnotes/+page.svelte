<script>
  import doc from './gibbon.md'
  import Document from '$lib/Document.svelte';
</script>

<div class="document">
<Document ast={doc.document} />
</div>

<style>
  div.document {
    max-width: 40em;
    margin-left: 10em;
  }
</style>