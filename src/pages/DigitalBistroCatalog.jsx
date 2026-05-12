import { useEffect, useState, useCallback } from "react";
import { foodService, categoryService } from "../apis/api";

export default function DigitalBistroCatalog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    price: "",
    categoryId: "",
    isActive: true,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [foodsRes, categoriesRes] = await Promise.all([
        foodService.getAllFoods(page, size),
        categoryService.getAll(0, 100),
      ]);

      setFoods(foodsRes.data.content || []);
      setTotalPages(foodsRes.data.totalPages || 0);
      setTotalElements(foodsRes.data.totalElements || 0);
      setCategories(categoriesRes.data.content || []);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }, [page, size]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  const handleAddNew = () => {
    setEditingFood(null);
    setFormData({
      name: "",
      shortDescription: "",
      ingredientsDescription: "",
      price: "",
      categoryId: "",
      isActive: true,
    });
    setSelectedImage(null);
    setShowModal(true);
  };

  const handleEdit = (food) => {
    setEditingFood(food);
    setFormData({
      name: food.name,
      shortDescription: food.shortDescription,
      ingredientsDescription: food.ingredientsDescription,
       price:
      food.price != null
        ? Number(
            food.price
          ).toFixed(2)
        : "",
      categoryId: food.categoryId,
      isActive: food.isActive || true,
    });
    
      setPreviewUrl(
        food?.id ? `http://localhost:8080/catalog/images/${food.id}` : null
      );

    setSelectedImage(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Вы уверены, что хотите удалить это блюдо?")) {
      try {
        await foodService.deleteFood(id);
        fetchData();
      } catch (error) {
        console.error("Error deleting food:", error);
      }
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

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  }
};
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (editingFood) {
        const updateData = {
          name: formData.name,
          shortDescription: formData.shortDescription,
          price: parseFloat(formData.price),
          categoryId: parseInt(formData.categoryId),
          isActive: formData.isActive,
          ingredientsDescription: formData.ingredientsDescription,
        };
        await foodService.updateFood(editingFood.id, updateData, selectedImage);
      } else {
        const foodData = {
          name: formData.name,
          shortDescription: formData.shortDescription,
          ingredientsDescription: formData.ingredientsDescription,
          price: parseFloat(formData.price),
          categoryId: parseInt(formData.categoryId),
          isActive: true,
        };
        await foodService.createFood(
          foodData,
          selectedImage
        );
      }
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error("Error saving food:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingFood(null);
    setFormData({
      name: "",
      shortDescription: "",
      ingredientsDescription: "",
      price: "",
      categoryId: "",
      isActive: true,
    });
    setSelectedImage(null);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.name || "N/A";
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          id="mobile-overlay"
          onClick={closeSidebar}
        />
      )}

      {/* NavigationDrawer (Shared Component) */}
      <aside
        className={`flex flex-col fixed left-0 top-0 h-screen py-6 px-4 w-64 border-r border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 font-['Epilogue'] antialiased tracking-tight z-50 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out`}
        id="sidebar"
      >
        <div className="mb-10 px-4 flex justify-between items-center">
          <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50">
            Bistro Admin
          </span>
          <button
            className="lg:hidden text-stone-500 hover:text-primary"
            onClick={closeSidebar}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <a
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg transition-transform active:scale-95 cursor-pointer"
            href="/admin-menu"
          >
            <span
              className="material-symbols-outlined active-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              menu_book
            </span>
            <span className="text-body-md">Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-categories"
          >
            <span className="material-symbols-outlined">category</span>
            <span className="text-body-md">Categories</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-branches"
          >
            <span className="material-symbols-outlined">store</span>
            <span className="text-body-md">Branches</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-orders"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="text-body-md">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-body-md">Users</span>
          </a>
        </nav>
      </aside>

      {/* TopAppBar (Shared Component) */}
      <header className="flex justify-between items-center px-4 md:px-8 h-16 sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm font-['Epilogue'] font-medium">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full p-2 focus:ring-2 focus:ring-emerald-500 transition-all text-emerald-900 dark:text-emerald-500"
            onClick={toggleSidebar}
            type="button"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-xl">
          {/* Page Header with Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-label-sm font-bold text-secondary uppercase tracking-widest block mb-xs">
                Management
              </span>
              <h2 className="text-display-xl font-display-xl text-primary mb-2">
                Catalog
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Curate your digital bistro offerings and manage item availability.
              </p>
            </div>
            <div className="flex gap-md w-full md:w-auto">
              <button
                onClick={handleAddNew}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all w-full md:w-auto"
              >
                <span className="material-symbols-outlined">add</span>
                Add New Item
              </button>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">
                Total Dishes
              </span>
              <div className="text-headline-lg font-bold mt-2">
                {totalElements}
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">
                Active Menu
              </span>
              <div className="text-headline-lg font-bold mt-2">
                {totalElements > 0
                  ? Math.round(
                      (foods.filter((f) => f.isActive).length / foods.length) *
                        100
                    )
                  : 0}
                %
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">
                Categories
              </span>
              <div className="text-headline-lg font-bold mt-2">
                {categories.length}
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">
                Last Update
              </span>
              <div className="text-headline-lg font-bold mt-2 text-secondary">
                Now
              </div>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden border border-surface-container-highest">
            <div className="overflow-x-auto">
              {loading ? (
                <div className="px-lg py-lg text-center">Loading...</div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-surface-container-highest">
                      <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                        Item Name
                      </th>
                      <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                        Category
                      </th>
                      <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-right">
                        Price
                      </th>
                      <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-center">
                        Status
                      </th>
                      <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-highest">
                    {foods.map((food) => (
                      <tr
                        key={food.id}
                        className="hover:bg-surface-container-low transition-colors group"
                      >
                        <td className="px-lg py-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
  <img
    className="w-full h-full object-cover"
    src={`http://localhost:8080/catalog/images/${food.id}`}
    alt={food.name}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "/no-image.png"; // fallback
    }}
  />
</div>
                            <div>
                              <div className="font-bold text-primary">
                                {food.name}
                              </div>
                              <div className="text-sm text-on-surface-variant truncate">
                                {food.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-lg py-lg">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm">
                            {getCategoryName(food.categoryId)}
                          </span>
                        </td>
                        <td className="px-lg py-lg text-right font-bold text-primary">
                          ${parseFloat(food.price).toFixed(2)}
                        </td>
                        <td className="px-lg py-lg text-center">
                          <span
                            className={`px-2 py-1 rounded-lg text-label-sm font-bold ${
                              food.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {food.isActive ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td className="px-lg py-lg text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity">
                            <button
                              onClick={() => handleEdit(food)}
                              className="p-2 hover:bg-primary/5 rounded-full text-primary"
                              title="Edit"
                            >
                              <span className="material-symbols-outlined">
                                edit_note
                              </span>
                            </button>
                            <button
                              onClick={() => handleDelete(food.id)}
                              className="p-2 hover:bg-error/5 rounded-full text-error"
                              title="Delete"
                            >
                              <span className="material-symbols-outlined">
                                delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Pagination Footer */}
            <div className="px-lg py-md border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-lowest">
              <p className="font-label-sm text-on-surface-variant">
                Showing {page * size + 1}-{Math.min((page + 1) * size, totalElements)} of {totalElements} dishes
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  className="p-2 rounded-lg border border-stone-200 text-stone-400 hover:bg-white disabled:opacity-50"
                  disabled={page === 0}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-10 h-10 rounded-lg font-label-sm ${
                      i === page
                        ? "bg-primary text-on-primary"
                        : "border border-stone-200 text-stone-600 hover:bg-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                  className="p-2 rounded-lg border border-stone-200 text-stone-400 hover:bg-white disabled:opacity-50"
                  disabled={page === totalPages - 1}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main> 

      {/* Modal for Create/Edit Food */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 bg-black/50 overflow-y-auto">
          <div className="bg-background w-full max-w-4xl sm:rounded-2xl shadow-2xl overflow-hidden border border-stone-200/50 flex flex-col md:flex-row min-h-screen sm:min-h-0 sm:max-h-[90vh]">
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
                 {previewUrl ? (
              <img
                src={previewUrl}
                className="absolute inset-0 w-full h-full object-cover"
                alt="preview"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Image
              </div>
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
                    {editingFood
                      ? "Update dish information"
                      : "Create a new dish item"}
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="hidden md:flex p-2 hover:bg-surface-container rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-stone-400">
                    close
                  </span>
                </button>
              </div>
              <form onSubmit={handleSave} className="space-y-6 flex-1">
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
                      >
                        <option value="">Select Category</option>
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
  value={formData.price ?? ""}
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
                   <div className="sm:col-span-2">
                    <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                      Ingredients description
                    </label>
                    <textarea
                      className="w-full bg-surface-container-lowest border border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary-container font-body-md text-primary resize-none"
                      rows={3}
                      name="ingredientsDescription"
                      value={formData.ingredientsDescription}
                      onChange={handleFormChange}
                      placeholder="Enter ingredients description"
                      required
                    />
                  </div>
                  
                </div>
                <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 border-t border-stone-100 mt-auto">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 text-stone-500 font-semibold hover:text-stone-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto order-1 sm:order-2 bg-secondary-container text-on-secondary-container px-8 lg:px-10 py-3 rounded-lg font-bold shadow-lg shadow-secondary-container/20 hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    {editingFood ? "Update Food Item" : "Create Food Item"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer Meta */}
      <footer className="lg:ml-64 p-lg text-center text-[10px] sm:text-label-sm text-on-surface-variant opacity-50 font-label-sm tracking-widest uppercase">
        © 2024 Bistro Collective Admin Shell • System v2.4.0
      </footer>
    </>
  );
}
