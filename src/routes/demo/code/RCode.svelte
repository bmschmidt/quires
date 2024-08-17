<script lang="ts">
	import type { CodeBlock as TCodeBlock } from '@djot/djot';
	let { quire, children }: QuireArgs<TCodeBlock> = $props();
	import BaseCodeBlock from '$lib/Blocks/CodeBlock.svelte';
	import Copy32 from 'carbon-icons-svelte/lib/Copy.svelte';
	import type { QuireArgs } from '$lib/types/quire';

	let just_copied = $state(false);

	let code = quire.content.text.replaceAll(' %>%', ' |>'); // R pipe
	function copy() {
		const promise = navigator.clipboard.writeText(code);
		promise.then((d) => {
			just_copied = true;
			setTimeout(() => {
				just_copied = false;
			}, 2000);
		});
	}
</script>

<div style="display:flex; align-items:center; margin-bottom:1em;">
	{#if children}
		{@render children()}
	{/if}
	<div>
		<button onclick={copy}>
			<Copy32 />
		</button>
	</div>
	{#if just_copied}
		<p style="margin-left:15px;">Copied!</p>

		<div style="margin-left:15px;">
			<BaseCodeBlock quire={{ ...quire, content: { ...quire.content, text: code } }} />
		</div>
	{/if}
</div>
