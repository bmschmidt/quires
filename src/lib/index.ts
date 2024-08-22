import quire_plugin from './rollup-plugins/djot';

export { default as Block } from './Block.svelte';
// ls src/lib/Blocks | sed 's/.svelte//' | perl -ne 'chomp; print "export { default as $_ } from \x27./Blocks/$_.svelte\x27;\n"'
export { default as BlockQuote } from './Blocks/BlockQuote.svelte';
export { default as BulletList } from './Blocks/BulletList.svelte';
export { default as CodeBlock } from './Blocks/CodeBlock.svelte';
export { default as DefinitionList } from './Blocks/DefinitionList.svelte';
export { default as Div } from './Blocks/Div.svelte';
export { default as Heading } from './Blocks/Heading.svelte';
export { default as ListItem } from './Blocks/ListItem.svelte';
export { default as OrderedList } from './Blocks/OrderedList.svelte';
export { default as Para } from './Blocks/Para.svelte';
export { default as RawBlock } from './Blocks/RawBlock.svelte';
export { default as Section } from './Blocks/Section.svelte';
export { default as Table } from './Blocks/Table.svelte';
export { default as TaskList } from './Blocks/TaskList.svelte';
export { default as TaskListItem } from './Blocks/TaskListItem.svelte';
export { default as ThematicBreak } from './Blocks/ThematicBreak.svelte';

export { default as Inline } from './Block.svelte';
// ls src/lib/Inlines | sed 's/.svelte//' | perl -ne 'chomp; print "export { default as $_ } from \x27./Inlines/$_.svelte\x27;\n"'
export { default as Delete } from './Inlines/Delete.svelte';
export { default as DisplayMath } from './Inlines/DisplayMath.svelte';
export { default as DoubleQuoted } from './Inlines/DoubleQuoted.svelte';
export { default as Email } from './Inlines/Email.svelte';
export { default as Emph } from './Inlines/Emph.svelte';
export { default as FootnoteReference } from './Inlines/FootnoteReference.svelte';
export { default as HardBreak } from './Inlines/HardBreak.svelte';
export { default as Image } from './Inlines/Image.svelte';
export { default as InlineMath } from './Inlines/InlineMath.svelte';
export { default as Insert } from './Inlines/Insert.svelte';
export { default as Link } from './Inlines/Link.svelte';
export { default as Mark } from './Inlines/Mark.svelte';
export { default as NonBreakingSpace } from './Inlines/NonBreakingSpace.svelte';
export { default as RawInline } from './Inlines/RawInline.svelte';
export { default as SingleQuoted } from './Inlines/SingleQuoted.svelte';
export { default as SmartPunctuation } from './Inlines/SmartPunctuation.svelte';
export { default as SoftBreak } from './Inlines/SoftBreak.svelte';
export { default as Span } from './Inlines/Span.svelte';
export { default as Str } from './Inlines/Str.svelte';
export { default as Strong } from './Inlines/Strong.svelte';
export { default as Subscript } from './Inlines/Subscript.svelte';
export { default as Superscript } from './Inlines/Superscript.svelte';
export { default as Symb } from './Inlines/Symb.svelte';
export { default as Url } from './Inlines/Url.svelte';
export { default as Verbatim } from './Inlines/Verbatim.svelte';

// ls src/lib/custom | sed 's/.svelte//' | perl -ne 'chomp; print "export { default as $_ } from \x27./custom/$_.svelte\x27;\n"'
export { default as AsideNote } from './custom/AsideNote.svelte';
export { default as Footnote } from './custom/Footnote.svelte';
export { default as ImageFigure } from './custom/ImageFigure.svelte';
export { default as MarkdownStrong } from './custom/MarkdownStrong.svelte';
export { default as MyStrong } from './custom/MyStrong.svelte';
export { default as SidenoteRef } from './custom/SidenoteRef.svelte';

export * as utils from './djot';
export { default as quire_plugin } from './rollup-plugins/djot';