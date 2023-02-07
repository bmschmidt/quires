<script>
	import { base } from '$app/paths';
	import doc from './index.md'
	import Document from '$lib/Document.svelte';
</script>

<Document ast={doc.document} />