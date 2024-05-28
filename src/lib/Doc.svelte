<script lang="ts">
	import type { Doc } from './types/ast';
	import Block from './Block.svelte';
	import { materializeFootnotes } from './djot';
	let {
		quire,
		notes = 'footnotes'
	}: {
		quire: Quire<Doc>;
		notes?: 'sidenotes' | 'footnotes';
	} = $props();

	let content = $derived(materializeFootnotes(quire.content, notes));

	let attributes = $derived(content.attributes);
	let children = $derived([...content.children]);
</script>

<div class="quire-document" {...attributes}>
	<!-- TODO: find a way to force regeneration on change that doesn't key on the object itself. -->
	{#each children as child (child)}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</div>

<style>
	.quire-document {
		counter-reset: note noteref;
	}
</style>
