<script lang="ts">
	import type { InlineMath } from '../types/ast';
	export let quire: Quire<InlineMath>;
	const { attributes, text } = quire.content;
	const classes = attributes?.class ? attributes.class + ' math inline' : 'math inline';
</script>

<span {...attributes} class={classes}>{text}</span>
