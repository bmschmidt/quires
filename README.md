# pandoc-svelte-components

This module provides a set of Svelte components that implement (most of) the basic Pandoc document types defined in pandoc's abstract syntax tree. The purpose is to generate rich javascript-enabled applications from pandoc documents in cases where the static-document approach of pandoc is insufficient. Some of my primary use cases for working on this include:

1. [Creating an IntersectionObserver instance at the top level of a document,
   and then configuring each instance of `<div>` to do something when they scroll into view.](https://bmschmidt.github.io/pandoc-svelte-components/demo/observer/)
2. [Looking at the classes on code blocks to do different things with 
   them depending on the language, such as adding copy buttons that add R-markdown brackets to just R code while js code gets executed in browser.](https://bmschmidt.github.io/pandoc-svelte-components/demo/code/)
3. If the URL for a link in a markdown file ends with 'json',
   like `![](https://iiif.archivelab.org/iiif/1985-05-compute-magazine$72/info.json)`,
   check if the JSON is a IIIF manifest. If it is, generate an OpenSeadragon viewer around the json manifest rather than a simple `<img>` tag.
  

## Status

### Unimplemented classes.

This is early stage: I need this for a few projects but it is incomplete in its implementation. I do not yet have a list of fundamental pandoc types that are not implemented.

### Unsafe types.

In addition, it does not full for example, it does not reliably assign all attributes and classes on tables, images, etc from pandoc; instead, it silent drops them.

I'm slowly filling it out as I need things unless I hear that other people need them, too.

## Why?

Pandoc is a program that, at its core, creates an abstracted vocabulary for representing the structure of documents intended for display. It is by far the most powerful markdown processor out there: it also can directly consume a variety of non-markdown formats.

It is possible to use pandoc to render straight to HTML that you put into a web page. But that gives you a static document. Say you want to add a "copy code" button next to every `pre` block in a document. Using pandoc, you could manually write some HTML inside a lua filter, but then the resulting code wouldn't have access to any modules you've imported in `node`...

This project is intended to work in much the same way as conventional pandoc filters, but with svelte components rendering each pandoc block and inline elements.

## Overriding components

Although you could use this library to render static HTML from the pandoc AST,
that would be a pretty silly thing to do, since you could just use pandoc's HTML instead.

The core uses lie in overwriting. select elements.
For most elements, the assumption is that you'll just want a basic behavior.
`# Title`, for example, will become
`<h1>Title</h1>`. But you can wrap or override any individual component
to add more complicated behavior.

As an extremely simple example, you can increase the level of
of each header in a document by wrapping the existing pandoc
AST definition like so.

```js
<script>
export let settings
export let data
const [level, meta, elems] = data;

import Header from 'pandoc-svelte/Header.svelte'
</script>

<Header data={[level + 1, meta, elems]} {settings} />
```

Simple, static redefinitions like changing header levels are better handled
through pandoc filters--I tend to write them in lua because it's fastest and 
cleanest, but ES monoglots can use [https://github.com/mathematic-inc/node-pandoc-filter].

# Borrowed code.

For the time this includes type definitions from
[https://github.com/mathematic-inc/node-pandoc-filter] in `src/types`. Once those have been fully updated to pandoc 1.22, the changes will be pushed back upstream and I may add it as a dependency.
