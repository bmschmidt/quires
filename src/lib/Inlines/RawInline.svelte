<script lang="ts">
	import type { RawInline } from '@djot/djot';
	let { quire }: { quire: Quire<RawInline> } = $props();
	const { attributes, text } = quire.content;
	const classes = attributes?.class;
</script>

<code {...attributes} class={classes}>{text}</code>
