<script lang="ts">
	// TODO: List parentheses handling
	// TODO: List tightness

	import type { OrderedList } from '../types/ast';
	import Block from '$lib/Block.svelte';

	export let quire: Quire<OrderedList>;
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
	const type = typeLookup[list.style];
</script>

<ol {start} {type}>
	{#each list.children as li}
		<li>
			{#each li.children as block}
				<Block quire={{ ...quire, content: block }} />
			{/each}
		</li>
	{/each}
</ol>
