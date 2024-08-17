<script lang="ts">
	import { setup_osd } from './iiif.js';
	import Inline from '$lib/Inline.svelte';
	import type { Image as TImage } from '@djot/djot';
	import Image from '$lib/Inlines/Image.svelte';
	import { getStringContent } from '$lib/djot.js';
	import { browser } from '$app/environment';
	import type { QuireArgs } from '$lib/types/quire.js';
	import type OpenSeadragon from 'openseadragon';

	let { quire }: QuireArgs<TImage> = $props();

	const div_id = 'd' + Math.random().toString(36).slice(2);

	let use_simple_image = $state(false);
	const use_iiif = quire.content.destination?.endsWith('info.json');
	const url = quire.content.destination;
	if (url === undefined) {
		throw new Error('Image must have a destination');
	}

	// This makes a little thumbnail image.
	const imgurl = url.replace('info.json', 'full/256,/0/default.jpg');
	let OSD: undefined | typeof OpenSeadragon = $state(undefined);

	$effect(() => {
		if (!use_iiif || !browser) {
			return;
		}

		// This returns a promise to a function that generates an OSD viewer with annotorious.
		if (!quire.content.destination?.endsWith('info.json')) {
			use_simple_image = true;
			return;
		}
		if (window.screen && window.screen.width < 480) {
			use_simple_image = true;
			return;
		}
		const setup = setup_osd({
			id: div_id,
			sequenceMode: false,
			collectionMode: false,
			prefixUrl: `/quires/assets/openseadragon/images/`
		});
		const source = fetch(url).then((d) => d.json());
		Promise.all([setup, source]).then(([{ OSDModule, viewer }, manifest]) => {
			viewer.open({
				tileSource: url
			});
		});
	});
</script>

{#if use_iiif}
	{#if use_simple_image}
		<img
			alt={quire.content.children.map((inline) => getStringContent(inline)).join('')}
			id={div_id}
			{...quire.content.attributes}
			src={imgurl}
		/>
	{:else}
		<figure>
			<div id={div_id} {...quire.content.attributes}></div>
			<figcaption>
				{#each quire.content.children as child}
					<Inline quire={{ ...quire, content: child }} />
				{/each}
			</figcaption>
		</figure>
	{/if}
{:else}
	<Image {quire} />
{/if}

<style>
	div {
		width: 600px;
		height: 400px;
	}
</style>
