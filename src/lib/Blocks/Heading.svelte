<script lang="ts">
	import Inline from '$lib/Inline.svelte';
	import type { Heading } from '@djot/djot';
	let { quire }: { quire: Quire<Heading> } = $props();
	const { level, children } = quire.content;
	const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
</script>

<svelte:element this={Tag}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</svelte:element>
