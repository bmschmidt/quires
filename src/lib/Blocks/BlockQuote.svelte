<script lang="ts">
	import type { BlockQuote } from '@djot/djot';
	import Block from '$lib/Block.svelte';
	let { quire }: { quire: Quire<BlockQuote> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<blockquote {...attributes}>
	{#each [...children] as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</blockquote>
