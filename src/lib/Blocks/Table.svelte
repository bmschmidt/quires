<script lang="ts">
	import type { Table } from '@djot/djot';
	let { quire }: { quire: Quire<Table> } = $props();
	import Inline from '$lib/Inline.svelte';
	let { attributes, children } = $derived(quire.content);
	let [caption, ...rows] = $derived(children);

	//TODO: table alignment.
</script>

{#if caption}
	<caption>
		{#each caption.children as child}
			<Inline quire={{ ...quire, content: child }} />
		{/each}
	</caption>
{/if}

<table {...attributes}>
	<tbody>
		{#each rows as row}
			<tr>
				{#each row.children as cell}
					{#if cell.head}
						<th align={cell.align === 'default' ? 'left' : cell.align}>
							{#each cell.children as child}
								<Inline quire={{ ...quire, content: child }} />
							{/each}
						</th>
					{:else}
						<td align={cell.align === 'default' ? 'left' : cell.align}>
							{#each cell.children as child}
								<Inline quire={{ ...quire, content: child }} />
							{/each}
						</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
