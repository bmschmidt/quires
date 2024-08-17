# Quires

## Classy documents with Svelte and Djot

Quires is a system for creating reactive and interactive documents, built on top of [svelte](https://svelte.dev)
and [djot](https://djot.net/). These documents are "classy" because they're

## Overview

You write documents in pandoc-flavored Markdown (or in [raw djot](https://djot.net/), which is almost the same thing). If your document does not include any reactive elements, you use the base set of components that comes with the system and get the same behavior as an ordinary Markdown parser. The Svelte compiler boils it straight into raw HTML. But if you want to _change_ the way an element renders, you generate a custom svelte component that folds
in new behavior. For instance, in `djot` markup, a string `*enclosed in asterisks*` is rendered as bold. In markdown, this is rendered in italics, and `**double asterisks**` are required to render bold. To switch to the markdown behavior, we write a custom component that checks to see if a `<strong>` element is double-nested: if so, we render it as strong; otherwise as an emph.

```html
<!-- src/lib/MarkdownStrong.svelte -->
<script lang="ts">
	import BasicStrong from '$lib/Inlines/Strong.svelte';
	import BasicEmph from '$lib/Inlines/Emph.svelte';
	import type { Strong, Emph } from '@djot/djot';

	let { quire }: { quire: Quire<Strong> } = $props();

	let dtype = $derived(
		quire.content.children.length === 1 && quire.content.children[0].tag === 'strong'
			? 'strong'
			: 'emph'
	);
</script>

{#if dtype === 'strong'}
	<BasicStrong quire={{ ...quire, content: quire.content.children[0] as Strong }} />
{:else}
	<BasicEmph quire={{ ...quire, content: { ...quire.content, tag: 'emph' } }} />
{/if}
```

To implement this, we define the quire at the top level

```html
<script lang="ts">
	// src/routes/+page.svelte
	import quire from './index.md';
	import Doc from '$lib/Doc.svelte';
	import Strong from '$lib/MyStrong.svelte';
	// The quire contains both the document
	quire.quireComponents = [[{ tag: 'strong', component: Strong }]];
</script>

<Doc {quire} />
```

Note a few elements here.

1. The `quire` contains both the AST and a set of state that is passed down. These can be disassembled
   and passed to components lower down the tree, but Quire components should -- as a general rule --
   pass down all state to children that they don't explicitly alter.
2. The override set is passed in to the document creator here.

## Contingent quires

You can pass quires contingently. For this quire uses a DSL based on css selectors, parsed by the [css-what](https://github.com/fb55/css-what#readme) repo.

Most css selectors are not (yet?) supported, but class based ones are.

- `code_block`: Replaces 'code_block' elements with the custom component.
- `code_block.python`: Replaces 'code_block' elements with the language as `python` with the custom component.
  Note:
  - the language of a code block is treated as a _class_ for the purpose of selectors.
- `para#intro`: Replaces paragraphs

These behaviors can be combined.

- `para.executable code_block.js`: Encloses all `js` codeblocks that are descendants of a para element classed executable.

### Quarto compatibility

For compatibility with Quarto.

## Wrapping default behavior

Often you want to do something relatively simple, like put a button below a code block, without altering
the basic behavior of the code block itself.

This is handled using the `<slot />` property of the svelte component.

For example, take following component:

```html
<div style="color:red;">
	<slot></slot>
</div>
```

This component wraps its child with a red-colored div. It can then be used
as a wrapper around multiple different components, if desired.

```html
<script lang="ts">
	import index from './index.md';
	import Doc from '$lib/Doc.svelte';
	import { document } from '$lib/quire';
	import Warning from 'RedWrapper.svelte';
	// The quire contains both the document and the settings.
	const quire = document(index, { 'div.warning': Warning, 'para.warning': Warning });
</script>

<h1>{index.metadata.title}</h1>

<Doc {quire} />
```

Classes are (for the time being) _not_ inherited. This behavior is likely to change.
