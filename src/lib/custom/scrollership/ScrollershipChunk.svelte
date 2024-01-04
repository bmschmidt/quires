<script lang="ts">
	import type { Div } from '$lib/types/ast';
	export let quire: Quire<Div>;
	import { onMount } from 'svelte';
	let div = undefined;

	$: active = false;
	quire.custom!.scrollery_apparatus = [];
	function activate_block() {
		// To run a block means
		// to execute the code from each of them.
		for (let elem of elems) {
			if (elem.t == 'CodeBlock') {
				if (elem.c._scrollerly_apparatus) {
					elem.c._scrollerly_apparatus.run();
				}
			}
		}
	}

	onMount(() => {
		const { observer } = settings;
		if (observer === undefined) {
			throw new Error('observer is undefined');
		}

		div.enter = () => {
			active = true;
			activate_block();
		};
		div.exit = () => {
			active = false;
		};
		observer.observe(div);
	});
</script>

<div class:active bind:this={div} {id} class="chunk scroll-mt-36 {classes.join(' ')}" {...attrs}>
	<Elements {settings} {elems} />
</div>

<style>
	.chunk {
		outline: 1px solid grey;
		padding: 10px 30px;
		margin-top: 60vh;
		background-color: #f0f0f0;
		opacity: 0.5;
	}

	.chunk.active {
		opacity: 0.999;
	}
</style>
