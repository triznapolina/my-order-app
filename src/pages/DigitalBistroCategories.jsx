import React, { useEffect, useState, useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { categoryService } from '../apis/api';

export default function DigitalBistroCategories() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  
  const fetchData = useCallback(async () => {
      const res = await categoryService.getAll(page, size);
  
      setData(res.data.content);
      setTotalPages(res.data.totalPages);
      setTotalElements(res.data.totalElements);
  }, [page, size]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    const handleDelete = async (id) => {
      await categoryService.delete(id);
      fetchData();
    };

    const handleCreateCategory = () => {
      navigate("/category-details");
    };

    const handleEditCategory = (category) => {
      navigate(`/category-details/${category.id}`);
    };

    const toggleMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
      setMobileMenuOpen(false);
    };

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-stone-900/40 z-40 lg:hidden"
          id="mobile-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Navigation Drawer (Shared Component) */}
      <aside
        className={`flex flex-col fixed left-0 top-0 h-full py-6 px-4 bg-stone-50 dark:bg-stone-950 h-screen w-64 border-r border-stone-200 dark:border-stone-800 font-['Epilogue'] antialiased tracking-tight z-50 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-10 px-4">
          <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50">Bistro Admin</span>
          <button
            className="lg:hidden cursor-pointer text-stone-500"
            onClick={closeMenu}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-menu"
          >
            <span className="material-symbols-outlined" data-icon="menu_book">
              menu_book
            </span>
            <span>Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform"
            href="/admin-categories"
          >
            <span className="material-symbols-outlined" data-icon="category" style={{ fontVariationSettings: "'FILL' 1" }}>
              category
            </span>
            <span>Categories</span>
          </a>
          {/* Active State: Branches */}
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-branches"
          >
            <span
              className="material-symbols-outlined"
              data-icon="store"
            >
              store
            </span>
            <span>Branches</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-orders"
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart">
              shopping_cart
            </span>
            <span>Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-users"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span>Users</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Shell */}
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Top App Bar (Shared Component) */}
        <header className="w-full h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden hover:bg-stone-100 rounded-full p-2 transition-all focus:ring-2 focus:ring-emerald-500"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined text-emerald-900">menu</span>
            </button>
          </div> 
        </header>

        {/* Content Canvas */}
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {/* Page Actions & Stats Bento Row */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
            <div className="md:col-span-8 bg-surface-container-low p-6 lg:p-8 rounded-xl shadow-sm border border-stone-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="font-headline-lg text-primary text-2xl lg:text-3xl">Master Catalog</h2>
                  <p className="font-body-md text-on-surface-variant text-sm lg:text-base">
                    Manage your bistro's menu taxonomy and organization.
                  </p>
                </div>
              </div>              
            </div>
            <div className="md:col-span-4 bg-secondary-container p-6 lg:p-8 rounded-xl shadow-sm text-on-secondary-container flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                  restaurant_menu
                </span>
                <p className="font-label-sm opacity-80">Total Categories</p>
                <h3 className="font-display-xl text-3xl lg:text-5xl">24</h3>
              </div>
              <div className="flex items-center gap-2 text-sm mt-4">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>4 added this month</span>
              </div>
            </div>
          </section>

          {/* Data Table Section */}
          <section className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden border border-stone-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead className="bg-stone-50 border-b border-stone-100">
                  <tr>
                    <th className="px-6 py-4 font-label-sm text-stone-500 uppercase tracking-wider w-12">
                      <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                    </th>
                    <th className="px-6 py-4 font-label-sm text-stone-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 font-label-sm text-stone-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 font-label-sm text-stone-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-4 font-label-sm text-stone-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>


                <tbody className="divide-y divide-stone-100">
              {data.map((row) => (
                <tr key={row.id} className="group hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-semibold text-primary">
                          {row.name}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-stone-500 text-sm line-clamp-1 max-w-xs">
                      {row.shortDescription}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      {row.quantity || 0} Items
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEditCategory(row)}
                        className="p-2 text-stone-400 hover:text-primary transition-colors bg-stone-50 rounded-lg"
                      >
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(row.id)}
                        className="p-2 text-stone-400 hover:text-red-500 transition-colors bg-stone-50 rounded-lg"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
                
              </table>
            </div>
            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-stone-500">
            Showing {page * size + 1}-{Math.min((page + 1) * size, totalElements)} of {totalElements} categories
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              className="p-2 rounded-lg border border-stone-200 text-stone-400 hover:bg-white"
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
              className="p-2 rounded-lg border border-stone-200 text-stone-400 hover:bg-white"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        </section>

          {/* Bottom Floating Action for Quick Add (Contextual FAB) */}
          <button onClick={handleCreateCategory} className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-secondary text-on-secondary w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
      </main>
    </div>
  );
}
