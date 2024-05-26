<script lang="ts">
	import type { BlockQuote } from '$lib/types/ast';
	import Block from '$lib/Block.svelte';
	let { quire }: { quire: Quire<BlockQuote> } = $props();
	let { attributes, children, pos } = $derived(quire.content);
</script>

<blockquote {...attributes}>
	{#each [...children] as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</blockquote>
