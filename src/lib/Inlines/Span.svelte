<script lang="ts">
	import type { Span } from '$lib/types/ast';
	export let quire: Quire<Span>;
	import Inline from '$lib/Inline.svelte';
	const { attributes, children, pos } = quire.content;
</script>

<span {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</span>
