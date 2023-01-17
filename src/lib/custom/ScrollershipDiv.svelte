<script lang="ts">
	export let data;
	export let settings;

	import Elements from '$lib/Elements.svelte';

	const [[id, classes, kv], elems] = data;
	const attrs = Object.fromEntries(kv);

</script>

<div {id} class={classes.join(' ')} {...attrs}>
	<Elements {settings} {elems} />
</div>
