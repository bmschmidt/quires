<script lang="ts">
	export let data;
	export let settings;

	import yaml from 'js-yaml';
	const [[id, classes, kv], orig_code] = data;
	$: code = orig_code;
	const attrs = Object.fromEntries(kv ?? []);

	let call = null;

	$: {
		try {
			call = yaml.load(code);
		} catch (e) {
			call = null;
		}
	}

	let div = undefined;

	const node_code = '' + Math.random();
	// keep call up-to-date with the code
	$: settings['code_nodes'].set(node_code, call || {});

	$: {
		data._scrollerly_apparatus = {
			run: function () {
				const event = new CustomEvent('plotAPI', {
					bubbles: true,
					detail: {
						call,
						node_code
					}
				});
				if (call !== null) {
					div.dispatchEvent(event);
				}
			}
		};
	}
	$: editmode = false;
	$: editcode = '';
	function enter_editmode() {
		editcode = code;
		editmode = true;
	}
	let CustomType;
	$: if (classes && classes.length && settings.controls) {
		const first_class = classes[0];
		if (settings.controls[first_class]) {
			CustomType = settings.controls[first_class];
		}
	}
	//  const DropinType = CustomType ?? CodeBlock
</script>

<details bind:this={div}>
	<summary style="user-select:none;"> Edit Code </summary>

	<pre
		on:click={enter_editmode}
		class:hidden={editmode}
		{id}
		class={classes?.join(' ')}
		{...attrs}><code>{code}</code></pre>

	<textarea bind:value={editcode} class:hidden={!editmode} />
	<button
		class:hidden={!editmode}
		on:click={() => {
			code = editcode;
			editmode = false;
			data._scrollerly_apparatus.run();
		}}>Save and Apply Edits</button
	>
</details>

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
