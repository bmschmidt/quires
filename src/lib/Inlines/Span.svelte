<script lang="ts">
	import type { Span } from '@djot/djot';
	let { quire }: { quire: Quire<Span> } = $props();
	import Inline from '$lib/Inline.svelte';
	const { attributes, children, pos } = quire.content;
</script>

<span {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</span>
