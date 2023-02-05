---
title: Importer demo.
author: Ben Schmidt
date: 2023-02-05
---

Markdown documents have different parts that we want to load into pandoc. For this, I've
implemented a custom rollup loader that runs system pandoc to load the JSON representation that `pandoc-svelte-components` consumes.

Pandoc parsing is kind of expensive (with, e.g., a blog with hundreds of posts, we don't want to spin it up and parse each time.) So I use a cache (located by default at `cache` in the project root) to hold the JSON formatted data.

Pandoc's internal syntax is also extremely wasteful with regard to spaces. It has a special element called `Space` so that the paragraph `"This too shall pass."` is
rendered internally as `{"t":"Para","c":[{"t":"Str","c":"This"},{"t":"Space"},{"t":"Str","c":"too"},{"t":"Space"},{"t":"Str","c":"shall"},{"t":"Space"},{"t":"Str","c":"pass."}]}` instead of just `{"t":"Para","c":[{"t":"Str","c":"This too shall pass."}`. The benefits of this to downstream renderers are slim.
