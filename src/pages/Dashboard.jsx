import { useAuth } from '../contexts/AuthContext';
import ProjectsManager from '../components/dashboard/ProjectsManager';

export default function Dashboard() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div className="text-center p-4">Please log in to access the dashboard.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <ProjectsManager />
          </div>
        </div>
      </div>
    </div>
  );
}


