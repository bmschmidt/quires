<script lang="ts">
	import quire from './code.md';
	import Document from '$lib/Doc.svelte';
	// Overwrite the default CodeBlock with a custom element that wraps it.
	import RCodeBlock from './RCode.svelte';
	import JSCodeBlock from './JsCode.svelte';
	import PythonCodeBlock from './PyCode.svelte';
	import type { QuireComponent } from '$lib/types/quire.d.ts';
	import type { AstNode } from '$lib/types/ast';
	const quireComponents = [
		['code_block.r', RCodeBlock],
		['code_block.js', JSCodeBlock],
		['code_block.python', PythonCodeBlock]
	] as [string, QuireComponent<AstNode>][];
	quire.quireComponents = quireComponents;
</script>

This passes the custom codeblock element defined
<a
	href="https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/routes/demo/_CodeBlock.svelte"
	>here</a
>
on the markdown
<a href="https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/routes/demo/code.md"
	>here</a
>

<Document {quire} />

<style>
	:global(pre) {
		font-size: 0.8em;
		font-family: monospace;
		padding: 1em;
		margin: 1em;
		border: 1px solid #ccc;
		background: #eee;
	}
</style>
