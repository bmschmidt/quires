<script lang="ts">
	import type { CodeBlock } from '$lib/types/ast';

	export let quire: Quire<CodeBlock>;

	import yaml from 'js-yaml';

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
	//	let triggerNode: Node;
	$: {
		if (div) {
			quire.custom = quire.custom ?? {};
			quire.custom['codeNodes'] =
				quire.custom['codeNodes'] ?? new Map<string, Record<string, any>>();
			quire.custom['codeNodes'].set(div, args || {});
		}

		//		triggerNode = quire.custom?.triggerNode || div;
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

	<pre on:click={enter_editmode} class:hidden={editmode} {...quire.content.attributes}><code
			>{code}</code
		></pre>

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
