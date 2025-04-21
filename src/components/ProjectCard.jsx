import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, category, imageSrc, featured = false }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 ${featured ? 'md:col-span-2 row-span-2' : ''}`}>
      <Link to={`/projects/${id}`}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
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