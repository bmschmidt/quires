<script lang="ts">
	export let api = {};
	export let settings;
	// Existing properties of the API call to keep.
	export let target;
	export let pattern = '${value}';
	export let values = [];
	export let clone: string | string[] = [];
	export let hover = null;
	export let label = null;
	import { set, get, cloneDeep } from 'lodash-es';
	import Button from './Button.svelte';
	let i = 0;
	const buttons = [];
	for (let value of values) {
		const query = cloneDeep(api);
		set(query, target, pattern.replace('${value}', value));
		buttons.push({
			label: value,
			api: query
		});
	}
</script>

<h3>{label}</h3>
<div class="buttons">
	{#each buttons as button}
		<Button {settings} api={button.api} {clone} {hover} label={button.label} />
	{/each}
</div>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 5px;
		background-color: #fff;
		cursor: pointer;
	}
	.buttons > .button {
		width: 25%;
	}
</style>
