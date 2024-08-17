<script lang="ts">
	import type { Emph } from '@djot/djot';

	let { quire }: { quire: Quire<Emph> } = $props();
	import Inline from '$lib/Inline.svelte';
</script>

<em>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</em>
