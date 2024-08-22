<script lang="ts">
	import type { RawBlock } from '@djot/djot';
	let { quire }: { quire: Quire<RawBlock> } = $props();
	let { format, text, attributes, pos } = $derived(quire.content);
</script>

{#if format === 'html'}
	<div {...attributes}>
		{@html text}
	</div>
{:else}
	<pre {...attributes} class:{format}={true}>
		{text}
	</pre>
{/if}
