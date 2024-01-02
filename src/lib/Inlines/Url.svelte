<script lang="ts">
	import type { Url } from '../types/ast';
	export let quire: Quire<Url>;
	const { attributes, text } = quire.content;
</script>

<a {...attributes} href={text} {...attributes}>{text}</a>
