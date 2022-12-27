<script>
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
	const [{ t: quotetype }, elems] = data;
	let open = '“';
	let close = '”';
	if (quotetype == 'SingleQuote') {
		open = '‘';
		close = '’';
	}
</script>

{open}<Elements {settings} {elems} />{close}
