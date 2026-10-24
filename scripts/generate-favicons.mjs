import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const inputLogo = path.join(rootDir, 'public', 'images', 'logo.png');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width === 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height === 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(item => item.buffer)]);
}

async function run() {
  console.log('Generating favicons from original circular logo:', inputLogo);
  if (!fs.existsSync(inputLogo)) {
    throw new Error(`Logo file not found at: ${inputLogo}`);
  }

  const publicDir = path.join(rootDir, 'public');
  const appDir = path.join(rootDir, 'src', 'app');

  // 1. Transparent PNG icons for browser tabs (16x16, 32x32, 48x48)
  const sizes = [16, 32, 48];
  const icoBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(inputLogo)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(path.join(publicDir, `favicon-${size}x${size}.png`), buf);
    icoBuffers.push({ width: size, height: size, buffer: buf });
    console.log(`✓ Generated public/favicon-${size}x${size}.png`);
  }

  // Also public/favicon.png (32x32)
  const favicon32Buf = icoBuffers.find(b => b.width === 32).buffer;
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), favicon32Buf);
  console.log('✓ Generated public/favicon.png');

  // 2. Multi-resolution favicon.ico
  const icoData = createIco(icoBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoData);
  console.log('✓ Generated public/favicon.ico and src/app/favicon.ico (16x16, 32x32, 48x48)');

  // 3. Apple Touch Icon (180x180) - iOS standard
  // Apple recommends opaque background so iOS doesn't fill transparent corners with black.
  // The logo background is cream/off-white (#FFFFF7), so we place the circular logo on #FFFFF7.
  const appleTouchBuf = await sharp(inputLogo)
    .resize(172, 172, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 4,
      bottom: 4,
      left: 4,
      right: 4,
      background: { r: 255, g: 255, b: 247, alpha: 1 }
    })
    .flatten({ background: { r: 255, g: 255, b: 247 } })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchBuf);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon-precomposed.png'), appleTouchBuf);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleTouchBuf);
  console.log('✓ Generated Apple Touch Icons (180x180)');

  // 4. Android Chrome icons (192x192, 512x512)
  for (const size of [192, 512]) {
    const androidBuf = await sharp(inputLogo)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, `android-chrome-${size}x${size}.png`), androidBuf);
    console.log(`✓ Generated public/android-chrome-${size}x${size}.png`);
  }

  // 5. Next.js src/app/icon.png
  fs.writeFileSync(path.join(appDir, 'icon.png'), favicon32Buf);
  console.log('✓ Generated src/app/icon.png');

  // 6. site.webmanifest
  const manifest = {
    name: "3C Ceylon Tours | Luxury Sri Lanka Tours",
    short_name: "3C Ceylon Tours",
    description: "Award-quality bespoke travel agency in Sri Lanka. Tailor-made luxury tour packages and private journeys.",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    start_url: "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');
  console.log('✓ Generated public/site.webmanifest');

  console.log('🎉 All favicon assets created successfully!');
}

run().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
