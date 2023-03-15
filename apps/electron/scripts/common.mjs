import fs from 'node:fs';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const { node, chrome } = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../electron-vendors.autogen.json'),
    'utf-8'
  )
);

/** @type {import('esbuild').BuildOptions} */
export const mainConfig = {
  entryPoints: ['layers/main/src/index.ts'],
  outdir: 'layers/main/dist',
  bundle: true,
  target: `node${node}`,
  platform: 'node',
  external: ['electron'],
};

export const preloadConfig = {
  entryPoints: ['layers/preload/src/index.ts'],
  outdir: 'layers/preload/dist',
  bundle: true,
  target: `node${node}`,
  platform: 'node',
  external: ['electron'],
};
