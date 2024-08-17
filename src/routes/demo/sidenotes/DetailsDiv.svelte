<script lang="ts">
	import type { Div } from '@djot/djot';
	import type { Snippet } from 'svelte';
	const { quire, children }: { quire: Quire<Div>; children: Snippet } = $props();
	const { attributes } = { attributes: {}, ...quire.content };
	const classes: string[] = attributes && attributes['class'] ? attributes['class'].split(' ') : [];
</script>

<details>
	<summary>
		{#if attributes['summary']}
			{attributes['summary']}
		{/if}
	</summary>
	{@render children()}
</details>
