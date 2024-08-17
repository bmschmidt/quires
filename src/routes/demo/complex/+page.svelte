<script lang="ts">
	import quire from './complex.md';
	// We use Markdown style strong and italics.
	import MarkdownStrong from '$lib/custom/MyStrong.svelte';
	quire.quireComponents = [
		{
			selector: 'strong',
			tag: 'strong',
			component: MarkdownStrong as InlineOverrideComponent<Strong>
		} as InlineOverride<Strong>
	];
	import Document from '$lib/Doc.svelte';
	import type { InlineOverride, InlineOverrideComponent, QuireOverride } from '$lib/types/quire';
	import type { Strong } from '@djot/djot';
</script>

<Document {quire} />
