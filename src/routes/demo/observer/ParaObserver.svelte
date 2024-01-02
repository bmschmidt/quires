<script lang="ts">
	import type { Para } from '$lib/types/ast';
	import { onMount } from 'svelte';

	export let quire: Quire<Para>;

	let node: HTMLDivElement;

	$: isVisible = false;
	function handleIntersection(event: Event) {
		console.log({ event });
		isVisible = (event as CustomEvent).detail.isIntersecting;
	}
	onMount(() => {
		quire.custom!.observer.observe(node);
		node.addEventListener('intersection', handleIntersection);
	});
</script>

<div bind:this={node} class:observed={isVisible}>
	<slot />
</div>

<style>
	div {
		margin: 100px;
		transition: opacity background-color;
		width: 14em;
		opacity: 0.33;
		background-color: #e0e0e0;
	}
	div.observed {
		opacity: 1;
		background-color: #f0f0f0;
	}
</style>
