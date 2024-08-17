<script lang="ts">
	import type { Doc } from '@djot/djot';
	import Block from './Block.svelte';
	import { materializeFootnotes } from './djot';
	import AsideNote from './custom/AsideNote.svelte';
	import SidenoteRef from './custom/SidenoteRef.svelte';
	import type { BlockOverride, QuireOverride } from './types/quire';
	import type { Div } from '@djot/djot';
	let {
		quire,
		notes = 'footnotes'
	}: {
		quire: Quire<Doc>;
		notes?: 'sidenotes' | 'footnotes';
	} = $props();

	let overrides = $derived(
		notes === 'footnotes'
			? []
			: ([
					{
						selector: 'div.footnote-aside',
						tag: 'div',
						component: AsideNote
					} as BlockOverride<Div>,
					{
						selector: 'footnote_reference',
						tag: 'footnote_reference',
						component: SidenoteRef
					}
				] as QuireOverride[])
	);

	let content = $derived(materializeFootnotes(quire.content, notes));

	let attributes = $derived(content.attributes);
	let children = $derived([...content.children]);
</script>

<div class="quire-document" {...attributes}>
	<!-- TODO: find a way to force regeneration on change that doesn't key on the object itself. -->
	{#each children as child (child)}
		<Block
			quire={{
				...quire,
				content: child,
				quireComponents: [...quire.quireComponents, ...overrides]
			}}
		></Block>
	{/each}
</div>

<style>
	.quire-document {
		counter-reset: note noteref;
	}
</style>
