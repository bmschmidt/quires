<script lang="ts" generics="InlineType extends Inline">
	import type { InlineOverride } from '$lib/types/quire.d.ts';
	import type { Inline } from '@djot/djot';
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
	import RawInline from './Inlines/RawInline.svelte';
	import Superscript from './Inlines/Superscript.svelte';
	import Subscript from './Inlines/Subscript.svelte';
	import Insert from './Inlines/Insert.svelte';
	import Delete from './Inlines/Delete.svelte';
	import { matches } from './quire';
	import Image from './Inlines/Image.svelte';
	import type { Component } from 'svelte';

	let { quire }: { quire: Quire<InlineType> } = $props();
	let { tag } = $derived(quire.content);
	let { quireComponents } = $derived(quire);
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
		raw_inline: RawInline,
		image: Image
	} as const;

	let Component = $derived(components[tag] as Component<{ quire: Quire<InlineType> }>);

	let FirstOverride = $derived(
		quireComponents?.find(
			({ tag, selector }) => tag === quire.content.tag && matches(selector, quire.content)
		)?.component
	);
</script>

{#if FirstOverride !== undefined}
	<FirstOverride {quire}>
		<!--The original component may optionally be created through the <slot> element in any child.-->
		<Component {quire} />
	</FirstOverride>
{:else}
	<Component {quire} />
{/if}
