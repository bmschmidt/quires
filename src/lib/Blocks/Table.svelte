<script lang="ts">
	import type { Table } from '$lib/types/ast';
	export let quire: Quire<Table>;
	import Inline from '$lib/Inline.svelte';
	const { attributes, children, pos } = quire.content;
	const [caption, ...rows] = children;

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
