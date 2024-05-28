<script lang="ts">
	import type { QuireInScroller, ScrollerDivQuire } from './utils.js';
	import { onMount } from 'svelte';
	import Slider from './Slider.svelte';
	import Button from './Button.svelte';
	import Buttonset from './Buttonset.svelte';
	import ScrollershipChunk from './ScrollershipChunk.svelte';
	import ScrollershipCodeBlock from './ScrollershipCodeBlock.svelte';
	import { nodeSort } from './utils.js';
	import type { UpdateablePlot, PlotConstructor, PlotImportable } from './types.d.ts';
	import QuireObserver from '$lib/quireObserver.js';
	import Block from '$lib/Block.svelte';
	import Div from '$lib/Blocks/Div.svelte';

	// These are the core components for a scrollership document.
	// They get inserted into the tree here.
	const components = [
		{ tag: 'div', selector: '.chunk', component: ScrollershipChunk },
		{ tag: 'code_block', selector: '.api', component: ScrollershipCodeBlock },
		{ tag: 'code_block', selector: '.slider', component: Slider },
		{ tag: 'code_block', selector: '.button', component: Button },
		{ tag: 'code_block', selector: '.buttonset', component: Buttonset }
	] as const;

	let { quire }: { quire: ScrollerDivQuire } = $props();

	// The intersection observer we'll create here if it's a browser.

	// The list of nodes and their associated code we'll create here if it's a browser.
	let codeNodes: Map<Node, Record<string, any>> = $state(new Map());

	let backdrop: HTMLDivElement;
	let scrolling_div: HTMLDivElement;

	// TODO: Make configurable
	const observer_options = {
		// from https://webdesign.tutsplus.com/tutorials/how-to-intersection-observer--cms-30250
		root: null, // relative to document viewport
		rootMargin: '-20% 20px -40% 40px', // Must intersect near-ish the top.
		threshold: 0.01 // visible amount of item shown in relation to root
	};

	let lastPlotted: Node | undefined = $state(undefined);
	let observer: QuireObserver | undefined = $state(undefined);
	let _plot: UpdateablePlot | undefined = $state(undefined);

	let newQuire: QuireInScroller<Div> = $derived({
		...quire,
		quireComponents: [...quire.quireComponents, ...components],
		custom: {
			...quire.custom,
			codeNodes,
			observer,
			_plot
		}
	});

	const plotFunction = $derived(
		async (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			const quire = newQuire;
			let nodesAndCodes = [...codeNodes!].map(([node, code]) => ({
				node,
				code
			}));
			if (!quire.custom!['_plot']) {
				console.warn('No plot API found.');
				return;
			}
			let needs_plotting: Node[] = [];
			if (nodesAndCodes.length === 0) {
				return;
			}
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target !== lastPlotted) {
						needs_plotting.push(entry.target);
					}
				}
			});

			// Recalculate the index in case the list of nodes has changed.
			let lastNodeIndex =
				lastPlotted !== undefined ? nodesAndCodes.findIndex((n) => n.node === lastPlotted) : -1;
			nodesAndCodes = nodeSort(nodesAndCodes);

			if (needs_plotting.length === 0) {
				return;
			}
			// If multiple nodes have become visible, it's the last one
			// that determines what's plotted.

			let currentPlotIndex = needs_plotting
				// n is the div node, but nodes and codes is the `details` created
				// from the code plot.
				.map((n) => nodesAndCodes.findIndex((nc) => n.contains(nc.node)))
				.sort()
				.reverse()[0];

			const direction = currentPlotIndex > lastNodeIndex ? 1 : -1;

			for (let i = lastNodeIndex + direction; i !== currentPlotIndex + direction; i += direction) {
				const { node } = nodesAndCodes[i];
				let { code } = nodesAndCodes[i];
				if (i !== currentPlotIndex) {
					// reduce transition times or something???
				}
				console.log({ node, code });
				await (quire.custom!['_plot']! as UpdateablePlot).plotAPI(code);
				lastPlotted = node;
			}
			console.log('Done here');
		}
	);

	const position = 'left';

	let error: string | undefined = $state(undefined);
	let scrollerType = $derived(quire.content.attributes!['scroller-type']);
	$inspect(scrollerType);
	// $inspect({
	// 	with: function () {
	// 		if (!quire.content.attributes) {
	// 			error = 'No attributes on scrollership div.';
	// 		} else if (!quire.content.attributes!['scroller-type']) {
	// 			error = 'No scroller-type attribute on scrollership div.';
	// 		} else {
	// 			scrollerType = quire.content.attributes['scroller-type'];
	// 			console.log(quire.custom.scrollerAPIs);
	// 			if (!quire.custom.scrollerAPIs[scrollerType]) {
	// 				error = `No scroller API for ${scrollerType}: ${JSON.stringify(quire.custom.scrollerAPIs)}`;
	// 			} else {
	// 			}
	// 		}
	// 	}
	// });
	let plot: UpdateablePlot;
	$effect(() => {
		console.log('EFFECT');
		// This stuff only works in the browser right now.
		if (!error && typeof window !== 'undefined' && scrollerType) {
			let api: PlotConstructor;
			const API = quire.custom!.scrollerAPIs[scrollerType!];
			console.log({ API, customs: quire.custom!.scrollerAPIs, scrollerType });
			async function run() {
				if (API.constructor.name === 'AsyncFunction') {
					api = await (API as () => Promise<{ default: PlotConstructor }>)().then((d) => d.default);
				} else {
					api = API as unknown as PlotConstructor;
				}
				plot = new api();
				plot.bind(backdrop);

				// @ts-ignore
				window.plot = plot;
				_plot = plot;
			}
			run().then((d) => {
				console.log('ATTACHING');
				// All reactivity is handled in the cells.
				observer = new QuireObserver(plotFunction, observer_options);
				// a list of all the nodes and their associated
			});
			// Overwrite for regeneration.
		}
	});

	let hiddenNarrative = false;
