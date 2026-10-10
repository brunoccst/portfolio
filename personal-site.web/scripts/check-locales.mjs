// Fails when the locale files do not share the same set of keys, so a string
// added to one language cannot silently fall back to English in another.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const LOCALES_DIR = new URL('../src/i18n/locales/', import.meta.url).pathname;
const REFERENCE = 'en.json';

// Flattens nested objects and arrays into dotted key paths.
function keyPaths(value, prefix = '') {
  if (value === null || typeof value !== 'object') return [prefix];
  return Object.entries(value).flatMap(([key, child]) =>
    keyPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

const load = (file) => new Set(keyPaths(JSON.parse(readFileSync(join(LOCALES_DIR, file), 'utf8'))));

const reference = load(REFERENCE);
let failed = false;

for (const file of readdirSync(LOCALES_DIR).filter((f) => f.endsWith('.json') && f !== REFERENCE)) {
  const keys = load(file);
  const missing = [...reference].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !reference.has(key));

  for (const key of missing) console.error(`${file}: missing ${key}`);
  for (const key of extra) console.error(`${file}: not in ${REFERENCE}: ${key}`);
  if (missing.length || extra.length) failed = true;
}

if (failed) {
  console.error('Locale files differ. Keep every locale in the same shape as en.json.');
  process.exit(1);
}
console.log('Locale files match.');
