<script lang="ts">
	import type { AstNode, Doc } from '$lib/types/ast.d.ts';
	import Document from '$lib/Doc.svelte';
	import type { PlotImportable } from './types';
	export let quire: Quire<Doc>;
	export let title_features: string[] = ['copy'];
	import ScrollershipDiv from './ScrollershipDiv.svelte';
	import type { ScrollershipDocQuire } from './utils';

	export let scrollerAPIs: Record<string, PlotImportable>;
	console.log({ scrollerAPIs });
	const scrollerQuire = {
		...quire,
		custom: {
			...(quire.custom || {}),
			scrollerAPIs
		},
		quireComponents: [
			['div.scrollership', ScrollershipDiv] as const,
			...(quire.quireComponents || [])
		]
	} as ScrollershipDocQuire;

	// The location of the text components on the screen.

	// The type of the scroller can be a promise for instances that
	// require a browser mount first. This may be deprecated in the future.

	// Custom scrollership components.

	let position: 'left' | 'right' | 'center' = 'left';
	position;
	const get_api = function () {
		console.error('TODO: Implement this.');
	};
	let hidden = false;
</script>

<div class="bignavbar">
	<div
		role="button"
		tabindex="0"
		class="action"
		on:click={() => {
			hidden = !hidden;
		}}
		on:keyup={() => {
			hidden = !hidden;
		}}
	>
		{hidden ? 'Show narrative' : 'Hide narrative'}
	</div>

	<div style="flex-grow: 4;">
		<slot name="custom-navbar">
			<div class="flex-navbar">
				{#if title_features.indexOf('copy') > -1}
					<div
						role="button"
						tabindex="0"
						aria-roledescription="copy"
						class="action"
						on:click={get_api}
						on:keyup={get_api}
					>
						Copy API
					</div>
				{/if}
				<div>
					<div style="margin-left: 100px">TITLE GOES HERE</div>
				</div>
			</div></slot
		>
	</div>
</div>

<Document quire={scrollerQuire} />

<style>
	.bignavbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 15;
		background: #fff;
		border-bottom: 1px solid #ddd;
		padding: 10px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
	}

	.action:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.5);
		text-decoration: underline;
	}
	.flex-navbar {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 10px;
		flex-direction: row;
	}
</style>
