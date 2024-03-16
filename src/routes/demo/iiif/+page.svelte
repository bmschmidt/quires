<script lang="ts">
	import quire from './iiif.md';
	import Document from '$lib/Doc.svelte';
	// The overwritten image class.
	import Image_OSD from './Image_OSD.svelte';
	import type { QuireComponent } from '$lib/types/quire';
	import type { Image } from '$lib/types/ast';
	quire.quireComponents = [['image', Image_OSD as QuireComponent<Image>]];
</script>

<Document {quire} />
