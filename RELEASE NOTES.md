# 0.4.0

Complete rewrite and rename around package name "quires" using djot AST.

# 0.3.1

- sidenote clicking in small window modes shows/hides appropriate note.

# 0.3.0

- Add "Sidenote" component that can be a drop-in replacement for Note, with demo.

# 0.2.1

- Attempt to correct `Blockquote` to `BlockQuote`

# 0.2.0

- Added a rollup bundler using the system pandoc, so that `import README.md` allows you to directly import markdown files as JSON into svelte components.
- Support import of YAML metadata blocks that include `...` delimiter at end.
- Revamp note element to use `<details>`/`<summary>` interface by default.
- Add Gibbon text as example of footnotes-as-detail elements.
- Use the new importer for this web site.

# 0.1.1

- Start using the new class-examination strategy on codeblocks as well. This usually
  avoids the need to override a default class, instead letting it be a special case based on the class type.

# 0.1.0

- Sveltekit 1.0 compatibility!
- Started adding some additional code to silence warnings.

# 0.0.7

- Allow custom passed instances to be class specific, so that you can override just (say) `Div.slide` instead of
  overriding every case of `Div`. This is really useful!

# 0.0.6

- Update to most recent svelte-kit for builds
- Add preliminary scaffolding for built-in wasm version.

# 0.0.5

- Add RawInline and RawBlock examples
- Change export settings.

# 0.0.3

- Multiple scrollership components, including buttons, buttonsets, etc.
- Header bar with controls for toggling.

# 0.0.2

- Add fully integrated integrated example of 'scrollership' to library under scrollership elements.
- Show pandoc call in scrollership example because only having compiled
  JSON in examples doesn't give a sense of how this actually works.
- Add Newline element to core pandoc elements.

# 0.0.1

First release
