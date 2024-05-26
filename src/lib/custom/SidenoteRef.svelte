<script lang="ts">
	import { footnoteState } from './footnoteState.svelte';
	import type { FootnoteReference, Footnote } from '$lib/types/ast';
	// This replaces the *reference*, not the full footnote.
	let { quire }: { quire: Quire<FootnoteReference> } = $props();

	const ref = quire.content.text;
</script>

<sup
	><label
		class="fn note-toggle"
		class:focused={footnoteState.hoveredFootnote === ref}
		onmouseenter={() => {
			footnoteState.hoveredFootnote = ref;
		}}
		onmouseleave={() => {
			footnoteState.hoveredFootnote = null;
		}}
		for="fn{ref}"
	></label></sup
>

<style>
	.fn::after {
		content: counter(noteref);
		counter-increment: noteref; /* Increment the value of section counter by 1 */
		font-size: 75%;
		cursor: pointer;
	}
	.fn::after:hover {
		text-decoration: underline;
	}
	.fn.focused::after {
		content: counter(noteref);
		text-decoration: underline;
		color: #8b0000;
	}
</style>
