<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { Section } from '../types/ast.d.ts';
	export let quire: Quire<Section>;
	const { attributes, children } = quire.content;
</script>

<section {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</section>
