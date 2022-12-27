<script>
	// This one is pretty messy still.

	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';

	import { page } from '$app/stores';
	const [[id, classes, kv], caption, colSpecs, [headattr, headrows], bodies, footer] = data;
	const attrs = Object.fromEntries(kv);
</script>

<table {id} class="table-auto {classes.join(' ')}" {...attrs}>
	<thead>
		{#each headrows as [attr, rows]}
			<tr>
				{#each rows as [Attr, Alignment, RowSpan, ColSpan, elems]}
					<th><Elements {elems} {settings} /></th>
				{/each}
			</tr>
		{/each}
	</thead>
	<tbody>
		{#each bodies as [Attr, RowHeadColumns, a_s, rows]}
			{#each rows as [rowattr, cells]}
				<tr>
					{#each cells as [Attr, Alignment, RowSpan, ColSpan, elems]}
						<td><Elements {elems} {settings} /></td>
					{/each}
				</tr>
			{/each}
		{/each}
	</tbody>
</table>
