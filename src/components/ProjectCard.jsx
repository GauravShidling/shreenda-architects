import { Link } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../config/cloudinary';

const ProjectCard = ({ id, title, category, imageSrc, featured = false }) => {
  // Extract the public ID from the Cloudinary URL
  const getPublicId = (url) => {
    if (!url) return null;
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 ${featured ? 'md:col-span-2 row-span-2' : ''}`}>
      <Link to={`/projects/${id}`}>
        {imageSrc ? (
          <div className="h-64 overflow-hidden">
            <AdvancedImage
              cldImg={cld.image(getPublicId(imageSrc))}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <span className="text-xs uppercase tracking-wider text-amber-300 mb-2 inline-block">{category}</span>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard; 