<script lang="ts">
	/* pandoc-svelte-component boilerplate */
	export let data;
	export let settings;
	settings;
	/* end component boilerplate */

	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import r from 'highlight.js/lib/languages/r';
	import python from 'highlight.js/lib/languages/python';
	import markdown from 'highlight.js/lib/languages/markdown';
	import pqsql from 'highlight.js/lib/languages/pgsql';
	import Copy32 from 'carbon-icons-svelte/lib/Copy.svelte';
	import Run32 from 'carbon-icons-svelte/lib/Run.svelte';

	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('r', r);
	hljs.registerLanguage('sql', pqsql);
	hljs.registerLanguage('python', python);
	hljs.registerLanguage('markdown', markdown);

	const [[id, classes, kv], elems] = data;
	const attrs = Object.fromEntries(kv);
	const language: string = classes[0];
	$: html = hljs.highlight(elems, { language: language.toLowerCase() }).value;

	$: just_copied = false;
	function copy() {
		let code = elems;
		if (language === 'r') {
			code = '```{R}\n' + code + '\n```\n';
		}

		var promise = navigator.clipboard.writeText(code);
		promise.then(() => {
			just_copied = true;
			setTimeout(() => {
				just_copied = false;
			}, 2000);
		});
	}
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
	{#if language == 'r'}
		<button on:click={copy}>
			<Copy32 />
		</button>
	{/if}
	{#if language == 'python'}
		<div style="display:flex;flex-direction: column;">
			<button on:click={indent}> > </button>
			<button on:click={unindent}>
				{'<'}
			</button>
		</div>
	{/if}
	{#if language == 'R'}
		<button on:click={() => copy()}>Copy</button>
	{/if}
	{#if language === 'js'}
		<button on:click={() => eval(elems)}>
			<Run32 />
		</button>
	{/if}
	<pre {id} class={classes.join(' ')} {...attrs}>
    {@html html}
  </pre>
</div>
