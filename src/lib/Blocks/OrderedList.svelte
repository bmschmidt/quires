<script lang="ts">
	// TODO: List parentheses handling
	// TODO: List tightness

	import type { OrderedList } from '@djot/djot';
	import Block from '$lib/Block.svelte';

	let { quire }: { quire: Quire<OrderedList> } = $props();
	const list = quire.content;
	const start = quire.content.start || 1;
	const typeLookup = {
		'1.': '1',
		'1)': '1',
		'(1)': '1',
		'a.': 'a',
		'a)': 'a',
		'(a)': 'a',
		'A.': 'A',
		'A)': 'A',
		'(A)': 'A',
		'i.': 'i',
		'i)': 'i',
		'(i)': 'i',
		'I.': 'I',
		'I)': 'I',
		'(I)': 'I'
	} as const;
	// @ts-expect-error A list item *is* a block, but the compiler
	// doesn't want me broadening the type here even though the
	// inside the block they will indeed get treated as list items.
	// This is necessary because the block type doesn't like the specificity here
	const { attributes, children }: { attributes?: Attributes; children: TBlock[] } = quire.content;
	const type = typeLookup[list.style];
</script>

<ol {...attributes} {start} {type}>
	{#each children as li}
		<Block quire={{ ...quire, content: li }} />
	{/each}
</ol>
