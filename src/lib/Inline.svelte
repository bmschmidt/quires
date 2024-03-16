<script lang="ts">
	import type { QuireComponent } from '$lib/types/quire.d.ts';

	export let quire: Quire<Inline>;

	import type { Inline } from '$lib/types/ast.d.ts';
	import Str from './Inlines/Str.svelte';
	import Link from './Inlines/Link.svelte';
	import Span from './Inlines/Span.svelte';
	import Strong from './Inlines/Strong.svelte';
	import Emph from './Inlines/Emph.svelte';
	import SoftBreak from './Inlines/SoftBreak.svelte';
	import SmartPunctuation from './Inlines/SmartPunctuation.svelte';
	import DoubleQuoted from './Inlines/DoubleQuoted.svelte';
	import Verbatim from './Inlines/Verbatim.svelte';
	import SingleQuoted from './Inlines/SingleQuoted.svelte';
	import HardBreak from './Inlines/HardBreak.svelte';
	import FootnoteReference from './Inlines/FootnoteReference.svelte';
	import NonBreakingSpace from './Inlines/NonBreakingSpace.svelte';
	import Symb from './Inlines/Symb.svelte';
	import InlineMath from './Inlines/InlineMath.svelte';
	import DisplayMath from './Inlines/DisplayMath.svelte';
	import Url from './Inlines/Url.svelte';
	import Email from './Inlines/Email.svelte';
	import Mark from './Inlines/Mark.svelte';
	import Superscript from './Inlines/Superscript.svelte';
	import Subscript from './Inlines/Subscript.svelte';
	import Insert from './Inlines/Insert.svelte';
	import Delete from './Inlines/Delete.svelte';
	import { matches } from './quire';
	import Image from './Inlines/Image.svelte';

	const { tag } = quire.content;
	const { quireComponents } = quire;
	const components = {
		str: Str,
		link: Link,
		soft_break: SoftBreak,
		span: Span,
		strong: Strong,
		emph: Emph,
		smart_punctuation: SmartPunctuation,
		double_quoted: DoubleQuoted,
		single_quoted: SingleQuoted,
		verbatim: Verbatim,
		hard_break: HardBreak,
		footnote_reference: FootnoteReference,
		non_breaking_space: NonBreakingSpace,
		symb: Symb,
		inline_math: InlineMath,
		display_math: DisplayMath,
		url: Url,
		email: Email,
		mark: Mark,
		superscript: Superscript,
		subscript: Subscript,
		insert: Insert,
		delete: Delete,
		raw_inline: Str, // TODO FIXME
		image: Image
	} as const;

	const component = components[tag];

	let overrides: QuireComponent<Inline>[] = [];

	if (quire.content.attributes?.class) {
		quire.classes = new Set(
			...quire.classes.values(),
			...quire.content.attributes.class.split(' ')
		);
	}

	for (const { selector, tag, component } of quireComponents) {
		if (tag === quire.content.tag && matches(selector, quire.content)) {
			overrides.push(component as QuireComponent<Inline>);
		}
	}
</script>

{#if overrides.length > 0}
	<svelte:component this={overrides[0]} {quire}>
		<!--The original type can be created through the <slot> element in any child.-->
		<svelte:component this={component} {quire} />
	</svelte:component>
{:else}
	<svelte:component this={component} {quire} />
{/if}
