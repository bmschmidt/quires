import { convert } from '$lib/../pandoc/wasm-pandoc.mjs';
import { promises as fs } from 'fs';

async function parse(slug) {
  const command = `pandoc -t json src/scrollership/${slug}.md`
  const  { stdout } = await exec(command);
  return stdout
}

export async function get({params}) {
  console.log({params})
  const pandoc = await convert;
  const {slug} = params;
  const file = await fs.readFile(`src/scrollership/${slug}.md`, 'utf8');
  const json = pandoc(slug);
  return {
    body: {
      document: JSON.parse(json)
    }
  }
}