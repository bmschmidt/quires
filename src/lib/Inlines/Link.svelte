<script lang="ts">
	import type { Link } from '$lib/types/ast.d.ts';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Link>;

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
