import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { restaurantService } from '../apis/api';

export default function DigitalBistroBranchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    address: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadBranch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await restaurantService.getById(id);
      setFormData({
        address: response.data.address || '',
        phone: response.data.phone || ''
       
      });
    } catch (err) {
      setError('Failed to load branch');
      console.error('Error loading branch:', err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isEdit) {
      loadBranch();
    }
  }, [isEdit, loadBranch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEdit) {
        await restaurantService.update(id, formData);
      } else {
        await restaurantService.create(formData);
      }
      navigate('/admin-branches');
    } catch (err) {
      setError(isEdit ? 'Failed to update branch' : 'Failed to create branch');
      console.error('Error saving branch:', err);
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
          <p className="mt-4 text-stone-600">Loading branch...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate('/admin-branches')}
            className="flex items-center gap-2 text-stone-600 hover:text-emerald-900 transition-colors mb-4"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Branches
          </button>
          <h1 className="text-2xl font-bold text-primary">
            {isEdit ? 'Edit Branch' : 'Create New Branch'}
          </h1>
          <p className="text-stone-600 mt-2">
            {isEdit ? 'Update the branch details below.' : 'Fill in the details to create a new branch.'}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter branch address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Saving...' : (isEdit ? 'Update Branch' : 'Create Branch')}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin-branches')}
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
