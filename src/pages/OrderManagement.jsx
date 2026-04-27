import React, { useState } from 'react';

const OrderManagement = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-body-md text-on-background bg-surface">
      {/* Mobile Menu Overlay (Hidden by default) */}
      <aside className={`fixed inset-0 z-50 bg-stone-50 dark:bg-stone-950 font-epilogue antialiased tracking-tight ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col py-6`} id="mobile-menu">
        <div className="px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 rounded-lg" data-alt="minimalist organic leaf logo in dark emerald green on a cream background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBbxm5l6CM4pIqVmD-Rdl8ddXaq0DT6A1eu7jvvvqrcU5o60V0gaIRV5c7ljtZFxaKA3Idzw-8dVEhpxDTom_u7slvNyhhtAiXwH_jRbeZMp0XlUopp3XCR2S58X2gmCkbTAMHM_vh_s-R6miyAyZrt8BChPP7twu3Krd2FmZUlZ86Xe1leCt3eyBGUgSvuzfIvE6JuUwscTV2bgJsd9t6DpI9vX8f9nvDiaji4T2fna-B4FbdqluU1XqSAcIm3U_brHlGdoR0SX4"/>
            <div>
              <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-50">Digital Bistro</h1>
              <p className="text-xs text-stone-500">Admin Dashboard</p>
            </div>
          </div>
          <button className="p-2 text-stone-500 hover:text-emerald-900" onClick={() => setMobileMenuOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1">
          <a className="flex items-center gap-3 px-6 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
            <span>Catalog</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span>Users</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-emerald-900 dark:text-emerald-400 font-semibold border-r-4 border-emerald-900 dark:border-emerald-400 bg-stone-100 dark:bg-stone-900" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
            <span>Restaurant Info</span>
          </a>
        </nav>
        <div className="px-6 mt-auto space-y-2">
          <button className="w-full py-2 px-4 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
            View Live Menu
          </button>
          <div className="pt-4 border-t border-stone-200">
            <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>
      {/* Desktop Sidebar (Hidden on Mobile/Tablet) */}
      <aside className="hidden lg:flex h-screen w-64 border-r fixed left-0 top-0 bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 font-epilogue antialiased tracking-tight flex-col py-6">
        <div className="px-6 mb-8 flex items-center gap-3">
          <img className="w-8 h-8 rounded-lg" data-alt="minimalist organic leaf logo in dark emerald green on a cream background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBbxm5l6CM4pIqVmD-Rdl8ddXaq0DT6A1eu7jvvvqrcU5o60V0gaIRV5c7ljtZFxaKA3Idzw-8dVEhpxDTom_u7slvNyhhtAiXwH_jRbeZMp0XlUopp3XCR2S58X2gmCkbTAMHM_vh_s-R6miyAyZrt8BChPP7twu3Krd2FmZUlZ86Xe1leCt3eyBGUgSvuzfIvE6JuUwscTV2bgJsd9t6DpI9vX8f9nvDiaji4T2fna-B4FbdqluU1XqSAcIm3U_brHlGdoR0SX4"/>
          <div>
            <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-50">Digital Bistro</h1>
            <p className="text-xs text-stone-500">Admin Dashboard</p>
          </div>
        </div>
        <nav className="flex-1">
          <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
            <span>Catalog</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="group">group</span>
            <span>Users</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-emerald-900 dark:text-emerald-400 font-semibold border-r-4 border-emerald-900 dark:border-emerald-400 bg-stone-100 dark:bg-stone-900" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
            <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
            <span>Restaurant Info</span>
          </a>
        </nav>
        <div className="px-4 mt-auto space-y-2">
          <button className="w-full py-2 px-4 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
            View Live Menu
          </button>
          <div className="pt-4 border-t border-stone-200">
            <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span>Settings</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>
      {/* TopAppBar */}
      <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-16rem)] h-16 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 flex justify-between items-center px-4 lg:px-8 z-40">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button */}
          <button className="lg:hidden p-2 -ml-2 text-stone-500" onClick={() => setMobileMenuOpen(true)}>
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <div className="relative w-48 md:w-64 lg:w-96 group hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm md:text-base">search</span>
            <input className="w-full bg-stone-50 border-none rounded-full pl-9 pr-4 py-1.5 text-xs md:text-sm focus:ring-2 focus:ring-emerald-900/10" placeholder="Search orders..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4">
            <button className="text-stone-400 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined text-xl" data-icon="notifications">notifications</span>
            </button>
            <button className="hidden md:block text-stone-400 hover:text-emerald-700 transition-colors">
              <span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
            </button>
          </div>
          <div className="h-8 w-[1px] bg-stone-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-emerald-900 leading-tight">Alex Rivers</p>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest">Admin</p>
            </div>
            <img className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-primary-fixed" data-alt="portrait of a professional restaurant administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbO6VjAfz5RzHJakcSdPFq-X2i56SPrchk7AsOO0ZkHxhw6xCfxMPq8H0vVYUZSJZVx618OdnzjQXF6Pe-4Cv2uBlYBsyvPmjW5jiyi30Lec3OzNGuKa_lfXmEmAgYETNb6n9vPM-QByv2Nkssn3Bt2JHf1S7qBCnI-0JpV14d5g_92vkMeu13Y8hA_OSTrT9Lb7aoQsfKtiNxZKQH93oQL9y6F5JktmgJLCuRvk2fS98x_2WaCceNEU49FVH86SqgdtUnHFLcEvE"/>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-lg flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <h2 className="font-headline-lg text-2xl lg:text-headline-lg text-primary mb-1">Customer Orders</h2>
              <p className="font-body-md text-sm lg:text-base text-on-surface-variant">Manage and track all incoming requests from Earthy Gastronomy patrons.</p>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-sm text-label-sm hover:bg-stone-50 transition-colors">
                <span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                Filter
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-sm text-label-sm hover:bg-stone-50 transition-colors">
                <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                Export
              </button>
            </div>
          </div>
          {/* Stats Overview (Grid adjusted for mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter mb-xl">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50">
              <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface-variant mb-1 md:mb-2">Total Orders</p>
              <h3 className="text-lg md:text-headline-md font-headline-md text-primary">1,284</h3>
              <div className="mt-2 text-emerald-600 text-[10px] md:text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                <span className="hidden xs:inline">+12%</span>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50">
              <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface-variant mb-1 md:mb-2">Pending Prep</p>
              <h3 className="text-lg md:text-headline-md font-headline-md text-secondary">24</h3>
              <div className="mt-2 text-stone-400 text-[10px] md:text-xs font-semibold">Active</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50">
              <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface-variant mb-1 md:mb-2">Ready</p>
              <h3 className="text-lg md:text-headline-md font-headline-md text-emerald-700">12</h3>
              <div className="mt-2 text-stone-400 text-[10px] md:text-xs font-semibold">Pick-up</div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50">
              <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface-variant mb-1 md:mb-2">Revenue</p>
              <h3 className="text-lg md:text-headline-md font-headline-md text-primary">$3,420</h3>
              <div className="mt-2 text-emerald-600 text-[10px] md:text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]" data-icon="trending_up">trending_up</span>
                <span className="hidden xs:inline">+5%</span>
              </div>
            </div>
          </div>
          {/* Orders View (Cards on Mobile, Table on Desktop) */}
          <div className="bg-transparent lg:bg-white lg:rounded-xl lg:shadow-[0px_10px_30px_rgba(27,48,34,0.05)] lg:border lg:border-stone-50 lg:overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-stone-100">
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date &amp; Time</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {/* Row 1 */}
                  <tr className="hover:bg-stone-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-semibold text-primary">#ORD-8821</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">JS</div>
                        <div>
                          <p className="text-sm font-bold text-primary">Julianna Smith</p>
                          <p className="text-xs text-on-surface-variant">j.smith@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Oct 24, 2023 • 12:45 PM</td>
                    <td className="px-6 py-4 font-price-label text-price-label text-primary">$84.20</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">Ready</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity active:scale-95">
                        Notify for Pick-up
                      </button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-stone-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm font-semibold text-primary">#ORD-8822</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">MR</div>
                        <div>
                          <p className="text-sm font-bold text-primary">Marcus Reed</p>
                          <p className="text-xs text-on-surface-variant">marcus.r@webmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Oct 24, 2023 • 1:12 PM</td>
                    <td className="px-6 py-4 font-price-label text-price-label text-primary">$126.50</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">Preparing</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-4 py-2 border border-outline text-outline rounded-lg font-label-sm text-label-sm opacity-50 cursor-not-allowed">
                        Notify for Pick-up
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Mobile Card List View */}
            <div className="lg:hidden space-y-4">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-primary">#ORD-8821</span>
                    <p className="text-xs text-on-surface-variant mt-1">Oct 24 • 12:45 PM</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">Ready</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-y border-stone-50">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-sm">JS</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary">Julianna Smith</p>
                    <p className="text-xs text-on-surface-variant">j.smith@example.com</p>
                  </div>
                  <p className="font-price-label text-base text-primary">$84.20</p>
                </div>
                <div className="mt-4">
                  <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all">
                    Notify for Pick-up
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-primary">#ORD-8822</span>
                    <p className="text-xs text-on-surface-variant mt-1">Oct 24 • 1:12 PM</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-800 uppercase tracking-wider">Preparing</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-y border-stone-50">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-sm">MR</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary">Marcus Reed</p>
                    <p className="text-xs text-on-surface-variant">marcus.r@webmail.com</p>
                  </div>
                  <p className="font-price-label text-base text-primary">$126.50</p>
                </div>
                <div className="mt-4">
                  <button className="w-full py-3 border border-outline text-outline rounded-lg font-label-sm text-sm opacity-50 cursor-not-allowed">
                    Notify for Pick-up
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-primary">#ORD-8823</span>
                    <p className="text-xs text-on-surface-variant mt-1">Oct 24 • 1:20 PM</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">Ready</span>
                </div>
                <div className="flex items-center gap-3 py-3 border-y border-stone-50">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-sm">EL</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary">Elena Low</p>
                    <p className="text-xs text-on-surface-variant">elow@service.co</p>
                  </div>
                  <p className="font-price-label text-base text-primary">$42.00</p>
                </div>
                <div className="mt-4">
                  <button className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-sm font-bold hover:opacity-90 active:scale-[0.98] transition-all">
                    Notify for Pick-up
                  </button>
                </div>
              </div>
            </div>
            {/* Pagination Footer */}
            <div className="mt-4 lg:mt-0 px-6 py-4 lg:bg-surface-container-low flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body-md text-sm text-on-surface-variant">
                Showing <span className="font-semibold text-primary">1-5</span> of <span className="font-semibold text-primary">124</span> orders
              </p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-white disabled:opacity-30" disabled="">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_left">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-sm text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant font-label-sm text-xs">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-on-surface-variant font-label-sm text-xs">3</button>
                <span className="text-stone-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-white">
                  <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          {/* Contextual Help / Info Section */}
          <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-gutter pb-8">
            <div className="p-6 bg-primary-fixed rounded-xl flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                <span className="material-symbols-outlined" data-icon="info" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>info</span>
              </div>
              <div>
                <h4 className="font-headline-md text-sm text-primary mb-1">Pick-up Notification Tip</h4>
                <p className="text-sm text-on-primary-fixed-variant leading-relaxed">Notifications send an automated SMS/email with a QR code for contactless verification.</p>
              </div>
            </div>
            <div className="p-6 bg-secondary-fixed rounded-xl flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-secondary">
                <span className="material-symbols-outlined" data-icon="schedule">schedule</span>
              </div>
              <div>
                <h4 className="font-headline-md text-sm text-secondary mb-1">Kitchen Sync</h4>
                <p className="text-sm text-on-secondary-fixed-variant leading-relaxed">Orders marked "Ready" for &gt;30 min are flagged to ensure food freshness.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderManagement;