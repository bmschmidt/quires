<script lang="ts">
	import type { Footnote, Reference, Verbatim } from '@djot/djot';
	let { quire }: { quire: Quire<Verbatim> } = $props();
	const { attributes, text } = quire.content;
</script>

<code {...attributes}>
	{text}
</code>
