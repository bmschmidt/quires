# pandoc-svelte-components

This module provides a set of Svelte components that implement (most of) the basic Pandoc document types defined in pandoc's abstract syntax tree. The purpose is to generate rich javascript-enabled applications from pandoc documents in cases where the static-document approach of pandoc is insufficient. Some of my primary use cases for working on are when I'm a number of similar documents in Markdown, but want to:

1. [Create an IntersectionObserver instance at the top level of a document,
   and then configuring each instance of `<div>` to do something when they scroll into view.](https://bmschmidt.github.io/pandoc-svelte-components/demo/observer/)
2. [Looking at the classes on code blocks to do different things with 
   them depending on the language, such as adding copy buttons that add R-markdown brackets to just R code while js code gets executed in browser.](https://bmschmidt.github.io/pandoc-svelte-components/demo/code/)
3. If the URL for a link in a markdown file ends with 'json',
   like `![](https://iiif.archivelab.org/iiif/1985-05-compute-magazine$72/info.json)`,
   check if the JSON is a IIIF manifest. If it is, generate an OpenSeadragon viewer around the json manifest rather than a simple `<img>` tag.
4. **Scrollership**: interactive narratives driven by code. E.g., the scrolly page [here](https://bmschmidt.github.io/pandoc-svelte-components/scrollership/apple) generated directly from [this markdown file](https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/scrollership/apple.md) with code blocks implementing an API that drives Open SeaDragon.


## Why? 

### What does pandoc offer for svelte projects?

Pandoc is a program that, at its core, defines an abstracted vocabulary for representing the structure of documents intended for display.
It is by far the most powerful markdown processor out there: it also can directly consume a variety of non-markdown formats, from ipynb notebooks to epub books to docx files. Unless you write files directly as svelte components, it can be hard to use the most powerful elements of svelte--you have to muck around with `document.QuerySelector` and the like, and you lose the isolation of parts that is one of svelte's greatest charms. (This is true if you're importing HTML as well as Markdown.)

It is possible to use pandoc to render straight to flat HTML. But that gives you a static document, without the ability to manipulate individual elements. And what an 'element' is might vary for person to person; some might be adding interactivity to divs based on their classes, while others might want to add event listeners onto each individual word. (Yes, I've done this!).

Pandoc offers an abstracted, rich vocabulary for defining document elements that captures almost all the different levels of documents that tend to be authored nowadays. By adopting the pandoc AST as a document definition, it's possible to add custom behavior at any level of a document while leaving the rest of the HTML rendering the same.

In the examples here, I have files saved that hold pandoc native JSON. You'd almost never want to do this. Instead, it's likely that you'd have an endpoint that invokes pandoc from the command line on a file and outputs it (perhaps with a lua filter or two) as JSON, which you then parse in svelte. I'll post an example from my own workflow soon-ish.

### What does svelte offer for pandoc documents?

Usually, nothing. But sometimes, interactivity without bloat.

Say you want to add a button next to every `pre` block in a document that copies the code.
Using pandoc, you could manually write some HTML and event listeners inside inside a lua filter,
but then the resulting code wouldn't have access to any modules you've imported in `node`... etc.

This project is intended to work in much the same way as conventional pandoc filters, written in Haskell or
Lua, with interventions into normal rendering created by inserting custom definitions of components. But while
pandoc filters put out more pandoc JSON, this program is a dead end because the kind of interactivity it creates
are highly browser-specific: while I call it 'HTML', really the svelte components here are rendering each pandoc block and inline elements
as DOM elements with attached event listeners.

Svelte--to my limited understanding--is better suited for this than React or another web framework because svelte is more of a compiler than a conventional framework.
It reads `.svelte` files--which are basically like HTML files with reactive templating--and outputs compiled HTML with event listeners, 
styles, etc. So while conceptually every `<li>` and even `Space` is a separate component, at actual render-time all that complexity has 
been stripped away.

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

You probably don't this just for simple, static redefinitions like changing header levels are better handled
through pandoc filters--I tend to write them in lua because it's fastest and 
cleanest, but ES monoglots can use [https://github.com/mathematic-inc/node-pandoc-filter].

It's more suited for cases where you need to execute javascript code in the browser in a way
that depends on the structure or content of markdown blocks.

# Caveats

## Unimplemented classes.

This is early stage: I need this for a few projects but it is incomplete in its implementation. I do not yet have a list of fundamental pandoc types that are not implemented.

## Unsafe types.

In addition, it does not full for example, it does not reliably assign all attributes and classes on tables, images, etc from pandoc; instead, it silent drops them.

I'm slowly filling it out as I need things unless I hear that other people need them, too.

## Borrowed code.

For the time this includes type definitions from
[https://github.com/mathematic-inc/node-pandoc-filter] in `src/types`. Once those have been fully updated to pandoc 1.22, the changes will be pushed back upstream and I may add it as a dependency, or just keep the folder separately.
