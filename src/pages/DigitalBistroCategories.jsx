import React, { useState } from "react";

export default function DigitalBistroCategories() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-body-md text-on-surface flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar Menu */}
      <aside
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } lg:flex fixed inset-0 z-50 lg:static lg:h-screen w-64 border-r border-stone-200 bg-[#FCFBF7] flex-col py-6 px-4 font-['Epilogue'] tracking-tight flex-shrink-0`}
      >
        <div className="flex items-center justify-between lg:justify-start gap-3 px-2 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <img
                alt="Restaurant Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsAr0yK0lmYzdOjm7qjn02YEQRPjVeU66C-MiR5TEPtc1WbKv08HpFuB8GJuIotERjf0WxQz9umQV9Eg7m97__TaviHxaR5qaksE0dIAKoNRth22DprBYDc1FirK0KzatTxNC0FK62uXzbwGtZQm6bNW58Y8LMp0Lj7gNkCrc1kpt4_V37brfIOpQAoJwlHuAHj4Q4etA8sJ3hUq85MlBVMHGvXzL1asjetKkRriV3a4FWQDbXp0a3wM5i8K27oCQH1qpUwx6NJS0"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1B3022]">Earthy Bistro</h2>
              <p className="text-xs text-stone-500">Admin Management</p>
            </div>
          </div>
          <button
            className="lg:hidden text-stone-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-[#1B3022] hover:bg-stone-100 rounded-lg transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="text-sm font-semibold">Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 bg-[#1B3022]/5 text-[#1B3022] rounded-lg font-semibold"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              category
            </span>
            <span className="text-sm font-semibold">Categories</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-[#1B3022] hover:bg-stone-100 rounded-lg transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-semibold">Users</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-[#1B3022] hover:bg-stone-100 rounded-lg transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-sm font-semibold">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-[#1B3022] hover:bg-stone-100 rounded-lg transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">store</span>
            <span className="text-sm font-semibold">Restaurant Info</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-stone-100">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden">
              <img
                alt="Administrator Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjzprKrm0s0l_GOmDNTbdYRWxGnqg_JHWiTOpb4N0n1RXE5Z9sgc0s8JN4Iapq7nK80CXNyI2S_YopfZPV8e0zwYdi4eeEWYkPaNOHE5G527DElBqMFm-2J4AzuJO1vEPld6R76yGCkdsSi9p23jDuxCZ4g3gtNI4WwIrrrC-a0HxXKQLZlafeJKe9WVYqoWgcZmZJTHBYHMYnWaPA8y3mBuc1ZB0JQJKSvGa4ZFD0WKx-hRFwHzMxz5HPdOZCj_vlFVUWgm-3NmI"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary">Alex Rivera</span>
              <span className="text-xs text-stone-500">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col min-w-0">
        {/* TopAppBar */}
        <header className="w-full h-16 sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4 flex-grow max-w-xl">
            {/* Hamburger Button */}
            <button
              className="lg:hidden p-2 text-stone-500 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-stone-200 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm font-body-md"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-6 ml-4">
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-stone-400 hover:text-[#C17735] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-stone-400 hover:text-[#C17735] transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="hidden sm:block h-8 w-px bg-stone-200"></div>
            <h1 className="font-['Epilogue'] text-xs lg:text-sm font-bold text-[#1B3022] truncate max-w-[100px] lg:max-w-none">
              Dashboard
            </h1>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-4 lg:p-gutter overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Page Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-8 lg:mb-xl">
              <div>
                <nav className="flex gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
                  <span>Admin</span>
                  <span className="text-stone-300">/</span>
                  <span className="text-primary font-bold">Categories</span>
                </nav>
                <h2 className="font-headline-lg text-2xl lg:text-headline-lg text-primary">
                  Food Categories
                </h2>
                <p className="font-body-md text-sm lg:text-body-md text-on-surface-variant mt-1">
                  Manage and organize your bistro's menu offerings.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-sm text-sm hover:opacity-90 transition-opacity active:scale-95 w-full md:w-auto">
                <span className="material-symbols-outlined text-lg">add</span>
                Add Category
              </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-md mb-8 lg:mb-xl">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">category</span>
                  </div>
                  <span className="text-label-sm font-label-sm text-primary">+2 this month</span>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Total Categories</p>
                <h3 className="text-headline-md font-headline-md text-primary mt-1">24</h3>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">restaurant</span>
                  </div>
                  <span className="text-label-sm font-label-sm text-secondary">Peak Demand</span>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Active Dishes</p>
                <h3 className="text-headline-md font-headline-md text-primary mt-1">112</h3>
              </div>
              <div className="sm:col-span-2 lg:col-span-1 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-stone-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">visibility</span>
                  </div>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Avg. Daily Views</p>
                <h3 className="text-headline-md font-headline-md text-primary mt-1">1,402</h3>
              </div>
            </div>

            {/* Category Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-8">
              {/* Category Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-stone-100 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group relative">
                <div className="w-full sm:w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    alt="Appetizers"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJeg-GU4Lc_xBmslbUpaCE7XTpYKbrdF6LMPceth334rVgrxy4UHy1FoIgC6wJ_PV9M0a7wN_eqx64F0ogdco3upW4TK6UvRuqzXkN6209wOGIdoO0vdAAExkqcIUz_5fHGwcdkcngJImQpQjb3eWlZyNVcYAwgkv-ifTa5pBeqmFGcQ0I-mJ3taVRwb_I3SpLdF7ywJo5stjOjvqxM8bAWsyr929olViV-c8wzSwF390Arut7o75EKXuZMPx7srnCj35_Nu__rMk"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-primary">Appetizers</h3>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-stone-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error transition-all">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Small starters to awaken your palate, from crispy croquettes to garden-fresh salads.
                  </p>
                </div>
              </div>

              {/* Category Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-stone-100 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group relative">
                <div className="w-full sm:w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    alt="Main Courses"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8iLtnjSYu3PjPrmKfRWk8kQESQZjLs-Cpzc-w7mP_DUFP2c_XRp7zbD-XcXbIzUVR2ZKup7P7NkTu24MD-hSjRCHFB5FntqX9Dxlney5AOad7ooSaBcvZCnCFMhPWYJgHVJrybSWXG6R-T8mvc66UfeVAIaE4DxM0FCNSeEFscN24eRhxqORWKKYDpOolkTdb_1h4yagjifTg0IIuKh4NMd64-1hyIQ29BwKAfEcGEn-Phpv-LcVHwVwgX-eaSsle1M4bD91mkPQ"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-primary">Main Courses</h3>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-stone-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error transition-all">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Hearty portions of seasonal meats, sustainable fish, and artisanal pasta dishes.
                  </p>
                </div>
              </div>

              {/* Category Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-stone-100 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group relative">
                <div className="w-full sm:w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    alt="Desserts"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx_OmJrkXndhyScYIAnciWPydnBx2UaRxTnkuWSD5hz0LbUo3TarXxX7ZfxRefLQMBbgNjb-pb6VgiZyAH7AD2csDLwYN2dkfPVD6_cjdYK5G3QP77WxCp_HcfCYmsMYgTJ9btaSNEQ2mnKk8fg9gBlRDfll8m-65lU4miOU77W0eVa9JMNzjuQ5qhmNy1nUKaqxSI8walSA9eF9V1RCJprLBn3IGdxQVbBOyH0W7yLmAVrOfAYPC2F7X0NLTlgdZ83inmeMq9lAE"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-primary">Desserts</h3>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-stone-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error transition-all">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    A sweet finale featuring decadent chocolates, seasonal tarts, and local honey treats.
                  </p>
                </div>
              </div>

              {/* Category Card 4 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-stone-100 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group relative">
                <div className="w-full sm:w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    alt="Beverages"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTuRtgbhgEF_zUBCDDqlmGSi1Mrzlsv2MZroFI1RRgtY-w8E5RH0U48cMvWePyPfi2e3bib-kwbehxbtGKmyqUb1kt4_b4stbWZy4b3ugmveHfloB3NzQJhPvnbkfUiWUQX0Qx1Jrqi77bXqLP8z70klx-IBiPXitjzlWEI2U78JUcZP7IIo3Pks63lgDiap_o7LRVl1ltOAnX_dKqgD__Nik2FhJVzkVcFTCSKntjDdD7PtBmmYR_dIPiv1evR9nZJJQ-6_FHmvI"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-primary">Beverages</h3>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-stone-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error transition-all">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Artisan craft cocktails, organic wines, and house-made botanical sodas.
                  </p>
                </div>
              </div>

              {/* Category Card 5 */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-stone-100 overflow-hidden p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow group relative">
                <div className="w-full sm:w-24 h-24 rounded-lg bg-stone-100 overflow-hidden flex-shrink-0">
                  <img
                    alt="Brunch Specials"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2P6HRDRav2TlEc9V5KVO0AnnOoUp3R36bETt3hCmEsb1U7A9rcdsajQQwk2NiXckGoFGKQmIey_huh01BgptqkNdFYAOPrlN2DXJLABxF6EI-WIFCBm2vzHanV047RmKOrpRZ8KsfonxsCQw9IhmzoalxFYDLquvWvgn0vsHqp3UrBZF_XIfILVmXsI150OxhfI4xw87fgogJ1CiUKVN3UWqOkoqaVwZ9ziy2DH12qSSa_6IYO9S2E68aWbYTa-IOnRghudRPvhk"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-primary">Brunch Specials</h3>
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-stone-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-stone-400 hover:text-error transition-all">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Weekend favorites from morning classics to inventive savory breakfast bowls.
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Footer */}
            <div className="bg-surface-container-low rounded-xl p-4 lg:px-8 lg:py-5 flex flex-col items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <span className="text-label-sm font-label-sm text-on-surface-variant">Per page</span>
                  <div className="relative">
                    <select className="appearance-none bg-surface-container-lowest border border-stone-200 rounded-md py-1 px-3 pr-8 text-sm font-body-md focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer">
                      <option>10</option>
                      <option selected>20</option>
                      <option>50</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-sm pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <span className="text-label-sm font-label-sm text-on-surface-variant">Showing 1-5 of 24</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-stone-400 hover:text-primary transition-colors disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex items-center px-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-on-primary text-sm font-bold">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-stone-200 text-sm font-medium transition-colors">
                    2
                  </button>
                  <span className="px-2 text-stone-400">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-stone-200 text-sm font-medium transition-colors">
                    5
                  </button>
                </div>
                <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Footer Context */}
            <div className="mt-8 text-center px-4">
              <p className="text-label-sm font-label-sm text-on-surface-variant italic">
                Tip: Use the drag handle on the left to reorder categories in the public menu.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
