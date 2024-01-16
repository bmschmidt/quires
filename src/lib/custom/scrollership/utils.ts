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
