<script lang="ts">
	import type { NonBreakingSpace } from '@djot/djot';
	let { quire }: { quire: Quire<NonBreakingSpace> } = $props();
	// TODO: Can a NBSP really have attributes? Do we care?
	// let { attributes } = $derived(quire.content);
</script>

&nbsp;
