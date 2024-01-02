<script lang="ts">
	/* pandoc-svelte-component boilerplate */
	export let quire: Quire<Code>;
	/* end component boilerplate */

	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import r from 'highlight.js/lib/languages/r';
	import python from 'highlight.js/lib/languages/python';
	import Run32 from 'carbon-icons-svelte/lib/Run.svelte';
	import CodeBlock from '$lib/Blocks/CodeBlock.svelte';

	hljs.registerLanguage('python', python);

	let html = hljs.highlight(quire.content.text, { language: 'python' }).value;

	function indent() {
		html = html
			.split('\n')
			.map((x) => '  ' + x)
			.join('\n');
	}
	function unindent() {
		html = html
			.split('\n')
			.map((x) => x.replace(/^  /, ''))
			.join('\n');
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
