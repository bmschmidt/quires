<script lang="ts">
	import type { Para } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<Para> } = $props();
</script>

<p>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</p>
