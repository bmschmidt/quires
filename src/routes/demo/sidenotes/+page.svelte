<script lang="ts">
	import quire from './gibbon.md';
	import Sidenote from '$lib/custom/Sidenote.svelte';
	import type { QuireOverride } from '$lib/types/quire';
	import type { Inline, Block } from '@djot/djot';

	quire.quireComponents = [
		{ selector: 'footnote_reference', tag: 'footnote_reference', component: Sidenote }
	] as QuireOverride<Inline | Block>[];

	import Document from '$lib/Doc.svelte';
</script>

<div class="document">
	<Document {quire} />
</div>

<style>
	div.document {
		max-width: 40em;
		margin-left: auto;
		margin-right: auto;
		counter-reset: note;
		/* The padded area will hold the sidenotes */
		padding-right: min(20em, 33%);
	}
	@media (max-width: 640px) {
		/* The sidenotes are inlines less than 640px */
		div.document {
			padding-right: 0px;
		}
	}
</style>
