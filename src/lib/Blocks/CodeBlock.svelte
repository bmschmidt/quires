<script lang="ts">
	import type { CodeBlock } from '@djot/djot';
	let { quire }: { quire: Quire<CodeBlock> } = $props();
	const { attributes, text, pos } = quire.content;
</script>

<pre {...attributes}><code>{text}</code></pre>
