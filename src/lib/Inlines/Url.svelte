<script lang="ts">
	import type { Url } from '@djot/djot';
	let { quire }: { quire: Quire<Url> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<a {...attributes} href={text}>{text}</a>
