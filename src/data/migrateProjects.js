import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Sample projects data
const projects = [
  {
    title: "Luxury Villa",
    description: "A modern luxury villa with panoramic views",
    imageUrl: "https://res.cloudinary.com/dk680gcwh/image/upload/v1714675200/shreenda-architects/projects/villa.jpg",
    category: "Residential",
    location: "Bangalore",
    year: "2023"
  },
  {
    title: "Corporate Office",
    description: "Contemporary office space design",
    imageUrl: "https://res.cloudinary.com/dk680gcwh/image/upload/v1714675200/shreenda-architects/projects/office.jpg",
    category: "Commercial",
    location: "Mumbai",
    year: "2022"
  },
  {
    title: "Shopping Complex",
    description: "Modern retail space with sustainable design",
    imageUrl: "https://res.cloudinary.com/dk680gcwh/image/upload/v1714675200/shreenda-architects/projects/shopping.jpg",
    category: "Commercial",
    location: "Delhi",
    year: "2023"
  }
];

// Function to add projects to Firebase
async function addProjectsToFirebase() {
  try {
    const projectsRef = collection(db, 'projects');
    
    for (const project of projects) {
      const projectData = {
        ...project,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      await addDoc(projectsRef, projectData);
      console.log(`Added project: ${project.title}`);
    }
    
    console.log('All projects added successfully!');
  } catch (error) {
    console.error('Error adding projects:', error);
  }
}

// Run the function
addProjectsToFirebase(); 