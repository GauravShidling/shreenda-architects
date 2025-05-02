import { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Refresh auth state function
  const refreshAuthState = () => {
    const user = auth.currentUser;
    setCurrentUser(user);
    console.log("Auth state manually refreshed:", user ? "User is signed in" : "No user");
  };

  // Enhanced sign out function
  async function signOut() {
    console.log("AuthContext: signOut function called");
    
    // First, manually set currentUser to null right away for immediate UI feedback
    setCurrentUser(null);
    
    try {
      // Then perform the actual Firebase sign out
      await firebaseSignOut(auth);
      console.log("AuthContext: Firebase signOut successful");
      
      // Force another state update after sign out is complete
      setTimeout(() => {
        refreshAuthState();
      }, 100);
      
      // Return a resolved promise so that .then() can be used by callers
      return Promise.resolve();
    } catch (error) {
      console.error("AuthContext: Error signing out:", error);
      // If there was an error, check the current state and update accordingly
      refreshAuthState();
      // Return a rejected promise so that .catch() can be used by callers
      return Promise.reject(error);
    }
  }

  // Set up the auth state listener
  useEffect(() => {
    console.log("Setting up auth state listener");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user ? "User signed in" : "User signed out");
      setCurrentUser(user);
      setLoading(false);
    });

    // Make sure to unsubscribe when the component unmounts
    return () => {
      console.log("Cleaning up auth state listener");
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signOut,
    refreshAuthState
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}


