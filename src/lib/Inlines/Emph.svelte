<script lang="ts">
	import type { Emph } from '@djot/djot';

	let { quire }: { quire: Quire<Emph> } = $props();
	let { attributes, children } = $derived(quire.content);

	import Inline from '$lib/Inline.svelte';
</script>

<em {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</em>
