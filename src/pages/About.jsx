import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { team } from '../data/projects';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="About Shreenda Architects"
        subtitle="We're a team of passionate architects and designers dedicated to creating exceptional spaces that inspire and endure."
        imageSrc="https://images.unsplash.com/photo-1567449303078-57ad995bd17a?q=80&w=1470&auto=format&fit=crop"
      />
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Story"
            subtitle="From humble beginnings to a leading architectural practice."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Founded in 2017, Shreenda Architects is a Hubli-based architectural firm driven by a passion for creating meaningful spaces. From day one, our philosophy has been simple: keep designs clean and minimal, while infusing them with innovation, elegance, and character.
              </p>
              <p className="text-gray-700 mb-6">
                For us, architecture is more than just fulfilling a brief — it's about bringing a space to life. We believe great design is born from deep conversations with our clients, understanding their vision, and translating it into a space that reflects who they are.
              </p>
              <p className="text-gray-700 mb-6">
                Every project we take on is thoughtfully crafted, with attention to detail at every level — from the big idea to the final finish. Our commitment lies in delivering work that is not only creative but also reliable, timely, and of the highest quality.
              </p>
              <p className="text-gray-700">
                At Shreenda Architects, we don't just build structures — we shape experiences.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1374&auto=format&fit=crop" 
                alt="Architectural building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Our Philosophy"
            subtitle="The principles that guide our approach to architecture and design."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-accent text-5xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Human-Centered Design</h3>
              <p className="text-gray-700">
                We believe architecture should enhance human experience. Every space we design prioritizes the people who will inhabit it, fostering comfort, well-being, and meaningful interactions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-accent text-5xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Sustainable Innovation</h3>
              <p className="text-gray-700">
                Our commitment to sustainability goes beyond meeting standards. We constantly explore innovative solutions that minimize environmental impact while maximizing efficiency and resilience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="text-accent text-5xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Contextual Harmony</h3>
              <p className="text-gray-700">
                Great architecture responds to its context. We design buildings that respect and enhance their surroundings, contributing positively to the urban fabric and natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="The talented professionals behind our award-winning designs."
            centered={true}
          />
          
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-4xl">
              {team.map(member => (
                <div key={member.id} className="text-center">
                  <div className="mb-6 rounded-full overflow-hidden w-56 h-56 mx-auto">
                    <img 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent mb-4">{member.position}</p>
                  <p className="text-gray-600 max-w-md mx-auto">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Values"
            subtitle="The core principles that drive everything we do."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="flex items-start space-x-4">
              <div className="text-accent text-4xl">✦</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We pursue excellence in every aspect of our work, from concept to completion. Our commitment to quality is unwavering, and we continually strive to exceed expectations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-accent text-4xl">✦</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-300">
                  We conduct our business with honesty, transparency, and ethical responsibility. We build relationships based on trust and maintain the highest professional standards.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-accent text-4xl">✦</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe the best results come from meaningful collaboration. We work closely with clients, consultants, and communities to create architecture that truly serves its purpose.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-accent text-4xl">✦</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We embrace creativity and forward thinking. We're not afraid to challenge conventions and explore new ideas that push the boundaries of architectural design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 