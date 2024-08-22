<script lang="ts">
	import type { InlineMath } from '@djot/djot';
	let { quire }: { quire: Quire<InlineMath> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<span {...attributes}>{text}</span>
