<script lang="ts">
	import type { DoubleQuoted } from '@djot/djot';
	import Inline from '$lib/Inline.svelte';
	let { quire }: { quire: Quire<DoubleQuoted> } = $props();
</script>

“{#each quire.content.children as child}
	<Inline quire={{ ...quire, content: child }} />{/each}”
