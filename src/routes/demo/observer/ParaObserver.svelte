<script lang="ts">
	import type QuireObserver from '$lib/quireObserver';
	import type { Para } from '$lib/types/ast.d.ts';
	import { onMount } from 'svelte';

	export let quire: Quire<Para>;

	let node: HTMLDivElement;

	$: isVisible = false;
	function handleIntersection(entry: IntersectionObserverEntry) {
		isVisible = entry.isIntersecting;
	}

	onMount(() => {
		// Quire's observer allows us to pass a callback function
		// to intersection observer. This lets us modify the scope
		// locally.
		(quire.custom!.observer as QuireObserver).observe(node, handleIntersection);
	});
</script>

<div bind:this={node} class:observed={isVisible}>
	<slot />
</div>

<style>
	div {
		transition: opacity background-color;
		opacity: 0.33;
		background-color: #e0e0e0;
	}
	div.observed {
		opacity: 1;
		background-color: #f0f0f0;
	}
</style>
