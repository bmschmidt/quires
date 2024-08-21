<script lang="ts">
	import type { Para } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Para> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<p {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</p>
