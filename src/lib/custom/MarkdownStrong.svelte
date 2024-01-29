<!-- src/lib/MyStrong.svelte -->
<script lang="ts">
	import BasicStrong from '$lib/Inlines/Strong.svelte';
	import BasicEmph from '$lib/Inlines/Emph.svelte';
	import type { Strong, Emph } from '$lib/types/ast.d.ts';

	export let quire: Quire<Strong>;
	let content: Strong | Emph;
	if (quire.content.children.length === 1 && quire.content.children[0].tag === 'strong') {
		content = {
			tag: 'strong',
			attributes: quire.content.attributes,
			children: quire.content.children[0].children
		} as Strong;
	} else {
		content = {
			tag: 'emph',
			attributes: quire.content.attributes,
			children: quire.content.children
		} as Emph;
	}
</script>

{#if content.tag === 'strong'}
	<BasicStrong quire={{ ...quire, content }} />
{:else}
	<BasicEmph quire={{ ...quire, content }} />
{/if}
