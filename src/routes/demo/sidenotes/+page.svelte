<script lang="ts">
	import quire from './gibbon.md';
	import Document from '$lib/Doc.svelte';
	import DetailsDiv from './DetailsDiv.svelte';
	import AsideNote from '$lib/custom/AsideNote.svelte';
	import SidenoteRef from '$lib/custom/SidenoteRef.svelte';

	let notes: 'sidenotes' | 'footnotes' = $state('footnotes');

	let overrides = $derived(
		notes === 'footnotes'
			? []
			: ([
					{
						selector: 'div.footnote-aside',
						tag: 'div',
						component: AsideNote
					},
					{
						selector: 'footnote_reference',
						tag: 'footnote_reference',
						component: SidenoteRef
					}
				] as const)
	);

	let q = $derived({
		...quire,
		// Wrap div components with a selective details element.
		quireComponents: [
			{
				selector: 'div.details',
				tag: 'div',
				component: DetailsDiv
			},
			...overrides
		]
	});
</script>

<div class="header">
	<button onclick={() => (notes = 'sidenotes')} disabled={notes === 'sidenotes'}>Sidenotes</button>
	<button onclick={() => (notes = 'footnotes')} disabled={notes === 'footnotes'}>Footnotes</button>
</div>

<div class="document">
	<Document quire={q} {notes} />
</div>

<style>
	div.header {
		left: 10px;
		top: 10px;
		display: flex;
		justify-content: center;
		position: fixed;
	}

	div.document {
		max-width: 40em;
		margin-left: auto;
		margin-right: auto;
		counter-reset: note;
		/* The padded area will hold the sidenotes */
		padding-right: min(20em, 33%);
	}
	@media (max-width: 640px) {
		/* The sidenotes are inlines less than 640px */
		div.document {
			padding-right: 0px;
		}
	}
</style>
