<script lang="ts">
	import type { InlineMath } from '@djot/djot';
	let { quire }: { quire: Quire<InlineMath> } = $props();
	const { attributes, text } = quire.content;
	const classes = attributes?.class ? attributes.class + ' math inline' : 'math inline';
</script>

<span {...attributes} class={classes}>{text}</span>
