<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type QuireObserver from '$lib/quireObserver';
	import type { Div } from '$lib/types/ast';
	export let quire: Quire<Div>;
	import { onMount } from 'svelte';
	let div: HTMLDivElement;

	$: active = false;

	onMount(() => {
		const observer = quire.custom!.observer as QuireObserver;

		if (observer === undefined) {
			throw new Error('observer is undefined');
		}
		// We use this callback only to adjust styles. The
		// API codeblocks will be called from the div layer.

		observer.observe(div, function (entry) {
			if (entry.isIntersecting) {
				active = true;
			} else {
				active = false;
			}
		});
	});

	let classes = quire.content.attributes?.class ?? '';
	classes += ' chunk scroll-mt-36';

	$: custom = {
		...quire.custom,
		triggerNode: div
	};
</script>

<div class:active bind:this={div} {...quire.content.attributes} class={classes}>
	{#each quire.content.children as child}
		<Block quire={{ ...quire, content: child, custom }} />
	{/each}
</div>

<style>
	.chunk {
		outline: 1px solid grey;
		padding: 10px 30px;
		margin-top: 60vh;
		background-color: #f0f0f0;
		opacity: 0.5;
		transition: opacity 0.5s;
	}

	.chunk.active {
		opacity: 0.999;
	}
</style>
