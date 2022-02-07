/* eslint-disable no-use-before-define, no-shadow */

export const enum NodeType {
  Str = "Str",
  Emph = "Emph",
  Strong = "Strong",
  Strikeout = "Strikeout",
  Superscript = "Superscript",
  Subscript = "Subscript",
  SmallCaps = "SmallCaps",
  Quoted = "Quoted",
  Cite = "Cite",
  Code = "Code",
  Space = "Space",
  SoftBreak = "SoftBreak",
  LineBreak = "LineBreak",
  Math = "Math",
  RawInline = "RawInline",
  Link = "Link",
  Image = "Image",
  Note = "Note",
  Span = "Span",
  Plain = "Plain",
  Para = "Para",
  LineBlock = "LineBlock",
  CodeBlock = "CodeBlock",
  RawBlock = "RawBlock",
  BlockQuote = "BlockQuote",
  OrderedList = "OrderedList",
  BulletList = "BulletList",
  DefinitionList = "DefinitionList",
  Header = "Header",
  HorizontalRule = "HorizontalRule",
  Table = "Table",
  Div = "Div",
  Null = "Null",
  MetaMap = "MetaMap",
  MetaList = "MetaList",
  MetaBool = "MetaBool",
  MetaInlines = "MetaInlines",
  MetaString = "MetaString",
  MetaBlocks = "MetaBlocks",
  AlignLeft = "AlignLeft",
  AlignRight = "AlignRight",
  AlignCenter = "AlignCenter",
  AlignDefault = "AlignDefault",
  DefaultStyle = "DefaultStyle",
  Example = "Example",
  Decimal = "Decimal",
  LowerRoman = "LowerRoman",
  UpperRoman = "UpperRoman",
  LowerAlpha = "LowerAlpha",
  UpperAlpha = "UpperAlpha",
  DefaultDelim = "DefaultDelim",
  Period = "Period",
  OneParen = "OneParen",
  TwoParens = "TwoParens",
  AuthorInText = "AuthorInText",
  SuppressAuthor = "SuppressAuthor",
  NormalCitation = "NormalCitation",
  DisplayMath = "DisplayMath",
  InlineMath = "InlineMath",
  SingleQuote = "SingleQuote",
  DoubleQuote = "DoubleQuote",
}

export interface Node<T extends NodeType> {
  t: T;
  c: T extends keyof NodeContent ? NodeContent[T] : undefined;
}

export type GetNodeType<N> = N extends Node<infer T> ? T : never;

export type AlignmentNode =
  | Node<NodeType.AlignLeft>
  | Node<NodeType.AlignRight>
  | Node<NodeType.AlignCenter>
  | Node<NodeType.AlignDefault>;

export type InlineNode =
  | Node<NodeType.Str>
  | Node<NodeType.Emph>
  | Node<NodeType.Strong>
  | Node<NodeType.Strikeout>
  | Node<NodeType.Superscript>
  | Node<NodeType.Subscript>
  | Node<NodeType.SmallCaps>
  | Node<NodeType.Quoted>
  | Node<NodeType.Cite>
  | Node<NodeType.Code>
  | Node<NodeType.Space>
  | Node<NodeType.SoftBreak>
  | Node<NodeType.LineBreak>
  | Node<NodeType.Math>
  | Node<NodeType.RawInline>
  | Node<NodeType.Link>
  | Node<NodeType.Image>
  | Node<NodeType.Note>
  | Node<NodeType.Span>;

export type BlockNode =
  | Node<NodeType.Plain>
  | Node<NodeType.Para>
  | Node<NodeType.LineBlock>
  | Node<NodeType.CodeBlock>
  | Node<NodeType.RawBlock>
  | Node<NodeType.BlockQuote>
  | Node<NodeType.OrderedList>
  | Node<NodeType.BulletList>
  | Node<NodeType.DefinitionList>
  | Node<NodeType.Header>
  | Node<NodeType.HorizontalRule>
  | Node<NodeType.Table>
  | Node<NodeType.Div>
  | Node<NodeType.Null>;

export type MetaNode =
  | Node<NodeType.MetaMap>
  | Node<NodeType.MetaList>
  | Node<NodeType.MetaBool>
  | Node<NodeType.MetaInlines>
  | Node<NodeType.MetaString>
  | Node<NodeType.MetaBlocks>;

