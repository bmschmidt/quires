<script lang="ts">
	import quire from './iiif.md';
	import Document from '$lib/Doc.svelte';
	// The overwritten image class.
	import Image_OSD from './Image_OSD.svelte';
	import type { QuireComponent, QuireOverride } from '$lib/types/quire';
	import type { Image } from '@djot/djot';
	quire.quireComponents = [
		...(quire.quireComponents || []),
		{ tag: 'image', component: Image_OSD as QuireComponent<Image> }
	] as QuireOverride[];
</script>

<Document {quire} />
