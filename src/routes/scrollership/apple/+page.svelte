<script lang="ts">
	import quire from './apple.md';
	// import Resizer from './_Callout_Resizer.svelte';
	import Scrollership from '$lib/custom/scrollership/ScrollershipWrapper.svelte';
	import type { PlotImportable } from '$lib/custom/scrollership/types.d.ts';

	// const controls = {
	// 	resizer: Resizer
	// };

	const scrollerAPIs: Record<string, PlotImportable> = { nori: async () => import('../nori.js') };
</script>

<Scrollership {quire} {scrollerAPIs} />
