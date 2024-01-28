<script lang="ts">
	import type { CodeBlock } from '$lib/types/ast.d.ts';
	import type { SliderArgs } from './types.d.ts';
	import type { QuireInScroller } from './utils.js';

	import { load } from 'js-yaml';
	export let quire: QuireInScroller<CodeBlock>;

	const raw = quire.content.text;
	const {
		api = {},
		min = 0,
		max = 1,
		target,
		trans = 'linear',
		label = null
	} = (load(raw) as SliderArgs) || {};
	import { set } from 'lodash-es';
	let value = 0.5;
	let number = min / 2 + max / 2;
	$: {
		let ratio = value;

		if (trans === 'sqrt') {
			ratio = Math.sqrt(value);
		}
		if (trans === 'log') {
			ratio = Math.pow(value, 2.718);
		}
		number = min + (max - min) * ratio;
	}

	function update() {
		const plot = quire.custom!._plot;
		console.log({ quire, plot });
		if (plot) {
			const call = {};
			for (let [key, value] of Object.entries(api)) {
				set(call, key, value);
			}
			set(call, target, number);
			plot.plotAPI(call);
		}
	}
</script>

<div>
	{#if label}{label}:
	{/if}
	<input type="range" bind:value min="0" max="1" step=".001" on:input={update} />
	{Math.floor(number)}
</div>
