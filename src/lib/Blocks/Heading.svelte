<script lang="ts">
	import { getStringContent } from '$lib/djot';
	import Inline from '$lib/Inline.svelte';
	import type { Heading } from '@djot/djot';
	let { quire }: { quire: Quire<Heading> } = $props();
	let { level, children } = $derived(quire.content);
	let Tag = $derived(`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');
	let id = $derived(
		quire.content?.attributes?.id ??
			getStringContent(quire.content).toLocaleLowerCase().replace(/\s+/g, '-')
	);
</script>

<section {id}>
	<svelte:element this={Tag}>
		{#each children as child}
			<Inline quire={{ ...quire, content: child }} />
		{/each}
	</svelte:element>
</section>
