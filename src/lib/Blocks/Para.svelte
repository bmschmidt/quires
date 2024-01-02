<script lang="ts">
	import type { Para } from 'src/types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Para>;
</script>

<p>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</p>
