<script lang="ts">
  // Get the AST JSON.
  import raw_doc from '/src/demo_data/observe.json?raw'
  const ast = JSON.parse(raw_doc)

  import { browser } from '$app/env'
  import Document from '$lib/Document.svelte'
  import Para from './_ObservedParagraph.svelte'
  
  $: observed_paragraphs = 0;

  let observe = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observed_paragraphs++;
        entry.target.__svandoc.visible()
      } else {
        entry.target.__svandoc.hidden()
      }
    })
  }

  const settings = { elements: {Para}, observer: undefined }
 

  if (browser) {
    let options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0
    }
    settings.observer = new IntersectionObserver(observe, options);
  }
  
</script>

<div style="position:fixed;font-family:sans-serif;">
  <div style="font-size:64px;">{observed_paragraphs}</div>
  <div>Paragraphs read so far.</div>
</div>
<div style="margin-left:15%;margin-right:15%;">
  <Document {settings} {ast} />
</div>