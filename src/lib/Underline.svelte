<script lang="ts">
	export let data;
	export let settings;
	import Elements from '$lib/Elements.svelte';
</script>

<span style="text-decoration:underline;"><Elements {settings} elems={data} /></span>
