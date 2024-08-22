<script lang="ts">
	import type { FootnoteReference } from '@djot/djot';
	let { quire }: { quire: Quire<FootnoteReference> } = $props();
	let { attributes } = $derived(quire.content);
</script>

<a id="fnref-{quire.content.text}" href="#fn-{quire.content.text}"
	><sup {...attributes}>{quire.content.text}</sup></a
>
