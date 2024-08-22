<script lang="ts">
	import type { Image } from '@djot/djot';
	import { getStringContent } from '$lib/djot';
	let { quire }: { quire: Quire<Image> } = $props();
	let { destination } = $derived(quire.content);
	let title = $derived(quire.content.children.map((inline) => getStringContent(inline)).join(''));
</script>

<img alt={title} src={destination} {...quire.content.attributes} />
