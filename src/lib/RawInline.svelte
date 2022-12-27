<script lang='ts'>
  export let data;
  export let settings;
  const _ = settings;
  const [lang, code] = data;
</script>

{#if lang === 'html'}
  <span>
    {@html code}
  </span>
{:else}
  <span class="{lang}">
    {lang}
  </span>
{/if}