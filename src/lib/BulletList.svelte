<script lang="ts">
	import type { n } from 'src/global';
	export let data: n.NodeType.BulletList;
	export let settings;
	import Elements from '$lib/Elements.svelte';
</script>

<ul>
	{#each data as datum}
		<li>
			<Elements {settings} elems={datum} />
		</li>
	{/each}
</ul>
