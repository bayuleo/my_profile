import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('src', 'dist', { recursive: true });
const indexHtml = await readFile('dist/index.html', 'utf8');
await writeFile('dist/404.html', indexHtml);
console.log('Built profile site to dist/');
