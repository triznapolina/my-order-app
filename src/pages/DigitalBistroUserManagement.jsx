import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from '../apis/api';

export default function DigitalBistroUserManagement() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

 
  const fetchData = useCallback(async () => {
  try {
    const res = await userService.getAll(page, size);

    const usersOnly = res.data.content.filter(
      (user) => user.role === "ROLE_USER"
    );

    setData(usersOnly);
    setTotalPages(res.data.totalPages);
    setTotalElements(usersOnly.length);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}, [page, size]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      await userService.delete(id);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleOpenProfile = (userId) => {
    navigate(`/user-info/${userId}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-stone-900/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* NavigationDrawer Shell */}
      <aside
        className={`flex flex-col fixed left-0 top-0 h-full py-6 px-4 bg-stone-50 dark:bg-stone-950 h-screen w-64 border-r border-stone-200 dark:border-stone-800 font-['Epilogue'] antialiased tracking-tight z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-10 px-4">
          <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50">Bistro Admin</span>
          <button
            className="lg:hidden cursor-pointer text-stone-500"
            onClick={closeSidebar}
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
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform"
            href="/admin-users"
          >
            <span className="material-symbols-outlined" data-icon="group" style={{ fontVariationSettings: "'FILL' 1" }}>
              group
            </span>
            <span>Users</span>
          </a>
        </nav>
      </aside>

      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar Shell */}
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
        <main className="p-4 md:p-xl max-w-7xl mx-auto space-y-6 md:space-y-lg w-full">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div className="space-y-2">
              <h2 className="font-headline-lg text-primary text-2xl md:text-3xl">User Management</h2>
              <p className="font-body-md text-outline">Manage administrative access and roles across all bistro branches.</p>
            </div>
            <button
              className="flex items-center justify-center gap-2 bg-secondary text-white px-lg py-3 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-secondary/20 whitespace-nowrap"
              type="button"
            >
              <span className="material-symbols-outlined">person_add</span>
              <span>Invite User</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-gutter">
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-surface-container-highest">
              <p className="font-label-sm text-outline mb-xs">TOTAL USERS</p>
              <div className="flex items-end gap-2">
                <span className="font-display-xl text-primary text-4xl">{totalElements}</span>
                <span className="text-emerald-600 font-label-sm mb-2 flex items-center">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>
                  +12%
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-surface-container-highest">
              <p className="font-label-sm text-outline mb-xs">ACTIVE NOW</p>
              <div className="flex items-end gap-2">
                <span className="font-display-xl text-primary text-4xl">18</span>
                <span className="text-secondary font-label-sm mb-2 flex items-center">
                  <span className="material-symbols-outlined text-xs">circle</span>
                  live
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-surface-container-highest">
              <p className="font-label-sm text-outline mb-xs">PENDING INVITES</p>
              <div className="flex items-end gap-2">
                <span className="font-display-xl text-primary text-4xl">07</span>
                <span className="text-on-tertiary-fixed-variant font-label-sm mb-2">
                  resend 2
                </span>
              </div>
            </div>
          </div>

          {/* Data Table Container */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-surface-container-highest overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container border-b border-surface-container-highest">
                    <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase">Full Name</th>
                    <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase">Email</th>
                    <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase">Role</th>
                    <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase">Last Login</th>
                    <th className="px-lg py-md font-label-sm text-on-surface-variant uppercase text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-highest">
                  {data.map((user) => (
                    <tr
                    key={user.id}
                    onClick={() => handleOpenProfile(user.id)}
                    className="hover:bg-surface-container-low transition-colors group cursor-pointer"
                  >
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary-fixed overflow-hidden flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-primary-fixed">person</span>
                          </div>
                          <span className="font-headline-md text-sm text-on-surface">{user.name || user.email}</span>
                        </div>
                      </td>
                      <td className="px-lg py-md font-body-md text-on-surface-variant">{user.email}</td>
                      <td className="px-lg py-md">
                        <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm">{user.role || 'User'}</span>
                      </td>
                      <td className="px-lg py-md font-body-md text-on-surface-variant">{user.lastLogin || 'Never'}</td>
                      <td className="px-lg py-md text-right">
                        <div className="flex justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              handleOpenProfile(user.id);
                            }}
                            className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                          <button 
                            onClick={(event) => {
                              event.stopPropagation();
                              handleDelete(user.id);
                            }}
                            className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/20 rounded-lg transition-colors" 
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Shell */}
            <div className="px-lg py-md bg-surface-container border-t border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-body-md text-sm text-outline">
                Showing {page * size + 1}-{Math.min((page + 1) * size, totalElements)} of {totalElements}
              </span>
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  disabled={page === 0}
                  className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-white transition-colors disabled:opacity-50"
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold ${
                      i === page
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:bg-white"
                    } transition-colors`}
                    type="button"
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                  disabled={page === totalPages - 1}
                  className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-white transition-colors disabled:opacity-50"
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Permission Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mt-xl">
            <div className="lg:col-span-2 p-lg bg-primary-container rounded-xl text-on-primary-container relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h3 className="font-headline-lg text-inverse-primary text-2xl">Permission Insights</h3>
                <p className="font-body-md max-w-md">
                  Administrators can now set granular branch-level permissions for Kitchen Leads and Floor Managers.
                </p>
                <button className="font-label-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all" type="button">
                  View Role Map <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-800/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            </div>
            <div className="p-lg bg-tertiary-container rounded-xl text-on-tertiary-container">
              <h3 className="font-headline-md mb-2">Audit Logs</h3>
              <div className="space-y-4 mt-md">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">history</span>
                  <div>
                    <p className="text-sm font-semibold">Cody Fisher</p>
                    <p className="text-xs text-on-tertiary-fixed-variant">Updated menu for Brooklyn</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim">login</span>
                  <div>
                    <p className="text-sm font-semibold">Jane Cooper</p>
                    <p className="text-xs text-on-tertiary-fixed-variant">System login via Desktop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

