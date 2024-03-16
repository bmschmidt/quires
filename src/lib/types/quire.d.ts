import type { ComponentType, SvelteComponentTyped } from "svelte";
import type { AstNode, Block, Doc, Footnote, Inline, Reference } from "./ast";

export type QuireOverride<T extends Block | Inline> = {
  tag: T['tag'],
  selector: string,
  component: QuireComponent<T>
}
declare global {
  type Quire<T extends AstNode> = {
    content: T,
    quireComponents: QuireOverride[],
    // Classes is generally stored as a set, but it is serialized as an array.
    classes: Set<string> | string[],
    metadata: Record<string, unknown> | undefined,
    footnotes:  Record<string, Footnote> | undefined,
    references:  Record<string, Reference> | undefined,
    custom:  Record<string, unknown> | undefined,
  }
	declare module '*.md' {
		const content: Quire<Doc>;
		export default content;
	}
}

export type QuireComponent<T extends AstNode> =
 ComponentType<SvelteComponentTyped<{ quire: Quire<T> }>>;
