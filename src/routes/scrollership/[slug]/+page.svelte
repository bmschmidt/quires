<script lang="ts">
	export let data;
	import Resizer from './_Callout_Resizer.svelte';
	import Scrollership from '$lib/custom/scrollership/ScrollershipWrapper.svelte';

	// Can return a promise for a constructor to avoid conflicts on
	// browser-only modules.
	const controls = {
		resizer: Resizer
	};
	const API = async () => import('$lib/../scrollership/nori.js');
</script>

<Scrollership position="left" {controls} {API} ast={data.document} />
