let OpenSeadragon = undefined;
export async function setup_osd(osd_args: Record<string, unknown>) {
	OpenSeadragon = typeof OpenSeadragon === 'undefined' ? (await import('openseadragon').then((d) => d.default)) : OpenSeadragon;
	const viewer = OpenSeadragon(osd_args);
	//@ts-expect-error - We're cheating to smuggle some state in here.
	viewer.OSD = OpenSeadragon;
	return viewer;
}
