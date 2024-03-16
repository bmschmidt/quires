<script lang="ts">
	import type { QuireComponent } from './types/quire';
	import type { AstNode, Block, Inline } from './types/ast';

	export let quire: Quire<Block>;

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
	const components: Record<string, QuireComponent<any>> = {
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

	const component: QuireComponent<Block | Inline> = components[tag];

	let overrides: QuireComponent<Block | Inline>[] = [];
	for (const { tag, selector, component } of quireComponents) {
		if (tag === quire.content.tag && matches(selector, quire.content)) {
			overrides.push(component);
		}
	}
</script>

{#if overrides.length > 0}
	{#each overrides as override}
		<svelte:component this={override} {quire}>
			<!--The original type can be created through the <slot> element in any child.-->
			<svelte:component this={component} {quire} />
		</svelte:component>
	{/each}
{:else}
	<svelte:component this={component} {quire} />
{/if}
