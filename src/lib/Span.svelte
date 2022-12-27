<script lang="ts">
	import type { NodeType } from 'src/types';
	export let data: NodeType.Span;
	export let settings;
	const [[id, classes, attrs], elems] = data;
	import { page } from '$app/stores';
	import Elements from './Elements.svelte';
</script>

<span class={classes.join(' ')} {...attrs}><Elements {settings} {elems} /> </span>
