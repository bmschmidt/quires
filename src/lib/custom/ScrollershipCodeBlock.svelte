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
  $: editmode = false;
  $: editcode = '';
  function enter_editmode() {
    editcode = code;
    editmode = true;
  }
</script>

<details bind:this={div}>
  <summary style="user-select:none;">
    Edit Code
  </summary>


  <pre on:click={enter_editmode} class:hidden={editmode} {id} class="{classes?.join(" ")}" {...attrs}
  ><code>{code}</code></pre>


  <textarea bind:value={editcode} class:hidden={!editmode} />
  <button class:hidden={!editmode} on:click={() => {
    code = editcode;
    editmode = false;
    data._scrollerly_apparatus.run();
  }}>Save and Apply Edits</button>

</details>

<style>
  textarea {
    width: 100%;
    height: 250px;
  }
  pre, code {
    white-space: pre-wrap;
  }
  pre:hover {
    background-color: bisque;
  }
  .hidden {
    display: none;
  }
</style>


