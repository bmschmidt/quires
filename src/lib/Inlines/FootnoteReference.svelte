<script lang="ts">
	import type { FootnoteReference } from '$lib/types/ast.d.ts';
	const { quire }: { quire: Quire<FootnoteReference> } = $props();
	const { attributes } = quire.content;
</script>

<a id="fnref-{quire.content.text}" href="#fn-{quire.content.text}"
	><sup {...attributes}>{quire.content.text}</sup></a
>
