<script lang="ts">
	export let settings;
	export let target;
	export let api = {};
	export let min = 0;
	export let max = 1;
	export let step = 0.01;
	export let trans: 'linear' | 'log' | 'sqrt' = 'linear';
	export let label = null;
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
		const plot = settings.controls['_plot'];
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
	{#if label}{label}: {/if}
	<input type="range" bind:value min="0" max="1" step=".001" on:input={update} />
	{Math.floor(number)}
</div>
