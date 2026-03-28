#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const PHOTO_DIR = path.join(PUBLIC_DIR, 'assets/Photography');

// Statistics tracking
const stats = {
  originalSize: 0,
  optimizedSize: 0,
  files: []
};

async function optimizeProfilePhoto() {
  console.log('\n🖼️  Optimizing profile photo...');
  const profilePath = path.join(PUBLIC_DIR, 'photo.png');
  
  if (!fs.existsSync(profilePath)) {
    console.log('❌ Profile photo not found');
    return;
  }

  const stat = fs.statSync(profilePath);
  const originalSize = stat.size;
  
  try {
    // Convert PNG to WebP
    const outputWebP = path.join(PUBLIC_DIR, 'photo.webp');
    await sharp(profilePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputWebP);

    // Also optimize original PNG (for fallback)
    const outputPNG = path.join(PUBLIC_DIR, 'photo-optimized.png');
    await sharp(profilePath)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputPNG);

    const webpStat = fs.statSync(outputWebP);
    const pngStat = fs.statSync(outputPNG);

    stats.originalSize += originalSize;
    stats.optimizedSize += Math.min(webpStat.size, pngStat.size);
    
    stats.files.push({
      name: 'photo.png',
      original: `${(originalSize / 1024 / 1024).toFixed(2)} MB`,
      optimized: `${(Math.min(webpStat.size, pngStat.size) / 1024 / 1024).toFixed(2)} MB`,
      savings: `${(100 - (Math.min(webpStat.size, pngStat.size) / originalSize * 100)).toFixed(1)}%`
    });

    console.log(`✅ Profile photo optimized`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   WebP: ${(webpStat.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   PNG (optimized): ${(pngStat.size / 1024 / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error(`❌ Error optimizing profile photo: ${error.message}`);
  }
}

async function optimizePhotographyImages() {
  console.log('\n📸 Optimizing photography images...');
  
  if (!fs.existsSync(PHOTO_DIR)) {
    console.log('❌ Photography directory not found');
    return;
  }

  const files = fs.readdirSync(PHOTO_DIR).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  console.log(`Found ${files.length} images to optimize\n`);

  for (const file of files) {
    const inputPath = path.join(PHOTO_DIR, file);
    const stat = fs.statSync(inputPath);
    const originalSize = stat.size;

    try {
      // Create WebP version (high quality for display)
      const name = path.parse(file).name;
      const outputWebP = path.join(PHOTO_DIR, `${name}.webp`);
      
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputWebP);

      // Optimize original JPEG for fallback
      const outputJPEG = path.join(PHOTO_DIR, `${name}-optimized.jpeg`);
      await sharp(inputPath)
        .jpeg({ quality: 75, progressive: true, mozjpeg: true })
        .toFile(outputJPEG);

      const webpStat = fs.statSync(outputWebP);
      const jpegStat = fs.statSync(outputJPEG);
      const optimizedSize = Math.min(webpStat.size, jpegStat.size);

      stats.originalSize += originalSize;
      stats.optimizedSize += optimizedSize;

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      stats.files.push({
        name: file,
        original: `${(originalSize / 1024).toFixed(0)} KB`,
        optimized: `${(optimizedSize / 1024).toFixed(0)} KB`,
        savings: `${savings}%`
      });

      console.log(`✅ ${file}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(0)} KB → Optimized: ${(optimizedSize / 1024).toFixed(0)} KB (${savings}% saved)`);
    } catch (error) {
      console.error(`❌ Error processing ${file}: ${error.message}`);
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log('═══════════════════════════════════════\n');

  await optimizeProfilePhoto();
  await optimizePhotographyImages();

  console.log('\n═══════════════════════════════════════');
  console.log('\n📊 Optimization Summary:');
  console.log(`Total Original Size: ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized Size: ${(stats.optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Savings: ${((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1)}%\n`);

  console.log('📋 Detailed Results:');
  console.table(stats.files);

  console.log('\n✨ Image optimization complete!');
  console.log('\n📝 Next Steps:');
  console.log('1. Update Photography.jsx to use WebP with JPEG fallback');
  console.log('2. Update Hero.jsx to use optimized profile photo');
  console.log('3. Delete original unoptimized images (keep backups)');
}

main().catch(console.error);
