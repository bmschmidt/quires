<script lang="ts">
	import BasicStrong from '$lib/Inlines/Strong.svelte';
	import BasicEmph from '$lib/Inlines/Emph.svelte';
	import type { Strong, Emph } from '$lib/types/ast.d.ts';
	import type { QuireComponent } from '$lib/types/quire.d.ts';

	export let quire: Quire<Strong>;

	let component: QuireComponent<Strong | Emph> = BasicStrong;
	let content = quire.content as Strong | Emph;
	if (content.children.length === 1 && content.children[0].tag === 'strong') {
		content = content.children[0];
		component = BasicEmph;
	}
</script>

<svelte:component this={component} quire={{ ...quire, content }} />
