<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { ListItem } from '@djot/djot';
	let { quire }: { quire: Quire<ListItem> } = $props();
	const { attributes, children } = quire.content;
</script>

<li {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</li>
