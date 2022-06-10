<script lang="ts">

  interface scrollingship {
    bind:(node: HTMLElement) => void;
    plotAPI: (call : Record<string, any>) => void;
  }

  type Scroller = () => scrollingship;

  export let query;
  export let ast;
  export let settings = {};
  export let API : (() => Promise<Scroller>) | Scroller;
  export let observer_options = {
    // from https://webdesign.tutsplus.com/tutorials/how-to-intersection-observer--cms-30250
    root: null, // relative to document viewport 
    rootMargin: '-20% 20px -40% 40px', // Must intersect near-ish the top.
    threshold: 0.01 // visible amount of item shown in relation to root
  };

  import { browser } from '$app/env'
  import ScrollershipDiv from './ScrollershipDiv.svelte';
  import Document from '../Document.svelte';
  import { onMount } from 'svelte';

  settings['elements'] = settings['elements'] || {}
  settings['elements']['Div'] = ScrollershipDiv
  settings['code_nodes'] = new Map()
  
  if (browser) {
    settings['observer'] = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target['enter'] !== undefined) {
            entry.target['enter']()
          }
        } else {
          entry.target['exit']()
        }
      })
    }, observer_options)
  }
  let backdrop = undefined;
  let plot : scrollingship | undefined = undefined;

  let scrolling_div = undefined;
  $: queued_plots = []
  let last_plotted_code = undefined;

  onMount(async ()  => {
    let api : undefined | Scroller;
    if (browser) {
      if (API.constructor.name === 'AsyncFunction') {
        api = (await API()).default;
      } else {
        api = API;
      }
      plot = new api()  
      plot.bind(backdrop)
      for (let [code, call] of settings['code_nodes'].entries()) {
        // Plot just the first call on load
        plot.plotAPI(call)
        query = call;
        last_plotted_code = code;
        break
      }
      scrolling_div.addEventListener('plotAPI', ({detail}) => {
        if (detail['node_code']) {
          // If there are a number of them, 
          // we need to go through in order.
          const keys = [...settings['code_nodes'].keys()];
          const last_ix = keys.indexOf(last_plotted_code)
          const ix = keys.indexOf(detail['node_code']);
          for (let i = last_ix + 1; i < ix; i++) {
            const call = settings['code_nodes'].get(keys[i])
            queued_plots.push(call)
          }
        }
        // even if we did the higher-up ones.
        queued_plots.push(detail.call)
        last_plotted_code = detail['node_code']
        // trigger re-evaluation
        queued_plots = queued_plots
      })
    }
  })
  $: {
    while (queued_plots.length > 0) {
      // Plot every possibility in order,
      // but not necessarily waiting for the asynchronous calls
      // to complete.
      plot.plotAPI(queued_plots.shift())
    }
  }
</script>

<div class="scrollership">
  <div class="vizpanel">
    <div bind:this={backdrop} id="panel">

    </div>
  </div>
  <div bind:this={scrolling_div} class="narrative">
      <Document {ast} {settings}></Document>
  </div>
</div>
<style>
  
  .vizpanel {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  #panel {
    position:fixed;
    top: 0px;
    width: 100%;
    height: 100%;
  }

  .narrative {
    font-family: "Minion Pro", "Libre Baskerville", Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif
  }

  .narrative {
    z-index: 10;
    align-items: center;
    width: 60vw;
    margin-left: 20vw;
    margin-right: 20vw;
    margin-bottom: 90vh;
    position: relative;
  }

  .narrative::before {
    content: "";
  }

  .narrative::after {
    margin-top: 90vh;
    content: "";
  }

  .left-column {
    top: 0;
    background-color: red;
    width: 30%;
    min-height: 100%;
  }
  .center-column {
    width: 40%;

  }
  .right-column {
    width: 30%;
  }
    </style>