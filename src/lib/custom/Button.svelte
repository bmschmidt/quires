<script lang="ts">
  export let settings;
  export let api = {};
  // Existing properties of the API call to keep.
  export let clone : string | string[] = [];
  export let hover = null;
  export let label = null;
  export let labels = [];
  import { set, get } from 'lodash-es'


  function update() {
    const plot = settings.controls['_plot']
    if (plot) {
      const call = {}
      let clonelist = []
      if (typeof(clone) === 'string') {
        clonelist = [clone]
      } else {
        clonelist = [...clone]
      }
      for (let key of clonelist) {
        set(call, key, get(plot.query, key))
        console.log("cloning", key)
      }
      for (let [key, value] of Object.entries(api)) {
        set(call, key, value)
      }
      plot.plotAPI(call)
    }
  }
</script>
<div class="button" on:click={update}>
{label}
</div>

<style>
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;
}
.button:hover {
  background-color: #eee;
}
</style>