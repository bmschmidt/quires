<script lang="ts">
	// Get the AST JSON.
	import quire from './history.md';
	import { browser } from '$app/environment';
	import Document from '$lib/Doc.svelte';
	import Para from './ParaObserver.svelte';
	quire.quireComponents = [['para', Para]];

	$: observed_paragraphs = 0;

	if (browser) {
		let options = {
			root: document.querySelector('#scrollArea'),
			rootMargin: '0px',
			threshold: 1.0
		};
		// This will be handled by runs, eventually.
		const observe: IntersectionObserverCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					observed_paragraphs += 1;
				}
				entry.target.dispatchEvent(
					new CustomEvent('intersection', {
						detail: entry
					})
				);
			});
		};
		quire.custom.observer = new IntersectionObserver(observe, options);
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
	<Document {quire} />
</div>
