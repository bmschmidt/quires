<script lang="ts">
  export let data;
  export let settings;

  const [[id, classes, kv], elems] = data;
  const attrs = Object.fromEntries(kv);

</script>

<pre id="{id}" class="{classes.join(" ")}" {...attrs}><code>
  {elems}
</code></pre>
