<script>
	import quire from './gibbon.md';
	import Document from '$lib/Doc.svelte';
</script>

<div class="document">
	<Document {quire} />
</div>

<style>
	div.document {
		max-width: 40em;
		margin-left: 10em;
	}
</style>
