<script lang="ts">
	import type { Insert } from '../types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Insert>;
	const { attributes, children } = quire.content;
</script>

<ins {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</ins>
