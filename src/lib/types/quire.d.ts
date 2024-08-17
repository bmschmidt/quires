import type { Component, Snippet } from 'svelte';
import type { AstNode, Block, Doc, Footnote, Inline, Reference } from '@djot/djot';

export type InlineOverride<T extends Inline = Inline> = {
	tag: T['tag'];
	selector: string;
	component: QuireOverrideComponent<T>;
};

export type BlockOverride<T extends Block = Block> = {
	tag: T['tag'];
	selector: string;
	component: QuireOverrideComponent<T>;
};

export type QuireOverride = InlineOverride<Inline> | BlockOverride<Block>;
declare global {
	type Quire<T extends AstNode> = {
		content: T;
		quireComponents: (InlineOverride | BlockOverride)[];
		// Classes is generally stored as a set, but it is serialized as an array.
		classes: Set<string> | string[];
		metadata: Record<string, unknown> | undefined;
		footnotes: Record<string, Footnote> | undefined;
		references: Record<string, Reference> | undefined;
		custom: Record<string, unknown> | undefined;
	};
	declare module '*.md' {
		const content: Quire<Doc>;
		export default content;
	}
}

type QuireArgs<T extends AstNode> = {
	quire: Quire<T>;
	children?: Snippet;
};
export type QuireComponent<T extends AstNode> = Component<QuireArgs<T>>;

// The override components must also accept a children in slots
// event if they don't use it.
export type QuireOverrideComponent<T extends Block | Inline> = Component<{ quire: Quire<T> }>;
