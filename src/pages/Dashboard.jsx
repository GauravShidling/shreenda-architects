import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4">
              Welcome, {currentUser.displayName || currentUser.email}
            </h2>
            <p className="mb-4">You are now logged in to the Shreenda Architects admin dashboard.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Manage Projects</h3>
                <p>Add, edit, or remove architectural projects.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Contact Messages</h3>
                <p>View and respond to messages from clients.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Team Members</h3>
                <p>Update team information and profiles.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


