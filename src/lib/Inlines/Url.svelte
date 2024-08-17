<script lang="ts">
	import type { Url } from '@djot/djot';
	let { quire }: { quire: Quire<Url> } = $props();
	const { attributes, text } = quire.content;
</script>

<a {...attributes} href={text} {...attributes}>{text}</a>
