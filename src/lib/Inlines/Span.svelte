<script lang="ts">
	import type { Span } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Span> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<span {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</span>
