import React, { useState } from "react";

export default function DigitalBistroBranches() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen">
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <aside
        className={`h-screen w-64 border-r fixed left-0 top-0 bg-stone-50 border-stone-200 flex flex-col py-6 font-epilogue antialiased tracking-tight z-50 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        id="mobile-sidebar"
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container">
              <img
                alt="Chef's Profile Picture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1ONsUqn8x2kjCEftQRRQENvYdH4ncY-ga8SEi6pv8R3BARs5pQmSaOZ2iydWNdihPxBXJZxHi-PsMBRdu8ODc6849D-qNCJxSkWz8g7ZDqPIcnrvVGVKogBUGn3dfUiLCtEIQVv23ck1gN3A00gXuv1zJiJ-uqITcEYwPVB4bzprcymZg_987gqszE72UeaEXOuws6SILDNYi8psBMypGjSh3lX1HEtm_0UeGkJgLiFSz95HwBr5cSY0s90UtO-QtCoQ_GWobAx0"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-900">Digital Bistro</h2>
              <p className="text-xs text-stone-500 font-medium">Admin Dashboard</p>
            </div>
          </div>
          <button className="lg:hidden text-stone-400" onClick={toggleMenu}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-emerald-800 transition-colors hover:bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="menu_book">
              menu_book
            </span>
            <span>Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-emerald-800 transition-colors hover:bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span>Users</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-emerald-800 transition-colors hover:bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart">
              shopping_cart
            </span>
            <span>Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-emerald-900 font-semibold border-r-4 border-emerald-900 bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              data-icon="restaurant"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
            <span>Restaurant Info</span>
          </a>
        </nav>
        <div className="px-6 mb-6">
          <button className="w-full py-3 bg-secondary text-on-secondary rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity active:scale-95 duration-200">
            View Live Menu
          </button>
        </div>
        <div className="px-2 pt-4 border-t border-stone-200 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-emerald-800 transition-colors hover:bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
            <span>Settings</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-emerald-800 transition-colors hover:bg-stone-100 active:scale-95 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="help">
              help
            </span>
            <span>Support</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 min-h-screen">
        {/* TopAppBar Component */}
        <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] h-16 border-b border-stone-100 bg-white/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 z-20 font-epilogue font-medium">
          <div className="flex items-center gap-4 flex-1">
            <button
              className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-md hidden sm:block">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg"
                data-icon="search"
              >
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-900/10 placeholder-stone-400"
                placeholder="Search settings..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-2 lg:gap-4 text-stone-400">
              <button className="p-2 hover:text-emerald-700 transition-colors active:scale-95">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="hidden sm:block p-2 hover:text-emerald-700 transition-colors active:scale-95">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-stone-100 mx-1"></div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="hidden sm:block text-sm font-semibold text-emerald-900">
                Admin
              </span>
              <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden ring-2 ring-stone-50">
                <img
                  alt="Administrator Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoIs41sxcuLq7fNkeAgDXbkrZoIiuZZ2DzRZYyG7pdAxzW46PU4SpJ4brXcm1q5GT0WePoiiwtT7C6FxdIlmEYVX4fJy7qZUmo79dtHj_MPBWsHaXAEapOTo4DOVteMtOJqSTaTfELkLzWsW0CAreH1kDeK6JBqh1w4l506RGzoi5G6wPiDjK1qXjlSFVoNGP9oNoqXtOfw3FeFLoiZ_1LGpJFl9J-WQlWPXlDWufRo1WdAkxx_TTorCNHR0QkQlEkpECywSjJk7I"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="pt-24 pb-12 px-4 md:px-8 lg:px-margin-desktop">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 lg:mb-xl flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-display-xl font-display-xl text-primary mb-2">
                  Earthy Gastronomy
                </h1>
                <p className="text-body-md lg:text-body-lg text-on-surface-variant">
                  Manage your restaurant branch locations and contact information.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10 w-full md:w-auto">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                Add New Branch
              </button>
            </header>

            {/* Branch List: Responsive View */}
            <div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-surface-container overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 border-b border-stone-100">
                      <th className="px-lg py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Branch Name
                      </th>
                      <th className="px-lg py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-lg py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        Phone Number
                      </th>
                      <th className="px-lg py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-lg py-5">
                        <div className="font-semibold text-primary">Main Flagship</div>
                        <div className="text-xs text-on-surface-variant">Primary Hub</div>
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant">
                        42 Artisan Way, Culinary District, EP-90210
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant font-medium">
                        +1 (555) 012-3456
                      </td>
                      <td className="px-lg py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="p-2 text-stone-400 hover:text-secondary hover:bg-secondary/10 rounded-full transition-all active:scale-90"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button
                            className="p-2 text-stone-400 hover:text-error hover:bg-error/10 rounded-full transition-all active:scale-90"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-lg py-5">
                        <div className="font-semibold text-primary">Downtown Bistro</div>
                        <div className="text-xs text-on-surface-variant">City Center</div>
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant">
                        158 Central Plaza, Downtown, EP-90101
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant font-medium">
                        +1 (555) 012-3890
                      </td>
                      <td className="px-lg py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="p-2 text-stone-400 hover:text-secondary hover:bg-secondary/10 rounded-full transition-all active:scale-90"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button
                            className="p-2 text-stone-400 hover:text-error hover:bg-error/10 rounded-full transition-all active:scale-90"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-lg py-5">
                        <div className="font-semibold text-primary">Harbor Kitchen</div>
                        <div className="text-xs text-on-surface-variant">Seaside Terrace</div>
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant">
                        88 Marine View Drive, Waterfront, EP-90456
                      </td>
                      <td className="px-lg py-5 text-body-md text-on-surface-variant font-medium">
                        +1 (555) 012-7722
                      </td>
                      <td className="px-lg py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="p-2 text-stone-400 hover:text-secondary hover:bg-secondary/10 rounded-full transition-all active:scale-90"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button
                            className="p-2 text-stone-400 hover:text-error hover:bg-error/10 rounded-full transition-all active:scale-90"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile List */}
              <div className="md:hidden divide-y divide-stone-100">
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-primary">Main Flagship</div>
                      <div className="text-xs text-on-surface-variant">Primary Hub</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-2 text-stone-400 hover:text-secondary">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm shrink-0">
                      location_on
                    </span>
                    <span>42 Artisan Way, Culinary District</span>
                  </div>
                  <div className="flex gap-2 text-sm font-medium text-emerald-800">
                    <span className="material-symbols-outlined text-sm shrink-0">phone</span>
                    <span>+1 (555) 012-3456</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-primary">Downtown Bistro</div>
                      <div className="text-xs text-on-surface-variant">City Center</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-2 text-stone-400 hover:text-secondary">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm shrink-0">
                      location_on
                    </span>
                    <span>158 Central Plaza, Downtown</span>
                  </div>
                  <div className="flex gap-2 text-sm font-medium text-emerald-800">
                    <span className="material-symbols-outlined text-sm shrink-0">phone</span>
                    <span>+1 (555) 012-3890</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-primary">Harbor Kitchen</div>
                      <div className="text-xs text-on-surface-variant">Seaside Terrace</div>
                    </div>
                    <div className="flex gap-1">
                      <button className="p-2 text-stone-400 hover:text-secondary">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm shrink-0">
                      location_on
                    </span>
                    <span>88 Marine View Drive, Waterfront</span>
                  </div>
                  <div className="flex gap-2 text-sm font-medium text-emerald-800">
                    <span className="material-symbols-outlined text-sm shrink-0">phone</span>
                    <span>+1 (555) 012-7722</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Summary / Quick Stats */}
            <div className="mt-8 lg:mt-lg grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-gutter">
              <div className="bg-primary-container/10 border border-primary-container/20 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">store</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">3 Total Branches</div>
                  <div className="text-xs text-on-surface-variant">Currently active</div>
                </div>
              </div>
              <div className="bg-secondary/5 border border-secondary/10 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-secondary">Verified Locations</div>
                  <div className="text-xs text-on-surface-variant">All sites passed audit</div>
                </div>
              </div>
              <div className="bg-stone-100 border border-stone-200 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-300 text-stone-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-700">Last Synced</div>
                  <div className="text-xs text-on-surface-variant">2 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
