<script lang="ts">
	import type { QuireInScroller, ScrollerDivQuire } from './utils.js';
	import Slider from './Slider.svelte';
	import Button from './Button.svelte';
	import Buttonset from './Buttonset.svelte';
	import ScrollershipChunk from './ScrollershipChunk.svelte';
	import ScrollershipCodeBlock from './ScrollershipCodeBlock.svelte';
	import { QuireObserver } from '$lib/quireObserver.svelte.js';
	import Block from '$lib/Block.svelte';
	import type { Div as TDiv } from '@djot/djot';
	import type { QuireOverride } from '$lib/types/quire.js';
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

	// Elements that will be populated in the browser.
	let backdrop: HTMLDivElement | undefined = $state(undefined);
	let scrolling_div: HTMLDivElement | undefined = $state(undefined);
	let observer: QuireObserver | undefined = $state(undefined);
	let newQuire: QuireInScroller<TDiv> | undefined = $state({
		...quire,
		quireComponents: [...quire.quireComponents, ...components] as QuireOverride[]
	});

	const position = 'left';

	let error: string | undefined = $state(undefined);
	let scrollerType = $derived(quire.content.attributes!['scroller-type']);
	$effect(() => {
		// This stuff only works in the browser right now.
		return;
		if (!error && typeof window !== 'undefined' && scrollerType) {
			const API = quire.custom!.scrollerAPIs[scrollerType!];
			if (backdrop === undefined) {
				throw new Error('huh');
			}
			// All reactivity is handled in the cells.
			observer = new QuireObserver({ api: API, backdrop });
			// a list of all the nodes and their associated
			newQuire = {
				...quire,
				quireComponents: [...quire.quireComponents, ...components] as QuireOverride[],
				custom: {
					...quire.custom,
					observer
				}
			};
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
				<Block quire={{ ...newQuire, content: child }}></Block>
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
