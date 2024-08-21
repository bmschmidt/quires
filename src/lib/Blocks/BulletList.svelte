<script lang="ts">
	import type { Attributes, BulletList } from '@djot/djot';
	import Block from '$lib/Block.svelte';
	import type { Block as TBlock } from '@djot/djot';
	let { quire }: { quire: Quire<BulletList> } = $props();
	// @ts-expect-error A list item *is* a block, but the compiler
	// doesn't want me broadening the type here even though the
	// inside the block they will indeed get treated as list items.
	// This is necessary because the block type doesn't like the specificity here
	let { attributes, children }: { attributes?: Attributes; children: TBlock[] } = $derived(
		quire.content
	);
</script>

<ul {...attributes}>
	{#each children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}
</ul>
