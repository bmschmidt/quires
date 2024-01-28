<script lang="ts">
	import type { SmartPunctuation } from '$lib/types/ast.d.ts';
	export let quire: Quire<SmartPunctuation>;
	const { attributes, type } = quire.content;
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
