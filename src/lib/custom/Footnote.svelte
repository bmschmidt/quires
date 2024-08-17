<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { ListItem } from '@djot/djot';
	let { quire }: { quire: Quire<ListItem> } = $props();
	const { attributes, children } = quire.content;
	const ref = attributes?.ref;
	let classy = $derived('block-container' + attributes?.class ?? '');
</script>

<li {...attributes} class="block-container">
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
	{#if ref !== undefined}
		<a href={`#fnref-${ref}`} class="footnote-ref">⏎</a>
	{/if}
</li>

<style>
	.block-container {
		position: relative;
	}

	.block-container > div:last-of-type {
		display: inline-block;
	}

	.footnote-ref {
		position: absolute;
		top: 0;
		right: -0.5em; /* Adjust as needed */
		font-size: smaller;
		vertical-align: super;
		text-decoration: none;
	}
</style>
