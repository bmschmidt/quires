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
    quireComponents: QuireOverride<Block | Inline>[],
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
 ComponentType<SvelteComponentTyped<{ 
   quire: Quire<T>
 }>>;

 // The override components must also accept a children in slots
 // event if they don't use it.
 export type QuireOverrideComponent<T extends Block | Inline> =
  ComponentType<
  SvelteComponentTyped<{ 
    quire: Quire<T>,
    // The slot is required, even if it is not used.
    // This is because the override components are expected to be
    // used as a wrapper around the original component.
    },
    Record<string, unknown>,
    QuireComponent<T>?
    >>;
 
