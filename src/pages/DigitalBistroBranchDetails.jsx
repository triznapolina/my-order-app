import React from "react";

export default function DigitalBistroBranchDetails() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full p-4 space-y-2 bg-[#FCF9F2] dark:bg-stone-950 text-[#1B3022] dark:text-stone-100 h-screen w-64 border-r border-stone-200/60 dark:border-stone-800 transition-all duration-200">
        <div className="flex items-center px-2 py-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center mr-3 overflow-hidden shadow-sm">
            <img
              alt="Bistro Logo"
              data-alt="minimalist logo icon for a luxury bistro brand featuring clean organic lines in a deep forest green color"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFq2MgAMWm_Qq5TNTJJJ5yBrIQ3QWaeG0FN9pmqREHjWzyfN-Y03VJDcSWmL3oy3Wr7Hpt4DwsT_u0aBH8UAeLCQqGOmHdeEwjqhETxjjnjfGV7xDQKWhxW8RLrA5AV4Hxx29cGjk6zI-ewsE8IwCDc0f9lrgglfl7BhcVMzpQzkgtmXEAbOaix5tAf1ticr5UwXL0XQH4K5TzXPJuEo36jZhR83UVfPD38I6CqR0n9ETudKsAkXgWr7fQk00fLaFgYssiPXtJjMY"
            />
          </div>
          <div>
            <h1 className="font-epilogue text-lg font-black text-[#1B3022] dark:text-stone-50 leading-none">
              Bistro Management
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mt-1">
              Admin Portal
            </p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">
              dashboard
            </span>
            <span>Dashboard</span>
          </a>
          <a
            className="flex items-center px-4 py-3 space-x-3 bg-stone-100 dark:bg-stone-900 text-[#1B3022] dark:text-white rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="storefront">
              storefront
            </span>
            <span>Branches</span>
          </a>
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="restaurant_menu">
              restaurant_menu
            </span>
            <span>Menu Manager</span>
          </a>
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span>Staff</span>
          </a>
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="monitoring">
              monitoring
            </span>
            <span>Analytics</span>
          </a>
        </nav>
        <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800 space-y-1">
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="help">
              help
            </span>
            <span>Help Center</span>
          </a>
          <a
            className="flex items-center px-4 py-3 space-x-3 text-stone-600 dark:text-stone-400 hover:bg-stone-50 transition-all duration-200 rounded-lg font-epilogue text-sm font-medium"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="logout">
              logout
            </span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      <main className="md:ml-64 min-h-screen">
        <header className="flex justify-between items-center w-full px-4 md:px-6 py-3 bg-[#FCF9F2] dark:bg-stone-950 text-[#1B3022] dark:text-stone-100 font-epilogue tracking-tight border-b border-stone-200/60 dark:border-stone-800 shadow-sm sticky top-0 z-10">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="md:hidden mr-3">
              <span className="material-symbols-outlined text-stone-500">menu</span>
            </div>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-stone-100/50 border-none rounded-full text-sm focus:ring-1 focus:ring-primary-container transition-all"
                placeholder="Search branches..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 ml-2">
            <button className="p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded-full relative">
              <span className="material-symbols-outlined" data-icon="notifications">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <div className="hidden sm:block h-8 w-[1px] bg-stone-200 dark:bg-stone-800 mx-2"></div>
            <div className="flex items-center space-x-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-stone-500">Super Admin</p>
              </div>
              <img
                alt="Administrator Profile"
                className="w-8 h-8 rounded-full border border-stone-200 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcVKHjcFYHaZy2n3KTVVnaQ5-X0K5RLGy6_wiYFvPZzr7tMF7Oiqfbb-ei9OAZLyHe6CFzmezFm3DSD0Nxd4HPruYhVU4RntP-pHsywtek-QEOdXwFoaohYEzMmWdj4SUxAkJNnOXoV27CFsVXiUSRvxyW7vn6hrAwSJRMq9yk_Y75VHdDaGVmiEaFD3viKG65mSxWWquv75vmtsPHnYzqerRKGwpDv36hvKSuGBNYiT2KXN_fu36NVz-yU91mPima2G-lL6_fgzU"
              />
            </div>
          </div>
        </header>

        <section className="p-margin-mobile md:p-gutter max-w-7xl mx-auto opacity-40 select-none pointer-events-none">
          <div className="mb-lg md:mb-xl flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary-container mb-2">
                Branch Network
              </h2>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base">
                Manage your culinary locations across the region.
              </p>
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm shadow-md hover:brightness-110 transition-all flex items-center justify-center space-x-2">
              <span className="material-symbols-outlined text-sm">add</span>
              <span>New Branch</span>
            </button>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden border border-surface-container">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container">
                    <th className="px-6 py-4 font-headline-md text-sm text-primary-container">
                      Branch Name
                    </th>
                    <th className="px-6 py-4 font-headline-md text-sm text-primary-container">
                      Location
                    </th>
                    <th className="px-6 py-4 font-headline-md text-sm text-primary-container">
                      Contact
                    </th>
                    <th className="px-6 py-4 font-headline-md text-sm text-primary-container">
                      Status
                    </th>
                    <th className="px-6 py-4 font-headline-md text-sm text-primary-container"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr className="hover:bg-surface-container-lowest transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-tertiary-fixed">
                            location_on
                          </span>
                        </div>
                        <span className="font-bold text-on-surface">The Oak &amp; Vine</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant text-sm">
                      124 Gastronomy Way, Culinary District
                    </td>
                    <td className="px-6 py-5 text-on-surface-variant text-sm">
                      +1 (555) 012-3456
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="material-symbols-outlined text-outline cursor-pointer">
                        more_vert
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Branch Info Modal */}
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-gutter bg-on-surface/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest w-full max-w-lg rounded-t-2xl md:rounded-xl shadow-[0px_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-surface-container-high flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-md md:p-lg bg-surface-container-low border-b border-surface-container-high flex justify-between items-center sticky top-0 z-20">
              <div>
                <h3 className="font-headline-md text-lg md:text-headline-md text-primary-container">
                  Branch Details
                </h3>
                <p className="text-on-surface-variant text-[11px] md:text-label-sm mt-0.5">
                  Update information for this location
                </p>
              </div>
              <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-md md:p-lg space-y-md md:space-y-lg overflow-y-auto">
              <div className="space-y-md md:space-y-lg">
                <div className="space-y-sm">
                  <label
                    className="block font-label-sm text-on-surface-variant px-1"
                    htmlFor="branch-name"
                  >
                    Branch Name
                  </label>
                  <input
                    className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 md:p-3 text-body-md font-body-md transition-all placeholder:text-outline-variant"
                    id="branch-name"
                    placeholder="e.g. Downtown Bistro"
                    type="text"
                    defaultValue="The Oak & Vine"
                  />
                </div>
                <div className="space-y-sm">
                  <label
                    className="block font-label-sm text-on-surface-variant px-1"
                    htmlFor="address"
                  >
                    Full Street Address
                  </label>
                  <textarea
                    className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-body-md font-body-md transition-all placeholder:text-outline-variant min-h-[80px]"
                    id="address"
                    placeholder="Street, City, Zip Code"
                    defaultValue="124 Gastronomy Way, Culinary District"
                  />
                </div>
                <div className="space-y-sm">
                  <label
                    className="block font-label-sm text-on-surface-variant px-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-3 text-body-md font-body-md transition-all placeholder:text-outline-variant"
                    id="phone"
                    placeholder="+1 (XXX) XXX-XXXX"
                    type="tel"
                    defaultValue="+1 (555) 012-3456"
                  />
                </div>
              </div>
              <div className="pt-2">
                <div className="p-4 bg-tertiary-fixed/30 rounded-lg flex items-start space-x-3">
                  <span className="material-symbols-outlined text-on-tertiary-fixed text-lg mt-0.5">
                    info
                  </span>
                  <p className="text-[11px] md:text-xs text-on-tertiary-fixed-variant leading-relaxed">
                    Changes to branch contact info will be reflected on the customer-facing website
                    immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-md md:p-lg bg-surface-container-low border-t border-surface-container-high flex flex-col md:flex-row-reverse md:justify-start gap-3 md:gap-md">
              <button className="w-full md:w-auto px-8 py-3.5 md:py-2.5 font-label-sm bg-secondary text-on-secondary shadow-md hover:brightness-105 transition-all rounded-lg active:scale-[0.98]">
                Save Branch
              </button>
              <button className="w-full md:w-auto px-6 py-3.5 md:py-2.5 font-label-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
