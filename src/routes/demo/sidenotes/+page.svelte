<script>
	import doc from './gibbon.md';
	import Document from '$lib/Document.svelte';
	import Sidenote from '$lib/Sidenote.svelte';
	const settings = {
		elements: {
			Note: Sidenote
		}
	};
</script>

<div class="document">
	<Document ast={doc.document} {settings} />
</div>

<style>
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
