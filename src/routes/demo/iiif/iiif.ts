import type OpenSeadragon from 'openseadragon';

let OSDModule : undefined | typeof OpenSeadragon = undefined;

export async function setup_osd(osd_args: Record<string, unknown>) {
	OSDModule =
		typeof OSDModule === 'undefined'
			? await import('openseadragon').then((d) => d.default)
			: OSDModule;
	const viewer = OSDModule!(osd_args);
	return {viewer, OSDModule}
}
