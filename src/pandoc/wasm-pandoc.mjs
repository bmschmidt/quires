import * as rts from './rts.mjs';
import module from './wasm-pandoc.wasm.mjs';
import req from './wasm-pandoc.req.mjs';

async function handleModule(m) {
  const m2 = await module
  const asterius = await rts.newAsteriusInstance(Object.assign(req, { module: m }));
  return asterius.exports.convert
}

// A promise of the function
export const convert = module.then(handleModule);

