import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectsContext';
import SectionTitle from '../components/SectionTitle';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../config/cloudinary';

const ProjectDetail = () => {
  const { id } = useParams();
  const { projects } = useProjects();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
    // Reset image index when project changes
    setCurrentImageIndex(0);
  }, [id, projects]);

  // Extract the public ID from the Cloudinary URL
  const getPublicId = (url) => {
    if (!url) return null;
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const imageUrls = Array.isArray(project.imageUrls) ? project.imageUrls : [project.imageUrl].filter(Boolean);

  return (
    <div>
      {/* Project Header */}
      <div className="bg-gray-900 py-24 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {imageUrls[0] && (
            <AdvancedImage
              cldImg={cld.image(getPublicId(imageUrls[0]))}
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
          )}
        </div>
        <div className="container-custom relative z-10">
          <span className="text-amber-300 text-sm uppercase tracking-wider mb-2 inline-block">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center text-gray-300 gap-6">
            <p className="flex items-center">
              <span className="mr-2">📍</span>
              {project.location}
            </p>
            <p className="flex items-center">
              <span className="mr-2">📅</span>
              {project.year}
            </p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Gallery */}
            <div>
              {imageUrls.length > 0 && (
                <>
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <AdvancedImage
                      cldImg={cld.image(getPublicId(imageUrls[currentImageIndex]))}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  {imageUrls.length > 1 && (
                    <div className="flex gap-3 mt-4">
                      {imageUrls.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`border-2 rounded overflow-hidden ${
                            index === currentImageIndex ? 'border-accent' : 'border-transparent'
                          }`}
                        >
                          <AdvancedImage
                            cldImg={cld.image(getPublicId(image))}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-16 h-16 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Right Column - Project Info */}
            <div>
              <SectionTitle
                title="Project Overview"
                subtitle=""
                centered={false}
              />
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-32">Category:</span>
                    <span className="text-gray-700">{project.category}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Location:</span>
                    <span className="text-gray-700">{project.location}</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-32">Year:</span>
                    <span className="text-gray-700">{project.year}</span>
                  </li>
                </ul>
              </div>

              <Link to="/projects" className="btn btn-outline">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="More Projects"
            subtitle="Explore other similar architectural works"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map(relatedProject => (
                <div key={relatedProject.id} className="group relative overflow-hidden rounded-lg shadow-md">
                  <Link to={`/projects/${relatedProject.id}`}>
                    {relatedProject.imageUrls?.[0] && (
                      <AdvancedImage
                        cldImg={cld.image(getPublicId(relatedProject.imageUrls[0]))}
                        alt={relatedProject.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{relatedProject.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail; 