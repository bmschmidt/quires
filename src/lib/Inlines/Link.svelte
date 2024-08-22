<script lang="ts">
	import type { Link } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Link> } = $props();

	let { attributes, destination, reference, children } = $derived(quire.content);
	// TODO: Support link references
	$effect(() => {
		if (reference) {
			console.warn('Dropping link reference', reference);
		}
	});
</script>

<a {...attributes} href={destination}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</a>
