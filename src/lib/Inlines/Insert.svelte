<script lang="ts">
	import type { Insert } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Insert> } = $props();
	let { attributes, children } = $derived(quire.content);
</script>

<ins {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</ins>
