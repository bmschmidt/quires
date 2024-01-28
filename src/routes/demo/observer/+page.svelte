<script lang="ts">
	// Get the AST JSON.
	import quire from './history.md';
	import Document from '$lib/Doc.svelte';
	import Para from './ParaObserver.svelte';
	import QuireObserver from '$lib/quireObserver.js';
	quire.quireComponents = [['para', Para]];

	$: observed_paragraphs = 0;

	let letter_counts: Record<string, number> = {};
	$: max_letter_count = Math.max(...Object.values(letter_counts), 1);
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
		quire.custom!.observer = new QuireObserver(observe, options);
	}
</script>

<div style="position:fixed;font-family:sans-serif;">
	<div style="font-size:64px;">{observed_paragraphs}</div>
	<div>Paragraphs read so far.</div>
	<div>
		<h3>Running count <br /> of letters</h3>
		<div>
			{#each Object.entries(letter_counts).sort() as [letter, count]}
				<div>
					{letter}: {count}
				</div>
			{/each}
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
