<script lang="ts">
	import type { Strong } from '@djot/djot';
	let { quire }: { quire: Quire<Strong> } = $props();
	import Inline from '$lib/Inline.svelte';
</script>

<strong>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</strong>
