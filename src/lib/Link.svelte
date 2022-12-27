<script>
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
	const [[_id, _classes, _attrs], elems, [url, text]] = data;
	const id = _id || '';
	const classes = _classes || [];
	const attrs = Object.fromEntries(_attrs || []);
</script>

<a {id} {...attrs} class={classes.join(' ')} href={url} title={text}
	><Elements {settings} {elems} /></a
>
