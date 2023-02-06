<script lang="ts">
	import { onMount } from 'svelte';
	import type { NodeContent } from '../../../types/node';
	import { setup_osd } from './_iiif';

	export let data: NodeContent['Image'];
	export let settings;

	const [attr, contents, [url, urltype]] = data;

	const [id, classes, attributes] = attr;

	const div_id = id || 'd' + Math.random().toString(36).slice(2);
	$: use_simple_image = false;
	onMount(() => {
		// This returns a promise to a function that generates an OSD viewer with annotorious.
		if (window.screen && window.screen.width < 480) {
			use_simple_image = true;
			return;
		}
		const viewer = setup_osd({
			id: div_id,
			sequenceMode: false,
			collectionMode: false,
			prefixUrl: `/pandoc-svelte-components/assets/openseadragon/images/`
		});
		const source = fetch(url).then((d) => d.json());
		Promise.all([viewer, source]).then(([osd, manifest]) => {
			osd.open({
				tileSource: url
			});
		});
	});

	// This makes a little thumbnail image.
	const imgurl = url.replace('info.json', 'full/256,/0/default.jpg');
</script>

<div id={div_id} class={classes.join(' ')} {...attributes}>
	{#if use_simple_image}
		<img id={div_id} {...attributes} src={imgurl} />
	{/if}
</div>

<style>
	div {
		width: 600px;
		height: 400px;
	}
</style>
