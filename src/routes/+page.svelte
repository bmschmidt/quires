<script>
	import doc from './index.md'
	import Document from '$lib/Document.svelte';
</script>

<h1>{doc.metadata.title}</h1>

<Document ast={doc.document} />