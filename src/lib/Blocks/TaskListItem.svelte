<script lang="ts">
	import Block from '$lib/Block.svelte';
	import type { TaskListItem } from '@djot/djot';
	let { quire }: { quire: Quire<TaskListItem> } = $props();
	const { attributes, children } = quire.content;
	let checkbox = $derived(quire.content.checkbox);
	const classes = attributes?.class;
</script>

<li {...attributes} class={classes + ` ${checkbox} custom-checkbox`}>
	<label>
		<input
			type="checkbox"
			checked={checkbox === 'checked'}
			onclick={() => {
				quire.content.checkbox = quire.content.checkbox === 'checked' ? 'unchecked' : 'checked';
			}}
		/>
		<span class="checkbox-content">
			{#each children as child}
				<Block quire={{ ...quire, content: child }} />
			{/each}
		</span>
	</label>
</li>

<style>
	.custom-checkbox {
		list-style-type: none;
		position: relative;
		padding-left: 1.5em;
		display: flex;
		align-items: center;
	}

	.custom-checkbox label {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.custom-checkbox input[type='checkbox'] {
		position: absolute;
		left: 0;
		margin: 0;
	}

	.checkbox-content {
		display: inline-block;
		margin-left: 0.5em;
	}
</style>
