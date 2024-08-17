<script lang="ts">
	// Get the AST JSON.
	import quire from './history.md';
	import Document from '$lib/Doc.svelte';
	import Para from './ParaObserver.svelte';
	import { QuireObserver } from '$lib/quireObserver.svelte';
	import type { QuireOverride } from '$lib/types/quire';
	quire.quireComponents = [{ tag: 'para', component: Para, selector: 'para' }] as QuireOverride[];

	let observed_paragraphs = $state(0);

	let letter_counts: Record<string, number> = $state({});
	function updateLetterCounts(div: HTMLParagraphElement) {
		const text = div.innerText.toLocaleLowerCase().replaceAll(/[^a-z]/g, '');
		for (let letter of text) {
			if (letter_counts[letter]) {
				letter_counts[letter] += 1;
			} else {
				letter_counts[letter] = 1;
			}
		}

		letter_counts = { ...letter_counts };
	}

	if (typeof window !== 'undefined') {
		let options = {
			root: document.querySelector('#scrollArea'),
			rootMargin: '0px',
			threshold: 1.0
		};
		// This will be handled by runs, eventually.
		const observe: IntersectionObserverCallback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					updateLetterCounts(entry.target as HTMLParagraphElement);
					observed_paragraphs += 1;
				}
			});
		};
		quire.custom!.observer = new QuireObserver({ callback: observe, observer_options: options });
	}
	let maxx: number = $derived(Object.values(letter_counts).reduce((a, b) => Math.max(a, b), 0));
</script>

<div style="position:fixed;font-family:sans-serif;">
	<div style="font-size:64px;">{observed_paragraphs}</div>
	<div>Paragraphs read so far.</div>
	<div>
		<h3>Running count <br /> of letters</h3>
		<div>
			<div style="display: grid; grid-template-columns: 1fr 2fr;">
				{#each Object.entries(letter_counts).sort() as [letter, count]}
					<div class="f">
						{letter}: {count}
					</div>
					<div
						style="background-color: hsl({(count / maxx) * 120}, 100%, 50%); width: {(count /
							maxx) *
							100}%; height: 1em;"
					>
						&nbsp;
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
<div class="indented">
	<Document {quire} />
</div>

<style>
	.indented {
		margin-left: 200px;
		width: 20em;
	}
</style>
