<script lang="ts">
	import type { Emph } from 'src/types/ast';

	export let quire: Quire<Emph>;
	import Inline from '$lib/Inline.svelte';
</script>

<em>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</em>
