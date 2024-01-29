<script lang="ts">
	import type { BlockQuote } from '$lib/types/ast';
	import Block from '$lib/Block.svelte';
	export let quire: Quire<BlockQuote>;
	const { attributes, children, pos } = quire.content;
</script>

<blockquote {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</blockquote>
