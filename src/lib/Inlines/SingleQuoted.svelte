<script lang="ts">
	import type { SingleQuoted } from '$lib/types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<SingleQuoted>;
</script>

‘
{#each quire.content.children as child}
	<Inline quire={{ ...quire, content: child }} />
{/each}
’
