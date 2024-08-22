<script lang="ts">
	import type { Verbatim } from '@djot/djot';
	let { quire }: { quire: Quire<Verbatim> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<code {...attributes}>
	{text}
</code>
