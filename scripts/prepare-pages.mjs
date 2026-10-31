import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = join(root, 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Uraib-Dost';
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.txt', '.xml']);

if (!/^\/[A-Za-z0-9_-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must contain one safe repository path, for example /Uraib-Dost.');
}
if (!existsSync(output)) {
  throw new Error('The out directory does not exist. Run next build first.');
}

const assetPattern = /(^|[("'=:\s,])\/(images\/|apple-touch-icon\.png|favicon(?:-\d+x\d+|-preview)?\.(?:ico|png)|icon-\d+\.png)/gm;
let filesChanged = 0;
let replacements = 0;

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    const extension = path.slice(path.lastIndexOf('.'));
    if (!textExtensions.has(extension)) continue;
    const before = readFileSync(path, 'utf8');
    const after = before.replace(assetPattern, (_match, prefix, asset) => {
      replacements += 1;
      return `${prefix}${basePath}/${asset}`;
    });
    if (after !== before) {
      writeFileSync(path, after);
      filesChanged += 1;
    }
  }
}

walk(output);
writeFileSync(join(output, '.nojekyll'), '');

let unresolved = 0;
function verify(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      verify(path);
      continue;
    }
    const extension = path.slice(path.lastIndexOf('.'));
    if (!textExtensions.has(extension)) continue;
    const content = readFileSync(path, 'utf8');
    assetPattern.lastIndex = 0;
    if (assetPattern.test(content)) {
      console.error(`Unprefixed public asset remains in ${path}`);
      unresolved += 1;
    }
  }
}

verify(output);
if (unresolved) process.exit(1);
console.log(`Prepared GitHub Pages export for ${basePath}: ${replacements} asset paths updated across ${filesChanged} files.`);
