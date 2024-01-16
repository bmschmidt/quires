import type { ComponentType, SvelteComponentTyped } from "svelte";
import type { AstNode, Footnote, Reference } from "./ast";

declare global {
  type Quire<T extends AstNode = AstNode> = {
    content: T,
    quireComponents: [string, QuireComponent][],
    // Classes is generally stored as a set, but it is serialized as an array.
    classes: Set<string> | string[],
    metadata: Record<string, any> | undefined,
    footnotes:  Record<string, Footnote> | undefined,
    references:  Record<string, Reference> | undefined,
    custom:  Record<string, any> | undefined,
  }
}

export type QuireComponent<any> =
 ComponentType<SvelteComponentTyped<{ quire: Quire<any> }>>;
