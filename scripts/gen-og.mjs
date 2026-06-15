/**
 * Gera public/og.png — 1200x630 — a partir de hero-ambient.png
 * Usa sharp: resize + compress pra manter <200KB
 */
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const src = join(root, 'public', 'shots', 'hero-ambient.png')
const out = join(root, 'public', 'og.jpg')

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, progressive: true })
  .toFile(out)

const { size } = await import('fs/promises').then(fs => fs.stat(out))
console.log(`og.jpg gerado: ${(size / 1024).toFixed(1)} KB`)
