<script lang="ts">
	import type { Str } from '$lib/types/ast';

	export let quire: Quire<Str>;
	const { attributes, pos, text } = quire.content;
	if (attributes) {
		console.warn('Dropping text attributes', attributes);
	}
</script>

{text}
