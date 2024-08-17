<script lang="ts">
	import type { RawBlock } from '@djot/djot';
	let { quire }: { quire: Quire<RawBlock> } = $props();
	const { format, text, attributes, pos } = quire.content;
</script>

{#if format === 'html'}
	<div>
		{@html text}
	</div>
{:else}
	<!--{text}-->
{/if}
