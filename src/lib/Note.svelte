<script>
	export let data;
	export let settings;
	if (settings._note_number === undefined) {
		settings._note_number = 1
	} else {
		settings._note_number += 1
	}
	console.log({data, settings})
	import Elements from '$lib/Elements.svelte';
</script>

<details>
<summary>
	<sup>
		<small>
		{settings._note_number}
	</small>
	</sup>
</summary>
<hr>
<aside class="note">
	<Elements {settings} elems={data} />
</aside>
<hr>
</details>
<style>
	details {
		display: inline;
	}
	aside {
		font-size: smaller;
	}
	details summary { 
		cursor: pointer;
		list-style: none;
	}
	details > summary::-webkit-details-marker {
	  display: none;
	}
	details summary > * {
		display: inline;
	}
</style>