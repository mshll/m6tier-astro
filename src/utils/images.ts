import fetchApi, { extractAvatarUrl, extractImages } from 'lib/strapi';
import { galleryData } from '~/data';
// import { v2 as cloudinary } from 'cloudinary';
// import { extractCldImages } from '../../lib/cloudinary';

// Cloudinary
//************** */
// cloudinary.config({
//   cloud_name: import.meta.env.CLOUDINARY_NAME,
//   api_key: import.meta.env.CLOUDINARY_KEY,
//   api_secret: import.meta.env.CLOUDINARY_SECRET,
//   secure: true,
// });

// try {
//   await cloudinary.search
//     .expression('folder:m6tier/*')
//     .sort_by('public_id', 'desc')
//     .execute()
//     .then((result) => {
//       galleries = extractCldImages(result);
//     });
// } catch (error) {
//   console.error(error);
// }
// const images = galleries;

// Strapi
export const getGalleryImages = async () => {
  let galleries = null;
  try {
    galleries = await fetchApi({
      endpoint: 'galleries',
      query: {
        populate: 'Image',
        sort: 'id:desc',
      },
    });
  } catch (error) {
    console.error(error);
  }
  return galleries && galleries.data && galleries.data.length > 0 ? extractImages(galleries) : galleryData.images;
};

export const getAvatar = async () => {
  let avatar = null;
  try {
    avatar = await fetchApi({
      endpoint: 'avatar',
      query: {
        populate: 'Avatar',
      },
    });
  } catch (error) {
    console.error(error);
  }
  return extractAvatarUrl(avatar);
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
