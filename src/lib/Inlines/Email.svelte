<script lang="ts">
	import type { Email } from '@djot/djot';
	let { quire }: { quire: Quire<Email> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<a {...attributes} href="mailto:{text}" {...attributes}>{text}</a>
