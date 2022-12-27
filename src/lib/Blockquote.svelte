<script>
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
</script>

<blockquote>
	<Elements elems={data} {settings} />
</blockquote>
