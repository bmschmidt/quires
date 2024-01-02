<script>
	export let min = 0;
	export let max = 1;
	export let settings;
	let value = min / 2 + max / 2;
	function update() {
		const plot = settings.controls['_plot'];
		if (plot) {
			const callouts = plot._query.callouts;
			const updated = [];
			// This resizes all callouts, which is a weird thing to do. But I'll leave it in as a demo.
			for (let callout of callouts) {
				const vals = { ...callout };
				vals.size = value;
				updated.push(vals);
			}
			plot.plotAPI({
				callouts: updated
			});
		}
	}
</script>

<input type="range" bind:value {min} {max} step={0.01} on:input={update} />
