import { useEffect, useState } from "react";

export default function DigitalBistroCatalog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md antialiased">
      <aside
        id="sidebar"
        className={`fixed left-0 top-0 h-full flex flex-col py-6 px-4 bg-stone-50 dark:bg-stone-950 w-64 border-r border-stone-200 dark:border-stone-800 shadow-sm font-['Epilogue'] tracking-tight z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-2 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="restaurant_menu">
                restaurant_menu
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-500">BistroAdmin</h1>
              <p className="text-xs text-stone-500 font-medium">Management Portal</p>
            </div>
          </div>
          <button className="lg:hidden text-stone-400" type="button" onClick={() => setSidebarOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-emerald-900 dark:text-emerald-400 font-bold border-r-4 border-emerald-900 dark:border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="restaurant_menu">
              restaurant_menu
            </span>
            <span>Catalog</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span>Users</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="shopping_cart">
              shopping_cart
            </span>
            <span>Orders</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="storefront">
              storefront
            </span>
            <span>Restaurant Info</span>
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-3 px-2">
            <img
              alt="Administrator Avatar"
              className="w-10 h-10 rounded-full border-2 border-primary-fixed-dim"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdH6XiucfsLuixtWePatbgFIx8tkMM9IqqtPAjVjs838Ufh10OiB2aBdAbpci-4pbi6hj9JEKtHwPHpmqaDQa0224Fo9-VfbTTBRaeEz6bgG1-wXIHY2q-92VABIzA9JsK_XOH0KurUbs_u8Qg4dyRIz7wuxlIZZ0dyRbMPQmx4B04TX4LD2mfZ73nP8l4Az2Hm-wS6-WMKBbKaksNDjRy8kMLlQ4brOH18KjB_MecdNXVfh00pvO9UnUooU-tsPZZXQBpNpmqmIc"
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate">Chef Julian</p>
              <p className="text-xs text-stone-500 truncate">Senior Admin</p>
            </div>
            <button className="text-stone-400 hover:text-emerald-900" type="button">
              <span className="material-symbols-outlined" data-icon="logout">
                logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        id="mobile-menu-overlay"
        onClick={() => setSidebarOpen(false)}
      />

      <main className="lg:ml-64 min-h-screen bg-background">
        <header className="w-full h-16 sticky top-0 z-30 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 shadow-[0px_10px_30px_rgba(27,48,34,0.05)] flex items-center justify-between px-4 lg:px-8 font-['Epilogue'] font-medium">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden p-2 -ml-2 text-stone-600" type="button" onClick={() => setSidebarOpen(true)}>
              <span className="material-symbols-outlined" data-icon="menu">
                menu
              </span>
            </button>
            <div className="relative w-full max-w-xs lg:max-w-md focus-within:ring-2 focus-within:ring-emerald-500/20 rounded-lg">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-icon="search">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-0 placeholder-stone-400"
                placeholder="Search catalog..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-6 ml-2">
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="material-symbols-outlined text-stone-400 hover:text-emerald-700 cursor-pointer text-xl lg:text-2xl" data-icon="notifications">
                notifications
              </span>
              <span className="hidden sm:inline material-symbols-outlined text-stone-400 hover:text-emerald-700 cursor-pointer text-xl lg:text-2xl" data-icon="settings">
                settings
              </span>
            </div>
            <div className="h-6 lg:h-8 w-[1px] bg-stone-200 dark:border-stone-800 mx-1 lg:mx-0" />
            <h2 className="text-sm lg:text-lg font-semibold text-stone-900 dark:text-stone-100 whitespace-nowrap">Catalog</h2>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-headline-lg text-2xl lg:text-headline-lg text-on-background mb-1">Menu Catalog</h2>
              <p className="font-body-md text-sm lg:text-base text-on-surface-variant">Manage your food and beverage offerings.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition-all w-full sm:w-auto" type="button">
              <span className="material-symbols-outlined" data-icon="add">
                add
              </span>
              <span>Add Food</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-xl lg:text-2xl" data-icon="flatware">
                  flatware
                </span>
              </div>
              <div>
                <p className="text-[10px] lg:text-label-sm font-label-sm text-stone-500 uppercase tracking-wider">Items</p>
                <p className="text-lg lg:text-headline-md font-headline-md text-on-background">124</p>
              </div>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                <span className="material-symbols-outlined text-xl lg:text-2xl" data-icon="check_circle">
                  check_circle
                </span>
              </div>
              <div>
                <p className="text-[10px] lg:text-label-sm font-label-sm text-stone-500 uppercase tracking-wider">Active</p>
                <p className="text-lg lg:text-headline-md font-headline-md text-on-background">112</p>
              </div>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-secondary/5 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                <span className="material-symbols-outlined text-xl lg:text-2xl" data-icon="trending_up">
                  trending_up
                </span>
              </div>
              <div>
                <p className="text-[10px] lg:text-label-sm font-label-sm text-stone-500 uppercase tracking-wider">Popular</p>
                <p className="text-lg lg:text-headline-md font-headline-md text-on-background">18</p>
              </div>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-surface-container-high rounded-full flex items-center justify-center text-tertiary flex-shrink-0">
                <span className="material-symbols-outlined text-xl lg:text-2xl" data-icon="category">
                  category
                </span>
              </div>
              <div>
                <p className="text-[10px] lg:text-label-sm font-label-sm text-stone-500 uppercase tracking-wider">Types</p>
                <p className="text-lg lg:text-headline-md font-headline-md text-on-background">12</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="hidden lg:grid grid-cols-12 bg-surface-container-low text-on-surface-variant px-6 py-4 rounded-t-xl border-x border-t border-stone-100 font-label-sm text-label-sm uppercase tracking-wider">
              <div className="col-span-5">Name</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1">Price</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            <div className="space-y-4 lg:space-y-0 lg:border-x lg:border-b lg:border-stone-100 lg:rounded-b-xl lg:overflow-hidden bg-white lg:bg-transparent shadow-sm lg:shadow-none">
              <div className="bg-white p-4 lg:p-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:border-b lg:border-stone-50 hover:bg-stone-50/50 transition-colors rounded-xl lg:rounded-none border border-stone-100 lg:border-none">
                <div className="col-span-5 flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 lg:w-12 lg:h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      alt="Truffle Risotto"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmRI7RB1vwN602qFxISDca8pMC1NSoTkr3-YvzeV9q2ZH5GVHh17EVaXgGifhHy01DDYqlueQaSmS5Uml3EBU0dpJ4Yo-rKTbbLiRk8Ki1Liw0cPJQj9boncHkEVDqUbHaS_ER2Hp79odMG-t8eeb1a5neRpt1LtDESieCCJHc2x0Zmmd7Pdf9Qwzx0OKp301yQUC8tHI00x6-pncRzIjj0qsPAOnAACmzAVhXX-VpDaHVekj2_rmd8EFyGtFwfmPzACtJvPPcIL0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-background lg:text-base">Truffle Wild Mushroom Risotto</span>
                    <span className="lg:hidden text-xs text-stone-500 mt-1">Oct 12, 2023</span>
                  </div>
                </div>
                <div className="col-span-2 mb-3 lg:mb-0">
                  <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Main Course</span>
                </div>
                <div className="col-span-1 mb-3 lg:mb-0">
                  <span className="font-price-label text-price-label text-secondary lg:text-lg">$28.50</span>
                </div>
                <div className="col-span-2 mb-4 lg:mb-0">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-sm font-semibold">Active</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between lg:justify-end gap-2 border-t lg:border-none pt-3 lg:pt-0">
                  <span className="hidden lg:block text-sm text-stone-500 mr-4 font-normal">Oct 12, 2023</span>
                  <div className="flex gap-2 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                      <span className="lg:hidden text-sm font-semibold">Edit</span>
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-error hover:bg-error/5 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                      <span className="lg:hidden text-sm font-semibold">Remove</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:border-b lg:border-stone-50 hover:bg-stone-50/50 transition-colors rounded-xl lg:rounded-none border border-stone-100 lg:border-none">
                <div className="col-span-5 flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 lg:w-12 lg:h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      alt="Aged Ribeye"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGBm8DYt1THR-9Fa2F9mrHWVJUZR-T5OPnmyVva5eMA18JNvtJUaqaJomoZbDmg1YgOZsP4ABbBW0xr_W68WVgy1cw5YF5BQ4faHgz_9z3BjQDGdianm3nk83JJq5_U-xX003uuEUGmikb8RfdHVwM98_xAL-TJhloOcJ_5JvLv_zeS7bB2sa4DEek71l5ChCyMNie655mujaIkLUSolz7LWCeWVgfNxrO90UTitSUfPM6o5GKIDXOAVWg72EmWg-wQ_vgAepRLWE"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-background lg:text-base">45-Day Dry Aged Ribeye</span>
                    <span className="lg:hidden text-xs text-stone-500 mt-1">Oct 14, 2023</span>
                  </div>
                </div>
                <div className="col-span-2 mb-3 lg:mb-0">
                  <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Steaks</span>
                </div>
                <div className="col-span-1 mb-3 lg:mb-0">
                  <span className="font-price-label text-price-label text-secondary lg:text-lg">$54.00</span>
                </div>
                <div className="col-span-2 mb-4 lg:mb-0">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-sm font-semibold">Active</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between lg:justify-end gap-2 border-t lg:border-none pt-3 lg:pt-0">
                  <span className="hidden lg:block text-sm text-stone-500 mr-4 font-normal">Oct 14, 2023</span>
                  <div className="flex gap-2 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                      <span className="lg:hidden text-sm font-semibold">Edit</span>
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-error hover:bg-error/5 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                      <span className="lg:hidden text-sm font-semibold">Remove</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:border-b lg:border-stone-50 hover:bg-stone-50/50 transition-colors rounded-xl lg:rounded-none border border-stone-100 lg:border-none">
                <div className="col-span-5 flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 lg:w-12 lg:h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      alt="Panna Cotta"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuACOxTtxBWs_Otk2ZxyLJ8Um-6m3bD5CO_9mwzPmLGsPvsdK-kcUwMC9g4fdt6ZfcITCkopMrmz0cc38aFcAoaqkzMtomJCEU0z5UkZQL-aBpJOD25FpTCia7SJaMxHzWUpMnBwe_yRAkBRVoSqV65eemWKdXIcdAEogQzTvjdVdPXjmXJUPg9aVmIrXggydisZRjTd4N7XFQsKFcE5ITJiJGDtgb_7AcygPT1zUeSrSN8t22VL7kGSPS2fEwzbkziIrvORATujIXw"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-background lg:text-base">Honey Lavender Panna Cotta</span>
                    <span className="lg:hidden text-xs text-stone-500 mt-1">Nov 02, 2023</span>
                  </div>
                </div>
                <div className="col-span-2 mb-3 lg:mb-0">
                  <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Desserts</span>
                </div>
                <div className="col-span-1 mb-3 lg:mb-0">
                  <span className="font-price-label text-price-label text-secondary lg:text-lg">$12.00</span>
                </div>
                <div className="col-span-2 mb-4 lg:mb-0">
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                    <span className="text-sm font-semibold">Inactive</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between lg:justify-end gap-2 border-t lg:border-none pt-3 lg:pt-0">
                  <span className="hidden lg:block text-sm text-stone-500 mr-4 font-normal">Nov 02, 2023</span>
                  <div className="flex gap-2 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                      <span className="lg:hidden text-sm font-semibold">Edit</span>
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-error hover:bg-error/5 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                      <span className="lg:hidden text-sm font-semibold">Remove</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 hover:bg-stone-50/50 transition-colors rounded-xl lg:rounded-none border border-stone-100 lg:border-none">
                <div className="col-span-5 flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 lg:w-12 lg:h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      alt="Grilled Octopus"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxC9yaISJntAEekH6dfsq_lznnbqQxxHi5Gokp2y88T2CpY_JnRrhHtt08i948N7bkMPdNWgMsepCS3H5zUQE8bX3rwd_bZVnMj4BA44UiPxcH9tQPiRCUIw6QiHyDofypwf4gbnbi8ahNEMMFUhlewD-gZcVgWHk8gatBB-u_o3RsYwSLveXVCwNV-VAWvrwNixI-cp-XBFQRW8nECYEEbHEirRFZYIwN77wuIUT4Zn4IT5-pJUNn0h4BjvShzi14v6b2qnYlRjY"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-on-background lg:text-base">Mediterranean Grilled Octopus</span>
                    <span className="lg:hidden text-xs text-stone-500 mt-1">Nov 05, 2023</span>
                  </div>
                </div>
                <div className="col-span-2 mb-3 lg:mb-0">
                  <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">Appetizers</span>
                </div>
                <div className="col-span-1 mb-3 lg:mb-0">
                  <span className="font-price-label text-price-label text-secondary lg:text-lg">$22.00</span>
                </div>
                <div className="col-span-2 mb-4 lg:mb-0">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="text-sm font-semibold">Active</span>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between lg:justify-end gap-2 border-t lg:border-none pt-3 lg:pt-0">
                  <span className="hidden lg:block text-sm text-stone-500 mr-4 font-normal">Nov 05, 2023</span>
                  <div className="flex gap-2 w-full lg:w-auto">
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                      <span className="lg:hidden text-sm font-semibold">Edit</span>
                    </button>
                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 p-2 lg:p-2 text-stone-500 hover:text-error hover:bg-error/5 rounded-lg transition-all border border-stone-100 lg:border-none" type="button">
                      <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                      <span className="lg:hidden text-sm font-semibold">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 lg:px-6 py-4 rounded-xl border border-stone-100 lg:border-none shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-500">Rows:</span>
                <div className="relative">
                  <select className="appearance-none bg-stone-50 border border-stone-200 text-sm rounded-lg pl-3 pr-8 py-1 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer">
                    <option>10</option>
                    <option>25</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-1 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none scale-75" data-icon="expand_more">
                    expand_more
                  </span>
                </div>
                <span className="text-xs lg:text-sm text-stone-500">1-4 of 124</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg text-stone-400 hover:bg-stone-100 disabled:opacity-30" type="button">
                  <span className="material-symbols-outlined" data-icon="chevron_left">
                    chevron_left
                  </span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-900 text-white text-sm font-bold" type="button">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 text-sm font-medium" type="button">
                  2
                </button>
                <span className="px-1 text-stone-400">...</span>
                <button className="p-2 rounded-lg text-stone-400 hover:bg-stone-100" type="button">
                  <span className="material-symbols-outlined" data-icon="chevron_right">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="p-5 lg:p-6 bg-surface-container-high rounded-xl flex items-center justify-between border border-stone-200">
                <div>
                  <h4 className="font-bold text-emerald-900 mb-1">Seasonal Menu</h4>
                  <p className="text-xs lg:text-sm text-stone-600">Winter Catalog review.</p>
                </div>
                <button className="px-3 lg:px-4 py-2 bg-emerald-900 text-white text-xs lg:text-sm font-bold rounded-lg whitespace-nowrap" type="button">
                  Review Now
                </button>
              </div>
              <div className="p-5 lg:p-6 bg-secondary-fixed text-on-secondary-fixed rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">Bulk Export</h4>
                  <p className="text-xs lg:text-sm opacity-80">Get menu in PDF/CSV.</p>
                </div>
                <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all" type="button">
                  <span className="material-symbols-outlined text-xl lg:text-2xl" data-icon="download">
                    download
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
