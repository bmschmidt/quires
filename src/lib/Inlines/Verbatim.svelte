<script lang="ts">
	import type { Footnote, Reference, Verbatim } from '$lib/types/ast.d.ts';
	export let quire: Quire<Verbatim>;
	const { attributes, text } = quire.content;
</script>

<code {...attributes}>
	{text}
</code>
