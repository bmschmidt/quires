<script lang="ts">
	import type { Subscript } from '../types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Subscript>;
	const { attributes, children } = quire.content;
</script>

<sub {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</sub>
