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
    title: "Upcoming Commercial Complex in Koppikar road, Hubli",
    category: "Commercial (Complex)",
    location: "Hubli, Karnataka",
    year: 2023,
    description: "A modern commercial complex designed to foster collaboration between businesses. The space features open atriums, shared conference facilities, and a sustainable design that reduces energy consumption while providing a comfortable work environment. The innovative spatial organization promotes interaction between different companies while maintaining privacy where needed.",
    imageSrc: complex1,
    featured: true,
    gallery: [
      complex1
    ],
    // details: {
    //   area: "75,000 sq.m",
    //   client: "Skyline Developments Inc.",
    //   services: "Architectural Design, Interior Design, Landscape Design",
    //   awards: "AIA Design Excellence Award 2023",
    //   sustainability: "LEED Platinum Certified, 30% energy reduction, rainwater harvesting systems, green roof terraces"
    // }
  },
  {
    id: 2,
    title: "Apoorva Trade Center",
    category: "Commercial (Complex)",
    location: "Hubli, Karnataka",
    year: 2022,
    description: "Giving this 58 year old(DESAI CHAMBERS) commercial structure a new look.This exquisite building exterior is a result of our teams unwavering dedication to crafting unique and impactful designs that stand the test of time.From the bold lines to jextoposition of boxes every detail is carefully considered to ensure harmonious blend of form and function",
    imageSrc: complex2,
    featured: false,
    gallery: [
      complex2
    ],
    // details: {
    //   area: "30,000 sq.m",
    //   client: "Urban Core Developers",
    //   services: "Architectural Design, Space Planning, Sustainability Consulting",
    //   awards: "Chicago Architectural Excellence Award 2022",
    //   sustainability: "LEED Gold Certified, solar roof panels, high-efficiency HVAC systems, passive cooling design"
    // }
  },
  {
    id: 3,
    title: "Shri Hari Nivas",
    category: "Residential",
    location: "Hubli, Karnataka",
    year: 2022,
    description: "An Ode to Elegance and Sophistication. ✨Every corner is designed with care, where beauty meets functionality.Embrace the art of interior design that transforms spaces into a symphony of style and comfort.",
    imageSrc: res1,
    featured: false,
    gallery: [
      res1
    ],
    // details: {
    //   area: "25,000 sq.m (120 units)",
    //   client: "West Coast Residential Group",
    //   services: "Master Planning, Architectural Design, Landscape Architecture",
    //   awards: "Residential Design Award of Merit 2022",
    //   sustainability: "Net-zero energy design, community gardens, grey water recycling system"
    // }
  },
  {
    id: 4,
    title: "Serene Living ",
    category: "Residential",
    location: "Hubli, Karnataka",
    year: 2021,
    description: "The minimalist modern facade of the Residence showcases material planes stacked on each other, and the projections that form a visual connect on different levels.",
    imageSrc: res2,
    featured: true,
    gallery: [
      res2
    ],
    // details: {
    //   area: "18,500 sq.m (80 units)",
    //   client: "Pacific Habitats LLC",
    //   services: "Architectural Design, Interior Design, Landscape Design",
    //   awards: "Northwest Design Innovation Award 2021",
    //   sustainability: "Passive house standards, green roof system, locally-sourced materials, rainwater collection"
    // }
  },
  {
    id: 5,
    title: "Drnk Lab",
    category: "Commercial (Cafe)",
    location: "Hubli, Karnataka",
    year: 2021,
    description: "The detailed amalgamation of contemporary trends like pine, metal, open ac ducts, wall art in combination with with raw shade of grey creates a space that professes a sense of rustic chic.",
    imageSrc: cafe1,
    featured: false,
    gallery: [
      cafe1
    ],
    // details: {
    //   area: "350 sq.m",
    //   client: "Artisan Coffee Roasters",
    //   services: "Interior Design, Custom Furniture Design, Branding Integration",
    //   awards: "Hospitality Design Award 2021",
    //   sustainability: "Reclaimed wood elements, energy-efficient appliances, composting program, zero-waste initiatives"
    // }
  },
  {
    id: 6,
    title: "Puzzles Cafe",
    category: "Commercial (Cafe)",
    location: "Hubli, Karnataka",
    year: 2020,
    description: "A stylish café that combines industrial elements with natural materials. The design emphasizes sustainability with reclaimed wood features, energy-efficient lighting, and a layout that maximizes natural light throughout the day. The space transforms from a quiet morning workspace to a vibrant evening social hub with flexible seating arrangements and adaptable lighting systems.",
    imageSrc: cafe2,
    featured: false,
    gallery: [
      cafe2
    ],
    // details: {
    //   area: "280 sq.m",
    //   client: "Urban Grind Collective",
    //   services: "Adaptive Reuse Design, Interior Architecture, Lighting Design",
    //   awards: "Small Business Design Excellence 2020",
    //   sustainability: "Repurposed industrial building, living wall installation, water-saving fixtures, locally-sourced materials"
    // }
  },
  {
    id: 7,
    title: "Trilok Lawns",
    category: "Commercial (Event Spaces)",
    location: "Hubli, Karnataka",
    year: 2023,
    description: "The ideology behind the design was to fuse the outdoor elements into the design, and the presence of nature around was so strong that indoor and outdoor got integrated effortlessly, almost every space opening in three directions is connecting with the landscape all around.The combination of flex stone with metal jaalis and the blend of landscape with soft touch of lighting, creates experience that gives lawn and entire space a premium and timeless feel.",
    imageSrc: venue1,
    featured: true,
    gallery: [
      venue1
    ],
    // details: {
    //   area: "1,200 sq.m",
    //   client: "Boston Events Corporation",
    //   services: "Architectural Design, Acoustic Engineering, Lighting Design",
    //   awards: "Innovative Venue Design Award 2023",
    //   sustainability: "Smart building management system, solar shading, high-performance glazing, natural ventilation system"
    // }
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