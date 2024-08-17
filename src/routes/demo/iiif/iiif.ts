let OpenSeadragon = undefined;
export async function setup_osd(osd_args: Record<string, unknown>) {
	OpenSeadragon =
		typeof OpenSeadragon === 'undefined'
			? await import('openseadragon').then((d) => d.default)
			: OpenSeadragon;
	const viewer = OpenSeadragon(osd_args);
	viewer.OSD = OpenSeadragon;
	return viewer;
}
