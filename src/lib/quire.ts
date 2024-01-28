import type { Block, Doc, Inline } from "./types/ast"
import type { QuireComponent, State } from "./types/quire.d.ts"
import { parse, type Selector } from "css-what"

/**
 * 
 * @param selector a string in the style of CSS selectors, identifying the quire components 
 *                 to be overridden.
 * @param element An element in the formofa djot AST node that will be checked against the selector.
 * @returns true if the element matches the selector, false otherwise.
 */
export function matches(selector : string, element : Block | Inline) : boolean {
  const parsed = parse(selector)[0];
  const match = parsed.every(part => test(part, element));
  return match;
}

function test(part : Selector, element : Block | Inline) : boolean {
  const attributes = element.attributes || {};
  if (part.type === "tag") {
    return part.name === element.tag
  }
  if (part.type === "attribute") {
    if (part.name === "class" && element.tag === "code_block") {
      // djot code blocks don't have classes, but they do have a `lang` attribute.
      // For the purposes of selectors, we treat the `lang` attribute as a class.
      // Passing [lang=...] in a selector will also the `lang` attribute.
      if (element.lang?.toLocaleLowerCase() === part.value.toLocaleLowerCase()) {
        return true
      }

      // continue; maybe it is marked as lang= attribute.
    }
    if (!attributes[part.name]) {
      // If it doesn't have `id` `class` or related attributes, it doesn't match.
      return false;
    }
    if (part.action === "element") {
      return attributes[part.name].toLocaleLowerCase().split(" ").includes(part.value.toLocaleLowerCase())
    }
    if (part.action === "equals") {
      return attributes[part.name] === part.value
    } 
    throw new Error(`Unsupported attribute action: ${part.action}`);
  }
  throw new Error(`Unsupported selector part: ${part.type}`);
}
