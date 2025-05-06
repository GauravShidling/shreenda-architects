import { useState, useEffect } from 'react';
import { useProjects } from '../../contexts/ProjectsContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import cld, { uploadPreset } from '../../config/cloudinary';

export default function ProjectsManager() {
  const { projects, loading, error, addProject, updateProject, deleteProject } = useProjects();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrls: [],
    category: '',
    location: '',
    year: ''
  });

  // Get unique categories from existing projects
  const existingCategories = [...new Set(projects.map(project => project.category))];

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    const category = project.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  // Sort categories alphabetically
  const sortedCategories = Object.keys(projectsByCategory).sort();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      if (value === 'new') {
        setShowNewCategoryInput(true);
        setFormData(prev => ({ ...prev, category: '' }));
      } else {
        setShowNewCategoryInput(false);
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNewCategoryInput = (e) => {
    const newCategory = e.target.value;
    setFormData(prev => ({
      ...prev,
      category: newCategory
    }));
  };

  const handleCancelNewCategory = () => {
    setShowNewCategoryInput(false);
    setFormData(prev => ({
      ...prev,
      category: ''
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    // Check total size (max 20MB for all images)
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);
    if (totalSize > 20 * 1024 * 1024) {
      alert('Total size of all images should be less than 20MB');
      return;
    }

    setIsUploading(true);
    const uploadedUrls = [];

    try {
      for (const file of files) {
        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('upload_preset', uploadPreset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: uploadData
          }
        );

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        if (data.secure_url) {
          uploadedUrls.push(data.secure_url);
        }
      }

      setFormData(prev => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...uploadedUrls]
      }));
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Error uploading images. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      alert('Please sign in to add projects');
      navigate('/login');
      return;
    }
    
    if (!formData.title || !formData.description || formData.imageUrls.length === 0 || 
        !formData.category || !formData.location || !formData.year) {
      alert('Please fill in all fields and upload at least one image');
      return;
    }

    try {
      const projectData = {
        title: formData.title,
        description: formData.description,
        imageUrls: formData.imageUrls,
        category: formData.category,
        location: formData.location,
        year: formData.year,
        userId: currentUser.uid
      };

      if (editingProject) {
        await updateProject(editingProject.id, projectData);
        alert('Project updated successfully!');
      } else {
        await addProject(projectData);
        alert('Project added successfully!');
      }
      resetForm();
    } catch (error) {
      console.error('Error saving project:', error);
      alert(`Failed to save project: ${error.message}`);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrls: [],
      category: '',
      location: '',
      year: ''
    });
    setIsAdding(false);
    setEditingProject(null);
    setShowNewCategoryInput(false);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData(project);
    setIsAdding(true);
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Project
        </button>
      </div>

      {isAdding && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">
            {editingProject ? 'Edit Project' : 'Add New Project'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              {!showNewCategoryInput ? (
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  {existingCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                  <option value="new">+ Add New Category</option>
                </select>
              ) : (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={formData.category}
                    onChange={handleNewCategoryInput}
                    placeholder="Enter new category"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleCancelNewCategory}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Back to categories
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Year</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Images</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                multiple
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                  disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {isUploading && (
                <div className="mt-2 text-sm text-blue-600">
                  Uploading images...
                </div>
              )}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {formData.imageUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="h-32 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {editingProject ? 'Update Project' : 'Add Project'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects by Category */}
      <div className="space-y-8">
        {sortedCategories.map(category => (
          <div key={category} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {projectsByCategory[category].map(project => {
                const imageUrls = Array.isArray(project.imageUrls) ? project.imageUrls : [project.imageUrl].filter(Boolean);
                return (
                  <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                    {imageUrls && imageUrls.length > 0 ? (
                      <div className="h-48 overflow-hidden">
                        <AdvancedImage
                          cldImg={cld.image(imageUrls[0].split('/').pop().split('.')[0])}
                          className="w-full h-full object-cover"
                          alt={project.title}
                          onError={(e) => {
                            console.error('Error loading image:', imageUrls[0]);
                            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {project.location} • {project.year}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(project)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 