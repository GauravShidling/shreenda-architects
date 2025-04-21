import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects, services } from '../data/projects';

const Home = () => {
  // Filter projects to show featured ones
  const featuredProjects = projects.filter(project => project.featured);

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
          <SectionTitle 
            title="Innovative Architecture Firm"
            subtitle="Shreenda Architects is a full-service architectural firm committed to excellence in design and client satisfaction. We create spaces that resonate with purpose and beauty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Founded in 2005, Shreenda Architects has grown into a team of dedicated professionals who bring expertise and passion to every project. We believe that great architecture goes beyond aesthetics – it enhances lives and contributes positively to communities and the environment.
              </p>
              <p className="text-gray-700 mb-6">
                Our collaborative approach ensures that each project is a true reflection of our clients' needs and aspirations, balanced with our commitment to innovative and sustainable design solutions.
              </p>
              <div>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1374&auto=format&fit=crop" 
                alt="Architecture team at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
                imageSrc={project.imageSrc}
                featured={project.featured}
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
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Vision into Reality?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create spaces that inspire and endure. Our team is ready to bring your architectural dreams to life.
          </p>
          <Link to="/contact" className="btn bg-white text-accent hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 