<script>
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
</script>

<div class="note">
	<Elements {settings} elems={data} />
</div>
