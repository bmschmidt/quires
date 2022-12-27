let OpenSeadragon = undefined;

export async function setup_osd(osd_args: Record<string, unknown>) {
	OpenSeadragon = OpenSeadragon || (await import('openseadragon').then((d) => d.default));

	const viewer = OpenSeadragon(osd_args);
	viewer.OSD = OpenSeadragon;
	return viewer;
}
