<script lang="ts">
	import type { Email } from '../types/ast';
	export let quire: Quire<Email>;
	const { attributes, text } = quire.content;
</script>

<a {...attributes} href="mailto:{text}" {...attributes}>{text}</a>
