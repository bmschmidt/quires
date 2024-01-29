<script lang="ts">
	import type { DoubleQuoted } from '$lib/types/ast';
	import Inline from '$lib/Inline.svelte';
	export let quire: Quire<DoubleQuoted>;
</script>

“{#each quire.content.children as child}
	<Inline quire={{ ...quire, content: child }} />{/each}”
