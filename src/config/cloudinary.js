import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

// Cloudinary upload preset
export const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export default cld; 