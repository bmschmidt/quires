<script lang="ts">
	import type { CodeBlock } from '@djot/djot';
	let { quire }: { quire: Quire<CodeBlock> } = $props();
	let { attributes, text } = $derived(quire.content);
</script>

<pre {...attributes}><code>{text}</code></pre>