</script>

{#if error}
	<div class="error">{error}</div>
{:else}
	<div class="scrollership">
		<div class="vizpanel">
			<div bind:this={backdrop} id="panel"></div>
		</div>
		<div bind:this={scrolling_div} class="narrative {position}" class:slidden={hiddenNarrative}>
			{#each quire.content.children as child}
				<Block quire={{ ...newQuire, content: child }} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.vizpanel {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
	}

	#panel {
		position: fixed;
		top: 0px;
		width: 100%;
		height: 100%;
	}

	.narrative {
		font-family: 'Minion Pro', 'Libre Baskerville', Baskerville, 'Baskerville Old Face',
			'Hoefler Text', Garamond, 'Times New Roman', serif;
		align-items: center;
		max-width: 100vw;
		padding-top: 30vh;
		padding-bottom: 90vh;
		left: 0vw;
		top: 0vw;
		position: relative;
		transition: all 1s ease-in-out;
		background-color: rgba(255, 255, 255, 0.025);
	}

	.narrative.center {
		width: 50vw;
		margin-left: 0vw;
		margin-right: 0vw;
		padding-left: 25vw;
		padding-right: 25vw;
		margin-bottom: 90vh;
		background-color: rgba(255, 0, 255, 0.525);
	}

	.narrative.slidden {
		left: -100vw;
	}

	.narrative.center {
		max-width: 100vw;
		padding-left: 25vw;
		padding-right: 25vw;
	}

	.narrative.left {
		z-index: 10;
		align-items: center;
		max-width: 45vw;
		padding-left: 2.5vw;
		padding-right: 2.5vw;
		margin-bottom: 0pt;
		position: relative;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.narrative::before {
		content: '';
	}

	.narrative::after {
		margin-top: 90vh;
		content: '';
	}
</style>
