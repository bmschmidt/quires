<script lang="ts">
	import quire from './complex.md';
	// We use Markdown style strong and italics.
	import MarkdownStrong from '$lib/custom/MyStrong.svelte';
	quire.quireComponents = [['strong', MarkdownStrong]];
	import Document from '$lib/Doc.svelte';
</script>

<Document {quire} />
