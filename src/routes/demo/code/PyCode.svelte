<script lang="ts">
	import type { CodeBlock } from '$lib/types/ast.d.ts';
	export let quire: Quire<CodeBlock>;

	import hljs from 'highlight.js/lib/core';
	import python from 'highlight.js/lib/languages/python';
	hljs.registerLanguage('python', python);

	console.log(quire.content.text);
	let html = hljs.highlight(quire.content.text, { language: 'python' }).value;

	console.log({ html });
	function indent() {
		html = html
			.split('\n')
			.map((x) => '  ' + x)
			.join('\n');
	}
	function unindent() {
		const lines = html.split('\n');

		if (lines.filter((x) => !x.startsWith('  ')).length) {
			// Can't indent any farther!
			return;
		}
		html = lines.map((x) => x.replace(/^  /, '')).join('\n');
	}
</script>

<div style="display:flex;">
	<div style="display:flex;flex-direction: column;">
		<button on:click={indent}> {'>'} </button>
		<button on:click={unindent}>
			{'<'}
		</button>
	</div>
	<pre {...quire.content.attributes}>
    {@html html}
  </pre>
</div>
