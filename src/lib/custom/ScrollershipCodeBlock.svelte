<script lang="ts">
  export let data;
  export let settings;

  import yaml from 'js-yaml';

  $: [[id, classes, kv], code] = data;
  const attrs = Object.fromEntries(kv?? []);

  let call = null;
  
  $: {
    try {
      call = yaml.load(code);
    } catch (e) {
      call = null;
    }
  }

  let div = undefined;

  const node_code = '' + Math.random();
  // keep call up-to-date with the code
  $: settings['code_nodes'].set(node_code, call);

  data._scrollerly_apparatus = {
    run: function() {
      const event = new CustomEvent('plotAPI', {
        bubbles: true,
        detail: {
          call,
          node_code,
        }
      });
      div.dispatchEvent(event);
    }
  }

</script>

<details bind:this={div}>
  <summary style="user-select:none;">
    Customize
  </summary>

  <pre {id} class="{classes?.join(" ")}" {...attrs}><code>
    {code}
  </code></pre>
</details>

