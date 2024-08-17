<script lang="ts">
	import type { TaskList } from '@djot/djot';
	import TaskListItem from './TaskListItem.svelte';
	let { quire }: { quire: Quire<TaskList> } = $props();
	const { attributes, children } = quire.content;
	const classes = attributes?.class;
</script>

<ul {...attributes}>
	{#each children as child}
		<TaskListItem quire={{ ...quire, content: child }} />
	{/each}
</ul>
