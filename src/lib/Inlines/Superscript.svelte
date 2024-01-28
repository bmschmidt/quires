<script lang="ts">
	import type { Subscript } from '../types/ast.d.ts';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<Subscript>;
	const { attributes, children } = quire.content;
</script>

<sup {...attributes}>
	{#each children as child}
		<Inline quire={{ ...quire, content: child }} />
	{/each}
</sup>
