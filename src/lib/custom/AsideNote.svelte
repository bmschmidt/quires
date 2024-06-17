<script lang="ts">
	import { footnoteState } from './footnoteState.svelte';
	import type { Div } from '$lib/types/ast.d.ts';

	let { quire }: { quire: Quire<Div> } = $props();

	console.log('quire', quire);
	let ref = $derived(quire.content.attributes!.ref) as string;
	$inspect(quire.content);
	import Block from '$lib/Block.svelte';
</script>

<aside
	id="fn-{ref}"
	class="note"
	class:focused={footnoteState.hoveredFootnote === ref}
	onmouseenter={() => {
		footnoteState.hoveredFootnote = ref;
	}}
	onmouseleave={() => {
		footnoteState.hoveredFootnote = null;
	}}
>
	{#each quire.content.children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</aside>

<style>
	.note::before {
		content: counter(note);
		counter-increment: note; /* Increment the value of section counter by 1 */
		position: absolute;
		margin-left: -3em;
		width: 2.5em;
		text-align: right;
	}
	.note {
		display: flex;
		flex-direction: column;
		float: right;
		clear: right;
		padding-left: 2px;
		margin-right: -50%;
		width: 40%;
		/*		margin-top: 0.3rem;*/
		margin-bottom: 0;
		margin-block-start: 0em;
		font-size: smaller;
		/*line-height: 1.3;*/
		vertical-align: baseline;
		position: relative;
		transition: all 500ms ease-in-out;
	}
	.note :global(:first-child) {
		margin-top: 0px;
		margin-block-start: 0px;
	}
	.note.focused {
		box-shadow: -3px 0 0 #8b0000;
	}

	@media (max-width: 640px) {
		.note {
			display: none;
		}
	}
</style>