export type ListNumberStyleNode =
  | Node<NodeType.DefaultStyle>
  | Node<NodeType.Example>
  | Node<NodeType.Decimal>
  | Node<NodeType.LowerRoman>
  | Node<NodeType.UpperRoman>
  | Node<NodeType.LowerAlpha>
  | Node<NodeType.UpperAlpha>;

export type ListNumberDelimNode =
  | Node<NodeType.DefaultDelim>
  | Node<NodeType.Period>
  | Node<NodeType.OneParen>
  | Node<NodeType.TwoParens>;

export type CitationModeNode =
  | Node<NodeType.AuthorInText>
  | Node<NodeType.SuppressAuthor>
  | Node<NodeType.NormalCitation>;

export type MathTypeNode = Node<NodeType.DisplayMath> | Node<NodeType.InlineMath>;

export type QuoteNode = Node<NodeType.SingleQuote> | Node<NodeType.DoubleQuote>;

export interface NodeContent {
  // Inline
  [NodeType.Str]: string;
  [NodeType.Emph]: InlineNode[];
  [NodeType.Strong]: InlineNode[];
  [NodeType.Strikeout]: InlineNode[];
  [NodeType.Superscript]: InlineNode[];
  [NodeType.Subscript]: InlineNode[];
  [NodeType.SmallCaps]: InlineNode[];
  [NodeType.Quoted]: [quoteType: QuoteNode, content: InlineNode[]];
  [NodeType.Cite]: [citations: Citation[], content: InlineNode[]];
  [NodeType.Code]: [attributes: Attributes, value: string];
  [NodeType.Math]: [mathType: MathTypeNode, value: string];
  [NodeType.RawInline]: [format: string, value: string];
  [NodeType.Link]: [
    attributes: Attributes,
    content: Array<InlineNode>,
    url: [value: string, type: string]
  ];
  [NodeType.Image]: [
    attributes: Attributes,
    content: Array<InlineNode>,
    url: [value: string, type: string]
  ];
  [NodeType.Note]: BlockNode[];
  [NodeType.Span]: [attributes: Attributes, content: InlineNode[]];

  // Block
  [NodeType.Plain]: InlineNode[];
  [NodeType.Para]: InlineNode[];
  [NodeType.LineBlock]: InlineNode[][];
  [NodeType.CodeBlock]: [attributes: Attributes, content: string];
  [NodeType.RawBlock]: [format: string, content: string];
  [NodeType.BlockQuote]: BlockNode[];
  [NodeType.OrderedList]: [
    [startingNo: number, numberingStyle: ListNumberStyleNode, delimiterType: ListNumberDelimNode],
    BlockNode[][]
  ];
  [NodeType.BulletList]: BlockNode[][];
  [NodeType.DefinitionList]: [InlineNode[], BlockNode[][]][];
  [NodeType.Header]: [number, Attributes, InlineNode[]];
  [NodeType.Table]: [InlineNode[], AlignmentNode[], number[], BlockNode[][], BlockNode[][][]];
  [NodeType.Div]: [attributes: Attributes, content: BlockNode[]];
  [NodeType.Null]: undefined;

  // Meta
  [NodeType.MetaMap]: Record<string, MetaNode>;
  [NodeType.MetaList]: MetaNode[];
  [NodeType.MetaBool]: boolean;
  [NodeType.MetaInlines]: InlineNode[];
  [NodeType.MetaString]: string;
  [NodeType.MetaBlocks]: BlockNode[];
}

export type Document = {
  "pandoc-api-version": number[];
  "meta": NodeContent[NodeType.MetaMap];
  "blocks": BlockNode[];
};

export type Attributes = [
  id: string,
  classes: string[],
  attributes: [key: string, value: string][]
];

export type Citation = {
  citationId: string;
  citationPrefix: InlineNode[];
  citationSuffix: InlineNode[];
  citationMode: CitationModeNode;
  citationNoteNum: number;
  citationHash: number;
};

export type AnyNode =
  | AlignmentNode
  | InlineNode
  | BlockNode
  | MetaNode
  | ListNumberDelimNode
  | ListNumberStyleNode
  | CitationModeNode
  | MathTypeNode
  | QuoteNode;

export type ParentNode = Document | AnyNode;
