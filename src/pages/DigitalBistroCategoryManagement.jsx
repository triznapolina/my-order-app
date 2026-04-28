import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categoryService } from '../apis/api';

export default function DigitalBistroCategoryManagement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    shortDescription: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadCategory = useCallback(async () => {
    try {
      setLoading(true);
      const response = await categoryService.getById(id);
      setFormData({
        name: response.data.name || '',
        shortDescription: response.data.shortDescription || ''
      });
    } catch (err) {
      setError('Failed to load category');
      console.error('Error loading category:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isEdit) {
      loadCategory();
    }
  }, [isEdit, loadCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEdit) {
        await categoryService.update(id, formData);
      } else {
        await categoryService.create(formData);
      }
      navigate('/admin-categories');
    } catch (err) {
      setError(isEdit ? 'Failed to update category' : 'Failed to create category');
      console.error('Error saving category:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading && isEdit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-900 mx-auto"></div>
          <p className="mt-4 text-stone-600">Loading category...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate('/admin-categories')}
            className="flex items-center gap-2 text-stone-600 hover:text-emerald-900 transition-colors mb-4"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Categories
          </button>
          <h1 className="text-2xl font-bold text-primary">
            {isEdit ? 'Edit Category' : 'Create New Category'}
          </h1>
          <p className="text-stone-600 mt-2">
            {isEdit ? 'Update the category details below.' : 'Fill in the details to create a new category.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter category name"
            />
          </div>

          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-stone-700 mb-2">
              Description
            </label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter category description"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : (isEdit ? 'Update Category' : 'Create Category')}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin-categories')}
              className="px-6 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
