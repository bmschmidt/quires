<script lang="ts">
	import type { SmartPunctuation } from '@djot/djot';
	let { quire }: { quire: Quire<SmartPunctuation> } = $props();
	// TODO atrributes?
	const fancyQuotes = {
		left_single_quote: '‘',
		right_single_quote: '’',
		left_double_quote: '“',
		right_double_quote: '”',
		ellipses: '…',
		em_dash: '—',
		en_dash: '–'
	};
</script>

{fancyQuotes[quire.content.type]}
