<script lang="ts">
	import Inline from '$lib/Inline.svelte';
	import type { Heading } from '$lib/types/ast';
	export let quire: Quire<Heading>;
	const { level, children } = quire.content;
	const Tag = `h${level}`;
</script>

<svelte:element this={Tag}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</svelte:element>
