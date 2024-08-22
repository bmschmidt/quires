<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { Section } from '@djot/djot';
	let { quire }: { quire: Quire<Section> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<section {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</section>
