<script lang="ts">
	import Inline from '$lib/Inline.svelte';
	import type { Mark } from '@djot/djot';
	let { quire }: { quire: Quire<Mark> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<mark {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</mark>
