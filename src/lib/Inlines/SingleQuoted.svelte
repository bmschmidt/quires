<script lang="ts">
	import type { SingleQuoted } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<SingleQuoted> } = $props();
</script>

‘
{#each quire.content.children as child}
	<Inline quire={{ ...quire, content: child }} />
{/each}
’
