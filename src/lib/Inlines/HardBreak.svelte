<script lang="ts">
	import type { SoftBreak } from '@djot/djot';
	let { quire }: { quire: Quire<SoftBreak> } = $props();
	let { attributes } = $derived(quire.content);

	quire;
</script>

<br {...attributes} />
