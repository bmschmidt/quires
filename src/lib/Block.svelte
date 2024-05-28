<script lang="ts" generics="BlockType extends Block">
	import DefinitionList from './Blocks/DefinitionList.svelte';

	import type { QuireComponent, QuireOverride, QuireOverrideComponent } from './types/quire';
	import type { Block } from './types/ast';
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

	let { quire }: { quire: Quire<BlockType> } = $props();

	let { tag } = $derived(quire.content);
	let { quireComponents } = $derived(quire);
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
		definition_list: DefinitionList
	} as const;

	let component = $derived(components[tag] as QuireComponent<BlockType>);

	let firstOverride = $derived(
		quireComponents.find(
			({ tag, selector }) => tag === quire.content.tag && matches(selector, quire.content)
		)
	) as QuireOverride<BlockType> | undefined;
	// console.log({ quireComponents });
	$inspect(firstOverride).with((d) => {
		if (tag === 'div' && quire.content?.attributes?.class?.includes('scrollership')) {
			// console.log(quireComponents);
			// console.log(tag);
			console.log(quireComponents[0]);
			console.log(tag, quire.content.attributes);
		}
	});
</script>

{#if firstOverride !== undefined}
	<svelte:component this={firstOverride.component} {quire}>
		<!--The original type can be created through the <slot> element in any child.-->
		<svelte:component this={component} {quire} />
	</svelte:component>
{:else}
	<svelte:component this={component} {quire} />
{/if}
