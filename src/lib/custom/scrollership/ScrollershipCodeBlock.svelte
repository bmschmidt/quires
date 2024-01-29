<script lang="ts">
	import yaml from 'js-yaml';

	import type { CodeBlock } from '$lib/types/ast.d.ts';
	import type { QuireInScroller } from './utils';

	export let quire: QuireInScroller<CodeBlock>;

	let code = quire.content.text;
	let args: Record<string, any> | null = null;

	$: {
		try {
			args = yaml.load(code) as Record<string, any>;
		} catch (e) {
			args = null;
		}
	}

	let div: Node;

	// keep call up-to-date with the code
	$: {
		if (div) {
			quire.custom['codeNodes'] = quire.custom['codeNodes'] ?? new Map<Node, Record<string, any>>();
			quire.custom['codeNodes'].set(div, args || {});
		}
	}

	$: editmode = false;
	$: editcode = '';
	function enter_editmode() {
		editcode = code;
		editmode = true;
	}
	//  const DropinType = CustomType ?? CodeBlock
</script>

<details bind:this={div}>
	<summary style="user-select:none;"> Edit Code </summary>
	<button style="width:100%" on:click={enter_editmode} class:hidden={editmode}>Edit Code</button>

	<!-- TODO -- pre click violates A11y rules, fix -->
	<pre class:hidden={editmode} {...quire.content.attributes}><code>{code}</code></pre>

	<textarea bind:value={editcode} class:hidden={!editmode} />
	<button
		class:hidden={!editmode}
		on:click={() => {
			// code = editcode;
			editmode = false;
			code = editcode;
		}}>Save and Apply Edits</button
	>
</details>
{#if false}
	<slot />
{/if}

<style>
	textarea {
		width: 100%;
		height: 250px;
		font-family: 'Courier New', Courier, monospace;
	}
	pre,
	code {
		white-space: pre-wrap;
	}
	pre:hover {
		background-color: bisque;
	}
	.hidden {
		display: none;
	}
</style>
