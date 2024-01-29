<script lang="ts">
	import type { Strong } from '$lib/types/ast';
	export let quire: Quire<Strong>;
	import Inline from '$lib/Inline.svelte';
</script>

<strong>
	{#each quire.content.children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</strong>
