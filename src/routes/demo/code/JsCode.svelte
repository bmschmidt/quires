<script lang="ts">
	import type { CodeBlock } from '@djot/djot';
	let { quire }: { quire: Quire<CodeBlock> } = $props();

	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import r from 'highlight.js/lib/languages/r';
	import python from 'highlight.js/lib/languages/python';
	import Run32 from 'carbon-icons-svelte/lib/Run.svelte';

	hljs.registerLanguage('javascript', javascript);

	let html = hljs.highlight(quire.content.text, { language: 'javascript' }).value;
</script>

<div style="display:flex;">
	<pre {...quire.content.attributes}>
    {@html html}
  </pre>
	<button onclick={() => eval(quire.content.text)}>
		<Run32 />
	</button>
</div>
