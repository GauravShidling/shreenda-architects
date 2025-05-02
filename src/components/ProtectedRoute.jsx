import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Check if user is not logged in
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Check if user is not an admin
  if (currentUser.email !== 'admin@shreenda.com') {
    return <Navigate to="/" />;
  }

  // User is logged in and is an admin
  return children;
};

export default ProtectedRoute;


