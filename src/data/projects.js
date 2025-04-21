// Project data
// Import images to ensure they're properly processed by Vite
import complex1 from '../assets/projects/commercial-complex/Complex1.jpg';
import complex2 from '../assets/projects/commercial-complex/Complex2.jpeg';
import res1 from '../assets/projects/residential/Res1.jpeg';
import res2 from '../assets/projects/residential/Res2.jpeg';
import cafe1 from '../assets/projects/commercial-cafe/Cafe1.jpg';
import cafe2 from '../assets/projects/commercial-cafe/Cafe2.jpg';
import venue1 from '../assets/projects/commercial-event-spaces/Venue1.jpeg';

// Projects data
export const projects = [
  {
    id: 1,
    title: "Azure Skyline Tower",
    category: "Commercial (Complex)",
    location: "New York, NY",
    year: 2023,
    description: "A 45-story office building with a distinctive curved glass facade that maximizes natural light and provides panoramic views of the city. The tower incorporates green spaces at various levels and utilizes sustainable materials and energy-efficient systems. The design features a double-skin facade that improves thermal performance and reduces energy consumption by 30% compared to conventional buildings.",
    imageSrc: complex1,
    featured: true,
    gallery: [
      complex1
    ],
    details: {
      area: "75,000 sq.m",
      client: "Skyline Developments Inc.",
      services: "Architectural Design, Interior Design, Landscape Design",
      awards: "AIA Design Excellence Award 2023",
      sustainability: "LEED Platinum Certified, 30% energy reduction, rainwater harvesting systems, green roof terraces"
    }
  },
  {
    id: 2,
    title: "Metropolitan Business Hub",
    category: "Commercial (Complex)",
    location: "Chicago, IL",
    year: 2022,
    description: "A modern commercial complex designed to foster collaboration between businesses. The space features open atriums, shared conference facilities, and a sustainable design that reduces energy consumption while providing a comfortable work environment. The innovative spatial organization promotes interaction between different companies while maintaining privacy where needed.",
    imageSrc: complex2,
    featured: false,
    gallery: [
      complex2
    ],
    details: {
      area: "30,000 sq.m",
      client: "Urban Core Developers",
      services: "Architectural Design, Space Planning, Sustainability Consulting",
      awards: "Chicago Architectural Excellence Award 2022",
      sustainability: "LEED Gold Certified, solar roof panels, high-efficiency HVAC systems, passive cooling design"
    }
  },
  {
    id: 3,
    title: "Harmony Residence",
    category: "Residential",
    location: "Los Angeles, CA",
    year: 2022,
    description: "A modern residential complex designed with a focus on community living. The development includes shared gardens, recreational areas, and incorporates eco-friendly features like rainwater harvesting and solar panels. The architectural language balances privacy and community, creating spaces for interaction while ensuring each unit maintains its sense of home.",
    imageSrc: res1,
    featured: false,
    gallery: [
      res1
    ],
    details: {
      area: "25,000 sq.m (120 units)",
      client: "West Coast Residential Group",
      services: "Master Planning, Architectural Design, Landscape Architecture",
      awards: "Residential Design Award of Merit 2022",
      sustainability: "Net-zero energy design, community gardens, grey water recycling system"
    }
  },
  {
    id: 4,
    title: "Serene Living Apartments",
    category: "Residential",
    location: "Seattle, WA",
    year: 2021,
    description: "A luxury apartment complex that balances private and communal spaces. Each unit offers panoramic views while the building's amenities include rooftop gardens, fitness facilities, and environmentally-conscious construction methods. The design responds to the Pacific Northwest climate with covered outdoor spaces and ample natural light to counter the region's gloomy days.",
    imageSrc: res2,
    featured: true,
    gallery: [
      res2
    ],
    details: {
      area: "18,500 sq.m (80 units)",
      client: "Pacific Habitats LLC",
      services: "Architectural Design, Interior Design, Landscape Design",
      awards: "Northwest Design Innovation Award 2021",
      sustainability: "Passive house standards, green roof system, locally-sourced materials, rainwater collection"
    }
  },
  {
    id: 5,
    title: "Artisan Brew Café",
    category: "Commercial (Cafe)",
    location: "Austin, TX",
    year: 2021,
    description: "A modern café designed with a warm, inviting atmosphere. The space features locally-sourced materials, custom furniture, and an open layout that encourages social interaction while maintaining a cozy ambiance. The interior design showcases the coffee-making process with a visible roasting area and brew bar, creating an educational experience for visitors.",
    imageSrc: cafe1,
    featured: false,
    gallery: [
      cafe1
    ],
    details: {
      area: "350 sq.m",
      client: "Artisan Coffee Roasters",
      services: "Interior Design, Custom Furniture Design, Branding Integration",
      awards: "Hospitality Design Award 2021",
      sustainability: "Reclaimed wood elements, energy-efficient appliances, composting program, zero-waste initiatives"
    }
  },
  {
    id: 6,
    title: "Urban Grind Coffee House",
    category: "Commercial (Cafe)",
    location: "Portland, OR",
    year: 2020,
    description: "A stylish café that combines industrial elements with natural materials. The design emphasizes sustainability with reclaimed wood features, energy-efficient lighting, and a layout that maximizes natural light throughout the day. The space transforms from a quiet morning workspace to a vibrant evening social hub with flexible seating arrangements and adaptable lighting systems.",
    imageSrc: cafe2,
    featured: false,
    gallery: [
      cafe2
    ],
    details: {
      area: "280 sq.m",
      client: "Urban Grind Collective",
      services: "Adaptive Reuse Design, Interior Architecture, Lighting Design",
      awards: "Small Business Design Excellence 2020",
      sustainability: "Repurposed industrial building, living wall installation, water-saving fixtures, locally-sourced materials"
    }
  },
  {
    id: 7,
    title: "Luminous Event Pavilion",
    category: "Commercial (Event Spaces)",
    location: "Boston, MA",
    year: 2023,
    description: "A versatile event space designed to host everything from corporate gatherings to wedding receptions. The pavilion features flexible partitioning, state-of-the-art acoustics, and dramatic lighting design that can transform the atmosphere for any occasion. The transparent façade connects indoor and outdoor spaces while providing stunning views of the surrounding landscape.",
    imageSrc: venue1,
    featured: true,
    gallery: [
      venue1
    ],
    details: {
      area: "1,200 sq.m",
      client: "Boston Events Corporation",
      services: "Architectural Design, Acoustic Engineering, Lighting Design",
      awards: "Innovative Venue Design Award 2023",
      sustainability: "Smart building management system, solar shading, high-performance glazing, natural ventilation system"
    }
  }
];

