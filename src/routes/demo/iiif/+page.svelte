<script lang="ts">
	import doc from './iiif.md';
	import Document from '$lib/Document.svelte';
	// The overwritten image class.
	import Image from './_Image.svelte';
</script>

<Document ast={doc.document} settings={{ elements: { Image } }} />
