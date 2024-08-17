<script lang="ts">
	import type { Email } from '@djot/djot';
	let { quire }: { quire: Quire<Email> } = $props();
	const { attributes, text } = quire.content;
</script>

<a {...attributes} href="mailto:{text}" {...attributes}>{text}</a>
