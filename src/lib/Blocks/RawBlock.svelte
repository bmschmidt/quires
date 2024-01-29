<script lang="ts">
	import type { RawBlock } from '$lib/types/ast';
	export let quire: Quire<RawBlock>;
	const { format, text, attributes, pos } = quire.content;
</script>

{#if format === 'html'}
	<div>
		{@html text}
	</div>
{:else}
	<!--{text}-->
{/if}
