<script lang="ts" generics="BlockType extends Block">
	import type { QuireComponent, QuireOverride, QuireOverrideComponent } from './types/quire';
	import type { Block } from './types/ast';

	export let quire: Quire<BlockType>;

	import Para from './Blocks/Para.svelte';
	import Heading from './Blocks/Heading.svelte';
	import Div from './Blocks/Div.svelte';
	import Section from './Blocks/Section.svelte';
	import ThematicBreak from './Blocks/ThematicBreak.svelte';
	import CodeBlock from './Blocks/CodeBlock.svelte';
	import Table from './Blocks/Table.svelte';
	import RawBlock from './Blocks/RawBlock.svelte';
	import BlockQuote from './Blocks/BlockQuote.svelte';
	import OrderedList from './Blocks/OrderedList.svelte';
	import BulletList from './Blocks/BulletList.svelte';
	import { matches } from './quire';

	const { tag } = quire.content;
	const { quireComponents } = quire;
	const components = {
		para: Para,
		div: Div,
		code_block: CodeBlock,
		raw_block: RawBlock,
		table: Table,
		heading: Heading,
		section: Section,
		thematic_break: ThematicBreak,
		block_quote: BlockQuote,
		ordered_list: OrderedList,
		bullet_list: BulletList,
		task_list: BulletList, // TODO FIXME
		definition_list: BulletList // TODO FIXME
	} as const;

	const component = components[tag] as QuireComponent<BlockType>;

	const firstOverride = quireComponents.find(
		({ tag, selector }) => tag === quire.content.tag && matches(selector, quire.content)
	) as QuireOverride<BlockType> | undefined;
</script>

{#if firstOverride !== undefined}
	<svelte:component this={firstOverride.component} {quire}>
		<!--The original type can be created through the <slot> element in any child.-->
		<svelte:component this={component} {quire} />
	</svelte:component>
{:else}
	<svelte:component this={component} {quire} />
{/if}
