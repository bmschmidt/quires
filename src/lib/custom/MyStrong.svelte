<!-- src/lib/MarkdownStrong.svelte -->
<script lang="ts">
	import BasicStrong from '$lib/Inlines/Strong.svelte';
	import BasicEmph from '$lib/Inlines/Emph.svelte';
	import type { Strong, Emph } from '@djot/djot';

	let { quire }: { quire: Quire<Strong> } = $props();

	let dtype = $derived(
		quire.content.children.length === 1 && quire.content.children[0].tag === 'strong'
			? 'strong'
			: 'emph'
	);
</script>

{#if dtype === 'strong'}
	<BasicStrong quire={{ ...quire, content: quire.content.children[0] as Strong }} />
{:else}
	<BasicEmph quire={{ ...quire, content: { ...quire.content, tag: 'emph' } as Emph }} />
{/if}
