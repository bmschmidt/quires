<script lang="ts">
	import type { Link } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Link> } = $props();

	const { attributes, destination, reference, children } = quire.content;
	if (reference) {
		console.warn('Dropping link reference', reference);
	}
</script>

<a {...attributes} href={destination}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</a>
