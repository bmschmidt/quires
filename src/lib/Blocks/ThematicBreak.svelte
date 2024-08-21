<script lang="ts">
	import type { ThematicBreak } from '@djot/djot';
	let { quire }: { quire: Quire<ThematicBreak> } = $props();
	let { attributes } = $derived(quire.content);
</script>

<hr {...attributes} />
