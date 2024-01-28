<!-- src/lib/MyStrong.svelte -->
<script lang="ts">
	import BasicStrong from '$lib/Inlines/Strong.svelte';
	import BasicEmph from '$lib/Inlines/Emph.svelte';
	import type { Strong, Emph } from '$lib/types/ast.d.ts';
	import type { QuireComponent } from '$lib/types/quire.d.ts';

	export let quire: Quire<Strong>;

	let component: QuireComponent<Emph | Strong> = BasicEmph;
	let content: Strong | Emph = quire.content;
	if (content.children.length === 1 && content.children[0].tag === 'strong') {
		content = content.children[0];
		component = BasicStrong;
	}
</script>

<svelte:component this={component} quire={{ ...quire, content }} />
