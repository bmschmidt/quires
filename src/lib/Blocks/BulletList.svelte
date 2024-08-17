<script lang="ts">
	import type { BulletList } from '@djot/djot';
	import Block from '$lib/Block.svelte';
	let { quire }: { quire: Quire<BulletList> } = $props();
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
