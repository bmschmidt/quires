<script lang="ts">
	import type { Str } from '@djot/djot';

	let { quire }: { quire: Quire<Str> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

{#if attributes}
	<span {...attributes}>{text}</span>
{:else}
	{text}
{/if}
