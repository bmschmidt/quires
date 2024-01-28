<script lang="ts">
	import type { CodeBlock } from '$lib/types/ast.d.ts';

	import { YAMLException, load } from 'js-yaml';
	export let quire: Quire<CodeBlock>;

	const { api = {}, label = null, clone = [] } = (load(quire.content.text) as ButtonArgs) || {};

	import { set, get } from 'lodash-es';
	import type { ButtonArgs, UpdateablePlot } from './types';

	function update() {
		const plot = quire.custom!._plot as UpdateablePlot;
		if (plot) {
			const call = {};
			let clonelist: string[] = [];
			if (typeof clone === 'string') {
				clonelist = [clone];
			} else if (Array.isArray(clone)) {
				clonelist = [...clone];
			}
			for (let key of clonelist) {
				set(call, key, get(plot.query, key));
				console.log('cloning', key);
			}
			for (let [key, value] of Object.entries(api)) {
				set(call, key, value);
			}
			plot.plotAPI(call);
		}
	}
</script>

<div tabindex="0" role="button" class="button" on:click={update} on:keyup={update}>
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
