<script>
	// This code doesn't distinguish between inlines and blocks. I'm sure that
	// will eventually become an issue, but for now it works.

	export let elems;
	export let settings;

	import Header from '$lib/Header.svelte';
	import Str from '$lib/Str.svelte';
	import Para from '$lib/Para.svelte';
	import Quoted from '$lib/Quoted.svelte';
	import Note from '$lib/Note.svelte';
	import Link from '$lib/Link.svelte';
	import Strong from '$lib/Strong.svelte';
	import Emph from '$lib/Emph.svelte';
	import OrderedList from '$lib/OrderedList.svelte';
	import BulletList from '$lib/BulletList.svelte';
	import Cite from '$lib/Cite.svelte';
	import Code from '$lib/Code.svelte';
	import Div from '$lib/Div.svelte';
	import CodeBlock from '$lib/CodeBlock.svelte';
	import Span from '$lib/Span.svelte';
	import Superscript from '$lib/Superscript.svelte';
	import Table from '$lib/Table.svelte';
	import BlockQuote from '$lib/BlockQuote.svelte';
	import Image from '$lib/Image.svelte';
	import RawBlock from '$lib/RawBlock.svelte';
	import RawInline from '$lib/RawInline.svelte';
	import Underline from '$lib/Underline.svelte';

	// The base types.
	const types = {
		Header,
		Str,
		Para,
		Quoted,
		Note,
		Link,
		Strong,
		Emph,
		OrderedList,
		BulletList,
		Cite,
		Div,
		Code,
		CodeBlock,
		Span,
		Superscript,
		Table,
		BlockQuote,
		Image,
		RawBlock,
		RawInline,
		Underline
	};

	// Any user-passed overrisdes.
	const elements = { ...types, ...(settings.elements || {}) };
</script>

{#if elems}
	{#each elems as data}
		{#if data['t'] == 'SoftBreak'}
			{' '}
		{:else if types[data['t']]}
			<svelte:component this={elements[data['t']]} data={data['c']} {settings} />
		{:else if data['t'] == 'Space'}
			{' '}
		{:else if data['t'] == 'LineBreak'}
			<br />
		{:else if data['t'] == 'HorizontalRule'}
			<hr />
		{:else if data['t'] == 'Plain'}
			<svelte:self elems={data['c']} {settings} />
		{:else}
			{console.error('Unknown element type:', data['t'])}
			<p>
				XXX--UNIMPLEMENTED PANDOC TYPE--{data['t']}
				{JSON.stringify(data['c'])}XXX
			</p>
		{/if}
	{/each}
{/if}
