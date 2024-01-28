<script lang="ts">
	import quire from './index.md';
	import Doc from '$lib/Doc.svelte';
	import '/src/routes/app.css';
</script>

<h1>{quire.metadata!.title}</h1>

<Doc {quire} />
