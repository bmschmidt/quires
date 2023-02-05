<script lang="ts">
	export let data;
	export let settings;
	settings;
	const [[id, classes, kv], elems] = data;
	const attrs = Object.fromEntries(kv);
	let component = null;
	const custom_els = settings['elements'] || {};

	for (let classname of classes) {
		if (custom_els[`codeblock.${classname}`]) {
			component = custom_els[`codeblock.${classname}`];
		}
	}
	console.log({ custom_els });
</script>

{#if component}
	<svelte:component this={component} {data} {settings} />
{:else}
	<pre {id} class={classes.join(' ')} {...attrs}>
		<code>
			{elems}
		</code>
	</pre>
{/if}
