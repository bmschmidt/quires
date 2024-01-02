<script lang="ts">
	import type { CodeBlock } from 'src/types/ast';
	export let quire: Quire<CodeBlock>;
	const { attributes, text, pos } = quire.content;
</script>

<pre {...attributes}><code>{text}</code></pre>
