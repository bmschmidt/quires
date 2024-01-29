import OpenSeadragon from 'openseadragon'
export async function setup_osd(osd_args: Record<string, unknown>) {
	//OpenSeadragon = OpenSeadragon || (await import('openseadragon').then((d) => d.default));
	const viewer = OpenSeadragon(osd_args);
	//@ts-expect-error - We're cheating to smuggle some state in here.
	viewer.OSD = OpenSeadragon;
	return viewer;
}
