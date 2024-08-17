<script lang="ts">
	import type { Delete } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Delete> } = $props();
	const { attributes, children } = quire.content;
</script>

<del {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</del>
