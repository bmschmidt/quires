<script lang="ts">
	// Get the AST JSON.
	import raw_doc from './observe.json?raw';
	const ast = JSON.parse(raw_doc);

	import { browser } from '$app/environment';
	import Document from '$lib/Document.svelte';
	import Para from '../_ObservedParagraph.svelte';

	$: observed_paragraphs = 0;

	let observe = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				observed_paragraphs++;
				entry.target.__svandoc.visible();
			} else {
				entry.target.__svandoc.hidden();
			}
		});
	};

	const settings = { elements: { Para }, observer: undefined };

	if (browser) {
		let options = {
			root: document.querySelector('#scrollArea'),
			rootMargin: '0px',
			threshold: 1.0
		};
		settings.observer = new IntersectionObserver(observe, options);
	}
</script>

<div style="position:fixed;font-family:sans-serif;">
	<div style="font-size:64px;">{observed_paragraphs}</div>
	<div>Paragraphs read so far.</div>
</div>
<div style="margin-left:15%;margin-right:15%;">
	This uses the custom Para component
	<a
		href="https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/routes/demo/_ObservedParagraph.svelte"
		>here</a
	>
	on the Markdown defined
	<a href="https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/demo_data/history.md"
		>here</a
	>
	The IntersectionObserver is created externally to the svelte components,
	<a
		href="https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/routes/demo/observer.svelte"
		>here.</a
	>
	<Document {settings} {ast} />
</div>
