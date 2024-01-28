<script lang="ts">
	import type { Image } from '$lib/types/ast.d.ts';
	import { getStringContent } from '$lib/djot';
	export let quire: Quire<Image>;
	const { destination } = quire.content;
	const title = quire.content.children.map((inline) => getStringContent(inline)).join('');
</script>

<img alt={title} src={destination} {...quire.content.attributes} />
