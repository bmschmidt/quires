<script lang="ts">
	/**
	 * A component for rendering an image as a figure with caption.
	 */
	import type { Image } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	import { getStringContent } from '$lib/djot.js';

	let { quire }: { quire: Quire<Image> } = $props();

	const { destination } = $derived(quire.content);
	const title = $derived(
		[...quire.content.children].map((inline) => getStringContent(inline)).join('')
	);
</script>

<figure {...quire.content.attributes}>
	<img alt={title} src={destination} />
	<figcaption>
		{#each [...quire.content.children] as child}
			<Inline quire={{ ...quire, content: child }} />
		{/each}
	</figcaption>
</figure>
