import type QuireObserver from "$lib/quireObserver";
import type { Doc, AstNode, Div } from "$lib/types/ast";
import type { UpdateablePlot, PlotImportable } from "./types";

export type MaybeScrollerDoc = Quire<AstNode> & {
  custom: {    
    scrollerAPIs: Record<string, PlotImportable>;
  };
};

export type ScrollershipDocQuire = Quire<Doc> & MaybeScrollerDoc

export type ScrollerDivQuire = Quire<Div> & {
  custom: {
    _plot: UpdateablePlot;
  }
} & MaybeScrollerDoc;

export type QuireInScroller<T extends AstNode> = Quire<T> & {
  custom: {
    // These slots are optional because they don't exist in SSR.
    _plot: UpdateablePlot;
    codeNodes?: Map<Node, Record<string, unknown>>;
    observer?: QuireObserver;
  }
}

interface HasNode {
  node: Node
}

export function nodeSort<T extends HasNode>(els: T[]) : T[] {
  // Sort a set of elements by their position in the document.
  els.sort((a, b) => {
    const nodeA = a.node;
    const nodeB = b.node;
    if (nodeA === nodeB) {
      return 0;
    }

    const position = nodeA.compareDocumentPosition(nodeB);

    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    } else {
      return 0;
    }
  })
  return els;
}
