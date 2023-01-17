<script>
	export let ast;
	export let settings = {};
	import Meta from '$lib/Meta.svelte';
	import Elements from '$lib/Elements.svelte';
</script>

{#if ast['meta']}
	<Meta data={ast['meta']} />
{/if}

{#if ast['blocks']}
	<Elements elems={ast['blocks']} {settings} />
{:else}
	<span>
		ERROR: Passed a pandoc document without 'blocks.'
		{JSON.stringify(ast)}
	</span>
{/if}
