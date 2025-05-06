import { createContext, useContext, useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const ProjectsContext = createContext();

export function useProjects() {
  return useContext(ProjectsContext);
}

export function ProjectsProvider({ children }) {
  const { currentUser } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const projectsRef = collection(db, 'projects');
      const q = query(projectsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Project data:', data); // Debug log
        return {
          id: doc.id,
          ...data,
          imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [data.imageUrl].filter(Boolean)
        };
      });
      console.log('Fetched projects:', projectsData); // Debug log
      setProjects(projectsData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new project
  const addProject = async (projectData) => {
    try {
      if (!currentUser) {
        throw new Error('User must be authenticated to add projects');
      }

      const projectsRef = collection(db, 'projects');
      const newProject = {
        ...projectData,
        imageUrls: Array.isArray(projectData.imageUrls) ? projectData.imageUrls : [projectData.imageUrl].filter(Boolean),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: currentUser.uid
      };
      
      console.log('Adding project:', newProject); // Debug log
      const docRef = await addDoc(projectsRef, newProject);
      console.log('Project added with ID:', docRef.id);
      
      const projectWithId = {
        ...newProject,
        id: docRef.id
      };
      
      setProjects(prevProjects => [projectWithId, ...prevProjects]);
      
      return projectWithId;
    } catch (err) {
      console.error('Error adding project:', err);
      setError(err.message);
      throw err;
    }
  };

  // Update a project
  const updateProject = async (projectId, projectData) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      const updatedProject = {
        ...projectData,
        updatedAt: new Date().toISOString()
      };
      await updateDoc(projectRef, updatedProject);
      await fetchProjects(); // Refresh the projects list
    } catch (err) {
      setError(err.message);
      console.error('Error updating project:', err);
      throw err;
    }
  };

  // Delete a project
  const deleteProject = async (projectId) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      await deleteDoc(projectRef);
      await fetchProjects(); // Refresh the projects list
    } catch (err) {
      setError(err.message);
      console.error('Error deleting project:', err);
      throw err;
    }
  };

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const value = {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    fetchProjects
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
} 