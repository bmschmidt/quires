<script>
	import doc from './code.md';
	import Document from '$lib/Document.svelte';
	import 'highlight.js/styles/atom-one-light.css';
	// Overwrite the default CodeBlock with a custom element that wraps it.
	const ast = doc.document;
	import CodeBlock from './CodeBlock.svelte';
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

<Document {ast} settings={{ elements: { CodeBlock } }} />

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
