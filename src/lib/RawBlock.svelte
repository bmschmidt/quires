<script>
  export let data;
  export let settings;
  const [lang, code] = data;
</script>

{#if lang === 'html'}
  <div>
    {@html code}
  </div>
{:else}
  <div class="{lang}">
    {lang}
  </div>
{/if}