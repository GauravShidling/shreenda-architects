import { useState } from 'react';
import { addSampleProjects } from '../../utils/addSampleProjects';

export default function AddSampleProjects() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddSampleProjects = async () => {
    setIsLoading(true);
    setMessage('');
    
    try {
      const success = await addSampleProjects();
      if (success) {
        setMessage('Sample projects added successfully!');
      } else {
        setMessage('Failed to add sample projects. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add Sample Projects</h2>
      <p className="text-gray-600 mb-4">
        Click the button below to add sample projects to your dashboard.
      </p>
      <button
        onClick={handleAddSampleProjects}
        disabled={isLoading}
        className={`px-4 py-2 rounded ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white`}
      >
        {isLoading ? 'Adding Projects...' : 'Add Sample Projects'}
      </button>
      {message && (
        <p className={`mt-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
} 