<script>
  import ast_text from '/src/demo_data/code.json?raw'
  import Document from '$lib/Document.svelte'
  import 'highlight.js/styles/atom-one-light.css'
  // Overwrite the default CodeBlock with a custom element that wraps it.
  
  import CodeBlock from './_CodeBlock.svelte'
  const ast = JSON.parse(ast_text)
  
</script>

<Document ast={ast} settings={{elements: {CodeBlock}}}/>

<style>
  :global(pre) {
    font-size: 0.8em;
    font-family: monospace;
    padding: 1em;
    margin: 1em;
    border: 1px solid #ccc;
    background: #eee;
  }
</style>