<script lang="ts">
	import type { CodeBlock } from '@djot/djot';
	import { load } from 'js-yaml';

	let { quire }: { quire: Quire<CodeBlock> } = $props();
	import { set, cloneDeep } from 'lodash-es';
	import Button from './Button.svelte';
	import type { ButtonArgs, ButtonsetArgs } from './types';

	const raw = quire.content.text;
	const {
		api = {},
		target,
		pattern = '${value}',
		values = [],
		label = null
	} = (load(raw) as ButtonsetArgs) || {};

	const buttons: Quire<CodeBlock>[] = [];
	for (let value of values) {
		const buttonApi = cloneDeep(api);
		set(buttonApi, target, pattern.replace('${value}', value));
		buttons.push({
			...quire,
			content: {
				tag: 'code_block',
				lang: 'button',
				text: JSON.stringify(
					{
						api: buttonApi,
						label: value
					} as ButtonArgs,
					null,
					2
				)
			}
		});
	}
</script>

<h3>{label}</h3>
<div class="buttons">
	{#each buttons as button}
		<Button quire={button} />
	{/each}
</div>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 5px;
		background-color: #fff;
		cursor: pointer;
	}
</style>
