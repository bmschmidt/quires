import { AnyNode, NodeContent, NodeType } from './node';
import { Promisable } from './utility';

export interface VisitorFunction {
	(node: AnyNode, format: string, meta: NodeContent[NodeType.MetaMap]): Promisable<
		void | AnyNode | AnyNode[]
	>;
}

export interface ArrayVisitorFunction {
	(node: AnyNode[], format: string, meta: NodeContent[NodeType.MetaMap]): Promisable<
		void | AnyNode[]
	>;
}

export type VisitorMap = {
	[K in NodeType]?: (
		node: K extends keyof NodeContent ? NodeContent[K] : undefined,
		format: string,
		meta: NodeContent[NodeType.MetaMap]
	) => Promisable<void | AnyNode | AnyNode[]>;
};

export interface VisitorObject {
	single?: VisitorFunction;
	array?: ArrayVisitorFunction;
}

/**
 * allow both a function that filters single elements (compat with old version), as well as passing two filter functions:
 * one that will be called with every list of children and can return a new list of children to replace them,
 * and one that acts on single elements
 */
export type Visitor = VisitorFunction | VisitorMap | VisitorObject;
