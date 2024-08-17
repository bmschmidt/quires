import {
	isBlock,
	type AstNode,
	type Block,
	type Div,
	type OrderedList,
	type Section,
	type Str
} from '@djot/djot';
import { type HasChildren, type Footnote, type Doc } from '@djot/djot';
import { applyFilter } from '@djot/djot';
import type { Para } from '@djot/djot';
/**Code in this section by Ben Schmidt */

/**
 *
 * @param doc A djot document
 * @param strategy The footnote strategy to use.
 * @returns A Document with the footnotes put into divs or list items.
 */
export function materializeFootnotes(doc: Doc, strategy: 'footnotes' | 'sidenotes'): Doc {
	if (strategy === 'footnotes') {
		const notes = {
			tag: 'ordered_list',
			children: [],
			attributes: { class: 'footnotes' },
			style: '1.',
			tight: true
		} as OrderedList;
		const notesSection = {
			tag: 'section',
			children: [notes],
			attributes: { class: 'footnotes' }
		} as Section;
		for (const [key, note] of Object.entries(doc.footnotes)) {
			notes.children.push({
				tag: 'list_item',
				attributes: { ref: key, id: `fn-${key}`, class: 'footnote' },
				children: note.children
			});
		}
		return { ...doc, children: [...doc.children, notesSection] };
	} else {
		const sidenoteFilter = function () {
			return {
				para: (el: Para) => {
					//if (!el) {return []}
					return leadWithFootnotes(el as BlockWithChildren, doc.footnotes);
				}
			};
		};
		const d2 = JSON.parse(JSON.stringify(doc));
		applyFilter(d2, sidenoteFilter);
		return d2;
	}
}

function findReferences<T extends AstNode>(node: T): string[] {
	if (node.tag === 'footnote_reference') {
		return [node.text];
	} else if ('children' in node) {
		return node.children.flatMap(findReferences);
	} else {
		return [];
	}
}

type BlockWithChildren = Block & HasChildren<AstNode>;

function leadWithFootnotes<T extends BlockWithChildren>(
	node: T,
	docFootnotes: Record<string, Footnote>
): [...Div[], T] {
	if (!isBlock(node.children[0])) {
		const references = findReferences(node);
		const refDivs = references.map((ref) => {
			if (docFootnotes[ref] === undefined) {
				return {
					tag: 'div',
					children: [{ tag: 'para', children: [{ tag: 'str', text: 'Missing footnote' }] as Str[] }]
				} as Div;
			}
			return {
				tag: 'div' as const,
				attributes: {
					class: 'footnote-aside',
					ref: ref
				},
				children: docFootnotes[ref].children
			} as Div;
		});
		return [...refDivs, node];
	} else {
		return [node];
	}
}

/*

Code below here lifted directly from djot.

DJOT license:

Copyright (C) 2022 John MacFarlane

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

export const getStringContent = function (node: AstNode): string {
	const buffer: string[] = [];
	addStringContent(node, buffer);
	return buffer.join('');
};

const addStringContent = function (node: AstNode, buffer: string[]): void {
	if ('text' in node) {
		buffer.push(node.text);
	} else if ('tag' in node && (node.tag === 'soft_break' || node.tag === 'hard_break')) {
		buffer.push('\n');
	} else if ('children' in node) {
		for (const child of node.children) {
			addStringContent(child, buffer);
		}
	}
};
