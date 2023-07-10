import { galleryData } from '~/data';
import { v2 as cloudinary } from 'cloudinary';
import { extractCldImages } from '../../lib/cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_NAME,
  api_key: import.meta.env.CLOUDINARY_KEY,
  api_secret: import.meta.env.CLOUDINARY_SECRET,
  secure: true,
});

export const getGalleryImages = async () => {
  try {
    const result = await cloudinary.search.expression('folder:m6tier/*').execute();

    return extractCldImages(result);
  } catch (error) {
    console.error(error);
  }
};

export const getAvatar = async () => {
  try {
    const result = await cloudinary.search.expression('folder:avatar/*').max_results(1).execute();

    return extractCldImages(result)[0];
  } catch (error) {
    console.error(error);
  }
};

// *****************
const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**');
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images;

/** */
export const fetchLocalImages = async () => {
  _images = _images || load();
  return await _images;
};

/** */
export const findImage = async (imagePath?: string) => {
  if (typeof imagePath !== 'string') {
    return null;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets')) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};
