<script lang="ts">
	import type { RawInline } from '@djot/djot';
	let { quire }: { quire: Quire<RawInline> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<code {...attributes}>{text}</code>
