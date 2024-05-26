<script lang="ts">
	import type { DefinitionList } from '$lib/types/ast.d.ts';
	import Block from '$lib/Block.svelte';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<DefinitionList> } = $props();
	const { attributes, children } = quire.content;
</script>

<dl {...attributes}>
	{#each children as { children: [term, definition] }}
		<dt {...term.attributes}>
			{#each term.children as child}
				<Inline quire={{ ...quire, content: child }} />
			{/each}
		</dt>
		<dd>
			{#each definition.children as child}
				<Block quire={{ ...quire, content: child }} />
			{/each}
		</dd>
	{/each}
</dl>
