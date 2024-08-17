<script lang="ts">
	import type { Str } from '@djot/djot';

	let { quire }: { quire: Quire<Str> } = $props();
	const { attributes, pos, text } = quire.content;
	if (attributes) {
		console.warn('Dropping text attributes', attributes);
	}
</script>

{text}
