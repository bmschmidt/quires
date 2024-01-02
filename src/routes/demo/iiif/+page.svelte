<script lang="ts">
	import quire from './iiif.md';
	import Document from '$lib/Doc.svelte';
	// The overwritten image class.
	import Image_OSD from './Image_OSD.svelte';
	quire.quireComponents = [['image', Image_OSD]];
</script>

<Document {quire} />
