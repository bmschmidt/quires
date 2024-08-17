<script lang="ts">
	import type { Subscript } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Subscript> } = $props();
	const { attributes, children } = quire.content;
</script>

<sub {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</sub>
