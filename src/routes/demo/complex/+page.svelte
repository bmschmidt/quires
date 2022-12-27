<script lang="ts">
	import raw from '/src/demo_data/test_file.json?raw';
	const ast = JSON.parse(raw);
	import Document from '$lib/Document.svelte';
</script>

<Document {ast} settings={{}} />
