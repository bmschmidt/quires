<script lang="ts">
	import type { Strong } from '@djot/djot';
	let { quire }: { quire: Quire<Strong> } = $props();
	let { attributes, children } = $derived(quire.content);

	import Inline from '$lib/Inline.svelte';
</script>

<strong {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</strong>
