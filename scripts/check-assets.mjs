import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const sourceRoot = join(root, 'src');
const publicRoot = join(root, 'public');
const extensions = new Set(['.css', '.ts', '.tsx']);
const references = new Map();

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    const extension = path.slice(path.lastIndexOf('.'));
    if (!extensions.has(extension)) continue;
    const content = readFileSync(path, 'utf8');
    for (const match of content.matchAll(/\/(images\/[^"'()\s?#]+|(?:apple-touch-icon|favicon(?:-\d+x\d+)?|icon-\d+)\.(?:ico|png|jpg|jpeg|webp|svg))/g)) {
      const asset = match[1];
      if (!references.has(asset)) references.set(asset, []);
      references.get(asset).push(relative(root, path));
    }
  }
}

walk(sourceRoot);
const missing = [...references]
  .filter(([asset]) => !existsSync(join(publicRoot, asset)))
  .map(([asset, files]) => ({ asset, files: [...new Set(files)] }));

if (missing.length) {
  console.error('Missing public assets:');
  for (const item of missing) {
    console.error(`- /${item.asset} (referenced by ${item.files.join(', ')})`);
  }
  process.exit(1);
}

console.log(`Verified ${references.size} public asset references.`);
