import type { ComponentType, SvelteComponentTyped } from "svelte";
import type { AstNode, Doc, Footnote, Reference } from "./ast";

declare global {
  type Quire<T extends AstNode> = {
    content: T,
    quireComponents: [string, QuireComponent][],
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
