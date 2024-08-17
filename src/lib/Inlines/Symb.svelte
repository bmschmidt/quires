<script lang="ts">
	import type { Symb } from '@djot/djot';
	let { quire }: { quire: Quire<Symb> } = $props();
	// Not shown, in accordance with djot practice.
	// Surrounding a word with : signs creates a “symbol,” which by default is just rendered literally but may be treated specially by a filter. (For example, a filter could convert symbols to emojis. But this is not built into djot.)
</script>

{quire.content.alias}
