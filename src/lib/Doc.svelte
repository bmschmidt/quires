<script lang="ts">
	import type { Doc } from './types/ast';
	import Block from './Block.svelte';
	export let quire: Quire<Doc>;
	quire.footnotes = quire.content.footnotes;
	quire.references = quire.content.references;
	if (quire.content.attributes?.class) {
		quire.classes = new Set(
			...quire.classes.values(),
			...quire.content.attributes.class.split(' ')
		);
	}

	if (!quire.quireComponents) {
		throw new Error('Cannot nest Quire components');
	}
</script>

<div class="quire-document" {...quire.content.attributes}>
	{#each quire.content.children as child}
		<Block quire={{ ...quire, content: child }} />
	{/each}

	{#if Object.keys(quire.content.footnotes).length}
		<hr />
		<ol>
			{#each Object.keys(quire.content.footnotes) as footnote}
				<li id="fn-{footnote}">
					{#each quire.content.footnotes[footnote].children as child}
						<Block quire={{ ...quire, content: child }} />
					{/each}
					<a href="#fnref-{footnote}">↩</a>
				</li>
			{/each}
		</ol>
	{/if}
</div>
