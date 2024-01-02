<script lang="ts">
	import type { Delete } from '../types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Delete>;
	const { attributes, children } = quire.content;
</script>

<del {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</del>
