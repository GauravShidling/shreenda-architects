import { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import heroImage from '../assets/projects/residential/Res1.jpeg';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Projects"
        subtitle="Explore our diverse portfolio of architectural designs across various sectors."
        imageSrc={heroImage}
      />
      
      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Project Portfolio"
            subtitle="Browse through our award-winning projects that showcase our expertise and passion for exceptional architecture."
            centered={true}
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  filter === category 
                    ? 'bg-accent text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">
                No projects match the selected filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Our Project Process"
            subtitle="How we bring architectural visions to life through our structured approach."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm z-10 relative h-full">
                <div className="text-accent font-bold text-4xl mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  We begin by understanding your vision, requirements, and constraints through in-depth discussions and site analysis.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-accent z-0 transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm z-10 relative h-full">
                <div className="text-accent font-bold text-4xl mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Concept Design</h3>
                <p className="text-gray-600">
                  We develop initial design concepts that align with your vision, utilizing sketches, diagrams, and 3D models to explore possibilities.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-accent z-0 transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm z-10 relative h-full">
                <div className="text-accent font-bold text-4xl mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="text-gray-600">
                  We refine the chosen concept into detailed designs, addressing technical aspects, materials, and systems integration.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-accent z-0 transform -translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm z-10 relative h-full">
                <div className="text-accent font-bold text-4xl mb-4">04</div>
                <h3 className="text-xl font-bold mb-3">Realization</h3>
                <p className="text-gray-600">
                  We oversee construction to ensure the design intent is maintained, collaborating closely with contractors to bring the vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 