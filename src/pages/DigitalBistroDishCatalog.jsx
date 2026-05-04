import React, { useState, useEffect } from "react";
import { categoryService } from "../apis/api";

export default function DigitalBistroDishCatalog({ 
  food, 
  isEdit = false, 
  onSave, 
  onCancel,
  categories: externalCategories = null 
}) {
  const [categories, setCategories] = useState(externalCategories || []);
  const [formData, setFormData] = useState({
    name: food?.name || "",
    shortDescription: food?.shortDescription || "",
    price: food?.price || "",
    categoryId: food?.categoryId || "",
    isActive: food?.isActive !== false,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(!externalCategories);

  useEffect(() => {
    if (!externalCategories) {
      loadCategories();
    }
  }, [externalCategories]);

  const loadCategories = async () => {
    try {
      const response = await categoryService.getAll(0, 100);
      setCategories(response.data.content || []);
    } catch (error) {
      console.error("Error loading categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData, selectedImage);
    }
  };
  return (
    <div className="bg-background text-on-surface font-body-md">
      <div className="flex h-screen overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-2/5 bg-surface-container-low p-6 lg:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-100">
          <div className="w-full text-center mb-6">
            <h3 className="font-headline-md text-xl lg:text-2xl text-primary mb-2">
              Dish Image
            </h3>
            <p className="text-xs lg:text-label-sm font-label-sm text-on-surface-variant">
              Upload a high-resolution photo
            </p>
          </div>
          <label className="relative group w-full max-w-[280px] md:max-w-none aspect-square bg-white rounded-2xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-secondary-container transition-all overflow-hidden">
            {selectedImage ? (
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
              />
            ) : (
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFTv2wIYL5DNu4b1DeWgb8AiahKw6EFROgfegKcSUS1Q858CcfEcujcxyoY-gcEjnJPKy40VFweSEX84aCJ7ff0sZi8HNZCPRP3fSwZXF03WIGYx54OueF4T0UCjh4blnONqhCs3FLPOokngd13XT6W3uY31191nMgEjlJRrWnVB-j-B4U945vEWQprlvY_5YSjV4D1kroIen_pprjTdrRC92Rid9rXu76w9CHpIecnCVpI_FpEk3QyRHMGrRlLPLc9kGQpSKTjiQ"
                alt="Placeholder"
              />
            )}
            <div className="relative z-10 bg-white/90 backdrop-blur px-5 lg:px-6 py-2.5 lg:py-3 rounded-full flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-sm lg:text-base text-secondary">
                photo_camera
              </span>
              <span className="text-xs lg:text-sm font-bold text-primary">
                {selectedImage ? "Change Photo" : "Upload Photo"}
              </span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-3/5 p-6 lg:p-8 overflow-y-auto custom-scrollbar flex flex-col">
          <div className="flex justify-between items-start mb-6 lg:mb-8">
            <div>
              <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary">
                Item Details
              </h2>
              <p className="font-body-md text-sm lg:text-base text-on-surface-variant">
                {isEdit
                  ? "Update dish information"
                  : "Create a new dish item"}
              </p>
            </div>
            {onCancel && (
              <button
                onClick={onCancel}
                className="hidden md:flex p-2 hover:bg-surface-container rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-stone-400">
                  close
                </span>
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="sm:col-span-2">
                <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                  Dish Name
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container font-body-md text-primary"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter dish name"
                  required
                />
              </div>
              <div>
                <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container appearance-none"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleFormChange}
                    required
                    disabled={loading}
                  >
                    <option value="">
                      {loading ? "Loading categories..." : "Select Category"}
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                    expand_more
                  </span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                  Price ($)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">
                    $
                  </span>
                  <input
                    className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg pl-8 pr-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container font-price-label text-base lg:text-price-label text-primary"
                    step="0.01"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                  Description
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container font-body-md text-primary resize-none"
                  rows={3}
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleFormChange}
                  placeholder="Enter dish description"
                  required
                />
              </div>
              <div>
                <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                  Status
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container appearance-none"
                    value={formData.isActive ? "true" : "false"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isActive: e.target.value === "true",
                      }))
                    }
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 border-t border-stone-100 mt-auto">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 text-stone-500 font-semibold hover:text-stone-700 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="w-full sm:w-auto order-1 sm:order-2 bg-secondary-container text-on-secondary-container px-8 lg:px-10 py-3 rounded-lg font-bold shadow-lg shadow-secondary-container/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {isEdit ? "Update Food Item" : "Create Food Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
