<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { Div } from '@djot/djot';
	let { quire }: { quire: Quire<Div> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<div {...attributes}>
	{#each [...children] as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</div>
