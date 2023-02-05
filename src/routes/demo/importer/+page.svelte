<script>
	import page from './page.md';
	import Document from '$lib/Document.svelte';
	const { metadata, document } = page;
</script>

<Document ast={document} />

<hr />
This is a representation of the markdown document at `page.md` which has the title "{metadata.title}"

<h2>The metadata loaded directly from the import is:</h2>

<pre>{JSON.stringify(metadata)}</pre>
<h2>The JSON representation of the metadata *internal* to pandoc is:</h2>
<pre>
  {JSON.stringify(document.meta)}
</pre>
<h2>The JSON representation of the document is:</h2>

<pre>
{JSON.stringify(document, undefined, 2)}
</pre>
