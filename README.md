# Quires

## Classy web documents with Svelte and Djot

Quires is a system for creating reactive and interactive documents from Markdown, built on top of [Svelte](https://svelte.dev)
and [djot](https://djot.net/), the new parser from the creator of [Pandoc](https://pandoc.org), [John MacFarlane](https://github.com/jgm)
These documents are "classy" because they use HTML syntax
overriding elements based on class and other HTML attributes; you can set codeblocks of one class to do certain types of things.

Because Svelte and Svelte-kit make it easy to generate static web pages, you can use Quires to build classic static sites just like something that compiles markdown to HTML; out of the box, this is basically all it does! But by overriding components, you can add all
kinds of useful web interactions on top of your documents.

Quires also includes a webpack parser for djot. Putting markdown into your files is easy:

```
<script>
  import doc from 'myfile.md'`;
  import { Document} from 'quires';
</script>

<Document quire={doc}>
```

## Overview

You write documents in pandoc-flavored Markdown (or in [raw djot](https://djot.net/), which is almost the same thing). If your document does not include any reactive elements, you use the base set of components that comes with the system and get the same behavior as an ordinary Markdown parser. The Svelte compiler boils it straight into raw HTML. But if you want to _change_ the way an element renders, you can generate a custom svelte component that folds
in new behavior.

For instance, in the preceding paragraph I said djot is "almost the same thing" as markdown. But there's one really important difference: in `djot` markup, a string `*enclosed in asterisks*` is rendered as bold. Whereas in markdown, this is rendered in italics, and `**double asterisks**` are required to render bold. To switch to the markdown behavior, we write a custom component that checks to see if a `<strong>` element is double-nested: if so, we render it as strong; otherwise as an emph.

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
	quire.quireComponents = [[{ tag: 'strong', selector: 'strong', component: Strong }]];
</script>

<Doc {quire} />
```

The `quire` contains both the AST and a set of state that is drilled down to its children. These can be disassembled and passed to components lower down the tree, but Quire components should -- as a general rule -- pass down all state to children that they don't explicitly alter.

## Contingent quires

You can pass quires that only override some versions of components. For this quire uses a DSL based on css selectors, parsed by the [css-what](https://github.com/fb55/css-what#readme) repo.

Most css selectors are not (yet?) supported, but class based ones are.

- `code_block`: Replaces 'code_block' elements with the custom component.
- `code_block.python`: Replaces 'code_block' elements with the language as `python` with the custom component.
  Note:
  - the language of a code block is treated as a _class_ for the purpose of selectors.
- `para#intro`: Replaces paragraphs with the id "#intro"

These behaviors can be combined.

- `para.executable code_block.js`: Encloses all `js` codeblocks that are descendants of a para element classed executable.


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
