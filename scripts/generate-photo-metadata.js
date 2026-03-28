#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTO_DIR = path.join(__dirname, '../public/assets/Photography');
const META_FILE = path.join(PHOTO_DIR, 'meta.json');
const PHOTOS_FILE = path.join(PHOTO_DIR, 'photos.json');

async function generatePhotoMetadata() {
  try {
    // Read existing metadata
    let metaData = {};
    if (fs.existsSync(META_FILE)) {
      metaData = JSON.parse(fs.readFileSync(META_FILE, 'utf8'));
    }

    // Auto-discover WebP files (optimized images)
    const files = fs.readdirSync(PHOTO_DIR)
      .filter(f => f.endsWith('.webp') && !f.includes('optimized'))
      .sort();

    if (files.length === 0) {
      console.log('⚠️  No photos found in Photography directory');
      return;
    }

    // Build photos array with metadata
    const photos = files.map((file, index) => {
      const filename = file.replace('.webp', '');
      const meta = metaData[filename] || {};

      return {
        id: `img-${index + 1}`,
        filename,
        title: meta.title || `Photo ${index + 1}`,
        description: meta.description || '',
        category: meta.category || 'uncategorized',
        date: meta.date || new Date().toISOString().split('T')[0],
        featured: meta.featured ?? (index < 3) // First 3 featured by default
      };
    });

    // Sort: featured first, then by date (newest first)
    const sorted = photos.sort((a, b) => {
      if (a.featured !== b.featured) {
        return b.featured - a.featured;
      }
      return new Date(b.date) - new Date(a.date);
    });

    // Write photos.json
    fs.writeFileSync(
      PHOTOS_FILE,
      JSON.stringify({ photos: sorted }, null, 2)
    );

    console.log(`✅ Generated photos.json with ${sorted.length} photos`);
    console.log(`   Featured: ${sorted.filter(p => p.featured).length}`);
    console.log(`   Total: ${sorted.length}`);
  } catch (error) {
    console.error('❌ Error generating photo metadata:', error.message);
    process.exit(1);
  }
}

generatePhotoMetadata();
