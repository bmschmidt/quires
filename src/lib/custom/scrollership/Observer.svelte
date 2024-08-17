<script lang="ts">
	import type { QuireInScroller, ScrollerDivQuire } from './utils.js';
	import { QuireObserver } from '$lib/quireObserver.svelte.js';

	let {
		quire,
		observerOptions = {
			root: null,
			rootMargin: '-20% 20px -40% 40px',
			threshold: 0.01
		}
	}: {
		quire: ScrollerDivQuire;
		observerOptions: {
			root: Element | null;
			rootMargin: string;
			threshold: number;
		};
	} = $props();

	let observer = $state<QuireObserver | undefined>(undefined);
	let codeNodes = $state(new Map<Node, Record<string, any>>());

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		const intersectingNodes = entries
			.filter((entry) => entry.isIntersecting)
			.map((entry) => entry.target);

		quire.custom?.onIntersection?.(intersectingNodes);
	}

	$effect(() => {
		observer = new QuireObserver(handleIntersection, observerOptions);
		return () => observer?.disconnect();
	});

	export function addNode(node: Node, code: Record<string, any>) {
		codeNodes.set(node, code);
		observer?.observe(node);
	}

	export function removeNode(node: Node) {
		codeNodes.delete(node);
		observer?.unobserve(node);
	}

	$effect(() => {
		if (quire?.custom) {
			quire.custom.codeNodes = codeNodes;
			quire.custom.observer = observer;
		}
	});
</script>