// Service data
export const services = [
  {
    id: 1,
    title: "Architectural Design",
    description: "Comprehensive architectural design services for all project types and scales.",
    icon: "✏️"
  },
  {
    id: 2,
    title: "Interior Design",
    description: "Thoughtful interior designs that balance aesthetics, functionality, and client needs.",
    icon: "🏠"
  },
  {
    id: 3,
    title: "Urban Planning",
    description: "Strategic urban planning solutions that create sustainable, vibrant communities.",
    icon: "🏙️"
  },
  {
    id: 4,
    title: "Landscape Architecture",
    description: "Creating outdoor spaces that complement buildings and enhance the environment.",
    icon: "🌳"
  }
];

// Team data
export const team = [
  {
    id: 1,
    name: "Vishal Shibargatti",
    position: "Co-founder & Principal Architect",
    bio: "With a keen eye for design and a passion for innovation, Vishal brings creative vision to every project. His expertise in blending aesthetics with functionality ensures that each design not only looks beautiful but works perfectly for its intended purpose.",
    imageSrc: "https://raw.githubusercontent.com/GauravShidling/shreenda-architects/main/src/assets/team/VishalShibargatti.jpg"
  },
  {
    id: 2,
    name: "Vinay Shidling",
    position: "Co-founder & Principal Head of Execution",
    bio: "Vinay's exceptional project management skills and attention to detail ensure that designs move seamlessly from concept to completion. His expertise in construction processes and materials brings practicality and feasibility to our most ambitious designs.",
    imageSrc: "https://raw.githubusercontent.com/GauravShidling/shreenda-architects/main/src/assets/team/VinayShidling.png"
  }
]; 