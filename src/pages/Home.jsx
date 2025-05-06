import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../contexts/ProjectsContext';
import { services } from '../data/projects';

const Home = () => {
  const { projects } = useProjects();
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Get random 2-3 projects from the projects array
    const getRandomProjects = () => {
      const shuffled = [...projects].sort(() => 0.5 - Math.random());
      const count = Math.min(Math.floor(Math.random() * 2) + 2, projects.length); // Random number between 2-3
      return shuffled.slice(0, count);
    };

    setFeaturedProjects(getRandomProjects());
  }, [projects]);

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Transforming Spaces, Creating Experiences"
        subtitle="Shreenda Architects blends innovative design with functionality to create spaces that inspire. We transform visions into reality through sustainable architecture."
        buttonText="Explore Our Projects"
        buttonLink="/projects"
        imageSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop"
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="About Shreenda Architects"
                subtitle="Crafting spaces that inspire and endure"
                centered={false}
              />
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Shreenda Architects, we believe that great architecture is more than just buildings – it's about creating spaces that enhance lives and inspire communities. With over a decade of experience, our team combines innovative design with practical functionality to deliver exceptional results.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our approach is rooted in understanding our clients' unique needs and aspirations. We work closely with you throughout the process, ensuring that every detail reflects your vision while maintaining the highest standards of design and sustainability.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop" 
                alt="Architectural Design" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Explore some of our award-winning designs and landmark projects that showcase our approach to architecture and design."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {featuredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageSrc={project.imageUrls?.[0] || project.imageUrl}
                featured={true}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services"
            subtitle="Comprehensive architectural services tailored to meet your specific needs and vision."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.map(service => (
              <div key={service.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to create something extraordinary
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 