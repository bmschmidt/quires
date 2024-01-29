<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { Div } from '$lib/types/ast';
	export let quire: Quire<Div>;
	const { attributes, children, pos } = quire.content;
</script>

<div {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</div>
