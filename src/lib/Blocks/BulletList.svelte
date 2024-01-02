<script lang="ts">
	import type { BulletList } from 'src/types/ast';
	import Block from '$lib/Block.svelte';
	export let quire: Quire<BulletList>;
	const { attributes, children, pos } = quire.content;
</script>

<ul {...attributes}>
	{#each children as li}
		<li>
			{#each li.children as child}
				<Block quire={{ ...quire, content: child }} />
			{/each}
		</li>
	{/each}
</ul>
