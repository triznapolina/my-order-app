import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { restaurantService } from '../apis/api';

export default function DigitalBistroBranches() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const fetchData = useCallback(async () => {
    const res = await restaurantService.getAll({ params: { page, size } });

    setData(res.data.content);
    setTotalPages(res.data.totalPages);
    setTotalElements(res.data.totalElements);
  }, [page, size]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    await restaurantService.delete(id);
    fetchData();
  };

  const handleCreateBranch = () => {
    navigate("/restaurant-details");
  };

  const handleEditBranch = (branch) => {
    navigate(`/restaurant-details/${branch.id}`);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* NavigationDrawer */}
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
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-categories"
          >
            <span className="material-symbols-outlined" data-icon="category">
              category
            </span>
            <span>Categories</span>
          </a>
          {/* Active State: Branches */}
          <a
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform"
            href="/admin-branches"
          >
            <span
              className="material-symbols-outlined"
              data-icon="store"
              style={{ fontVariationSettings: "'FILL' 1" }}
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

      {/* Content Area */}
      <main className="lg:ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="w-full h-16 sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm shadow-stone-200/50 dark:shadow-none flex justify-between items-center px-4 md:px-8 font-['Epilogue'] font-medium">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="lg:hidden hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full p-2 text-stone-500 transition-all"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined" data-icon="menu">
                menu
              </span>
            </button>
          </div>
          
        </header>

        {/* Main Content Canvas */}
        <div className="p-4 md:p-gutter lg:p-margin-desktop">
          {/* Header Section with Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-lg">
            <div className="max-w-2xl">
              <h2 className="text-display-xl font-display-xl text-primary mb-sm">Location Directory</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant">
                Manage your bistro network. View, edit, or remove branch details across all regions from this central
                directory.
              </p>
            </div>
            <button onClick={handleCreateBranch} className="bg-secondary text-on-secondary px-lg py-md rounded-lg flex items-center gap-2 font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-secondary/20 w-full md:w-auto justify-center">
              <span className="material-symbols-outlined" data-icon="add_circle">
                add_circle
              </span>
              <span>Add Branch</span>
            </button>
          </div>

          {/* Bento Grid - Branch Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
            <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant/30 flex items-center gap-lg">
              <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" data-icon="store_front">
                  storefront
                </span>
              </div>
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                  Total Branches
                </p>
                <p className="text-headline-lg font-headline-lg text-primary">{totalElements}</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant/30 flex items-center gap-lg">
              <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" data-icon="location_on">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                  Cities Covered
                </p>
                <p className="text-headline-lg font-headline-lg text-primary">08</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant/30 flex items-center gap-lg">
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" data-icon="bolt">
                  bolt
                </span>
              </div>
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                  Active Today
                </p>
                <p className="text-headline-lg font-headline-lg text-primary">22</p>
              </div>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/30">
                   
                    <th className="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">
                      Address
                    </th>
                    <th className="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">
                      Phone Number
                    </th>
                    <th className="px-lg py-md text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {data.map((branch) => (
                    <tr key={branch.id} className="hover:bg-stone-50/50 transition-colors group">
                      <td className="px-lg py-lg text-body-md text-on-surface-variant">{branch.address}</td>
                      <td className="px-lg py-lg text-body-md text-on-surface font-medium whitespace-nowrap">{branch.phone || 'N/A'}</td>
                      <td className="px-lg py-lg text-right">
                        <div className="flex items-center justify-end gap-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEditBranch(branch)}
                            className="p-sm rounded-lg bg-primary-fixed/20 text-primary hover:bg-primary-fixed transition-colors"
                            title="Update"
                          >
                            <span className="material-symbols-outlined" data-icon="edit">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => handleDelete(branch.id)}
                            className="p-sm rounded-lg bg-error-container/20 text-error hover:bg-error-container transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined" data-icon="delete">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-lg py-lg border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-md">
              <p className="text-body-md text-on-surface-variant text-center sm:text-left">
                Showing <span className="font-bold text-primary">{page * size + 1}-{Math.min((page + 1) * size, totalElements)}</span> of {totalElements} branches
              </p>
              <div className="flex items-center gap-sm">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                  disabled={page === 0}
                >
                  <span className="material-symbols-outlined" data-icon="chevron_left">
                    chevron_left
                  </span>
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                      i === page
                        ? "bg-primary text-on-primary"
                        : "border border-outline-variant/30 text-outline hover:border-primary hover:text-primary"
                    } transition-all`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                  className="w-10 h-10 rounded-lg border border-outline-variant/30 flex items-center justify-center text-outline hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                  disabled={page === totalPages - 1}
                >
                  <span className="material-symbols-outlined" data-icon="chevron_right">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
