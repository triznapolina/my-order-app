import React from "react";

export default function DigitalBistroCategoryManagement() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* SideNavBar */}
        <aside className="hidden lg:flex h-screen w-64 border-r border-stone-200 dark:border-stone-800 bg-[#FCFBF7] dark:bg-stone-950 flex-col py-6 px-4 font-['Epilogue'] tracking-tight">
          <div className="flex items-center gap-3 px-2 mb-10">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
              <img
                alt="Restaurant Logo"
                data-alt="minimalist logo for a high-end farm-to-table restaurant featuring an abstract leaf and a bistro chair in deep forest green"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxs11WRxdfMD9VbkJHkvNzFrzN5enFMvCoKswMIsCqNUSL6PgLtg8mC51LT-Wir0mAn45jYPyvNGLX7BQpIxDioDWZdjuRp9qR5MhubdfRPIKVT_OO4pKQIi16IEbWu4cFG65-RbfVsIBJcqJKEsirYHRBIkLdhjQXM2zPLtOlLjaQbmsKvCB9-A0dfJnD5iCT0s8yyRP9lNrQpHCYr-9kLLZGBniRvoUEey1ouJl5SNIfs93PrQ44oX0hnz6By53fATops0Z-wOE"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1B3022] dark:text-emerald-500">
                Earthy Bistro
              </h2>
              <p className="text-xs text-stone-500">Admin Management</p>
            </div>
          </div>
          <nav className="flex-1 flex flex-col gap-1">
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-emerald-300 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="restaurant_menu">
                restaurant_menu
              </span>
              <span>Catalog</span>
            </a>
            {/* Active Item: Categories */}
            <a
              className="flex items-center gap-3 px-4 py-3 bg-[#1B3022]/5 text-[#1B3022] dark:bg-emerald-400/10 dark:text-emerald-400 rounded-lg font-semibold"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="category"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                category
              </span>
              <span>Categories</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-emerald-300 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="group">
                group
              </span>
              <span>Users</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-emerald-300 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="receipt_long">
                receipt_long
              </span>
              <span>Orders</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-emerald-300 transition-colors hover:bg-stone-100 dark:hover:bg-stone-900 rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="store">
                store
              </span>
              <span>Restaurant Info</span>
            </a>
          </nav>
          <div className="mt-auto border-t border-stone-100 dark:border-stone-800 pt-6 px-2">
            <div className="flex items-center gap-3">
              <img
                alt="Administrator Portrait"
                className="w-10 h-10 rounded-full object-cover"
                data-alt="professional headshot of a restaurant manager in a clean minimalist kitchen setting, natural lighting, soft focus background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKro-iDI6zRWtgLJ_odTFO8Q3J57Vuv9yzQ95XLhrcmjaYGnl77CDTalBOi1AF74CGvFeHd9bLG4RIB7iXNqK7NrlL6XbtExpy6RnSYCbRtM1_CFBkfgq0p1ogKCcwEG6-aefeEpkfgu9di3n7Ff74YR8CAf40g6kpVkGowUeMJiCgIkbDIYWebPFKLNKT4hYH6YAtDuepgdoJLcWJa7fhOEIU8qNTP_j2-AA63BeW3NjaJKeDHeHPXQmwzSrR2go8eduR1sKm5g"
              />
              <div className="overflow-hidden">
                <p className="text-sm font-semibold truncate text-primary">Alex Chen</p>
                <p className="text-xs text-stone-400 truncate">System Admin</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden relative">
          {/* TopAppBar */}
          <header className="w-full h-16 sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 flex items-center justify-between px-4 lg:px-8 shadow-[0px_10px_30px_rgba(27,48,34,0.05)] font-['Epilogue'] text-sm">
            <div className="flex items-center flex-1 max-w-xl">
              <button className="lg:hidden mr-4 text-stone-500">
                <span className="material-symbols-outlined" data-icon="menu">
                  menu
                </span>
              </button>
              <div className="relative w-full">
                <span
                  className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
                  data-icon="search"
                >
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-stone-50 dark:bg-stone-800 border-none rounded-full focus:ring-2 focus:ring-primary/20 text-on-surface"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden sm:flex items-center gap-4 text-stone-400">
                <button className="hover:text-[#C17735] transition-colors">
                  <span className="material-symbols-outlined" data-icon="notifications">
                    notifications
                  </span>
                </button>
                <button className="hover:text-[#C17735] transition-colors">
                  <span className="material-symbols-outlined" data-icon="settings">
                    settings
                  </span>
                </button>
              </div>
              <div className="hidden sm:block h-8 w-[1px] bg-stone-100 dark:bg-stone-800"></div>
              <span className="font-bold text-[#1B3022] dark:text-emerald-400 truncate max-w-[120px]">
                Dashboard
              </span>
            </div>
          </header>

          {/* Main Canvas Content */}
          <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
            <div className="mb-lg lg:mb-xl flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Category Management
                </h1>
                <p className="text-stone-500 font-body-md max-w-lg">
                  Organize your bistro's menu by defining distinctive categories and seasonal collections.
                </p>
              </div>
              <button className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                New Category
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {/* Category Card */}
              <div className="bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50 dark:border-stone-800 group cursor-pointer transition-all hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="vibrant gourmet garden salad with heirloom tomatoes, fresh burrata, and pesto drizzle on a ceramic plate with soft morning light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJLh9hCMoS34eno479lhTnwnaoUsIJRH_OsKYVImYhVn2TynGGfPeqpigz2jAGJNCXjTANv3AjI47RuAz4nnO42lh3wxYfLkeJGGCetDYxNcUpMaE8SKI0vqBZalBBFII_I_bYyk0EQ2U00zF5o9T3RtbKYfYHp1IbJzzPXOzEmbVf70ZsycQ7SGWJlvzwXqkqGL5OltvP-Ek7QFZzcw8PCXN7wSy0pkWp0qqQuYwWhbggb1pUZ1AT562cZ-p3vbNG_a-slnD0_o0"
                  />
                </div>
                <div className="p-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Farm Fresh Salads
                    </h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      12 Items
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                    Hand-picked seasonal greens and organic vegetables from our local partner farms.
                  </p>
                  <div className="flex gap-2">
                    <button className="text-stone-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">
                        edit
                      </span>
                    </button>
                    <button className="text-stone-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50 dark:border-stone-800 group cursor-pointer transition-all hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="perfectly grilled artisan steak with rosemary butter and roasted root vegetables on a dark slate background, dramatic side lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCU-GovDPVKd5Zjx4oa2denbx274wNfCmOGPcxpQO54J1ATtjlAXeeEs-elZY63zt5MM1v33w0quux5ynKJjG6L4LTmlpb5rqBu_IMQs-Qwl_EcYoCZv2h4Ztu_SNydk47OIOR1rxPNjo5Oagd9KvEb9IbE8uc3IqpOY_4lOgv6VcQwKYVTs-Gq0ZlV8BOiCzEdZjIeOQcrvAdHSYJZ9QkGeDqZBrBJn6gq10XV_M1rnFpHi5Y3DbXO-MwFaaLZqRAaZZjR-sb8yw"
                  />
                </div>
                <div className="p-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Main Entrées
                    </h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      24 Items
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                    Hearty, chef-inspired dishes featuring premium proteins and refined pairings.
                  </p>
                  <div className="flex gap-2">
                    <button className="text-stone-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">
                        edit
                      </span>
                    </button>
                    <button className="text-stone-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50 dark:border-stone-800 group cursor-pointer transition-all hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="elegant chocolate fondant dessert with salted caramel drizzle and edible gold flakes on a minimalist cream plate"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTC3RbErpuxxcjxJDiIwGSKInNw5o4ZJUy8WiKitH0bRJ1sPPD6Bhfg8-Pq3SPh5yFW_1ZmWa_MpJ2amo9j8XsUBv6nftcBdUjjXVrUp8JjzhY6p3PCKbaufgfUukkhhSnik5a_7T2Tm7Jp3X_6HgWH2u4_YvevB12pWLkuF9lJXNNI5I3MySuLYbrUSCbOSd7hYbDS9e6d0yTRQ356eucK4UvUsB86rgdwUtuu1xsFMSfDXuX8Wx7wgIppVsvBDQd-yykjFAzW50"
                  />
                </div>
                <div className="p-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Artisan Sweets
                    </h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      8 Items
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                    Exquisite pastry creations and seasonally inspired desserts to finish your meal.
                  </p>
                  <div className="flex gap-2">
                    <button className="text-stone-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">
                        edit
                      </span>
                    </button>
                    <button className="text-stone-400 hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL OVERLAY: Category Details */}
          <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center p-0 lg:p-gutter backdrop-blur-md bg-primary-container/40">
            <div className="bg-white dark:bg-stone-950 w-full max-w-2xl lg:rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom lg:zoom-in duration-300 rounded-t-2xl flex flex-col max-h-[90vh] lg:max-h-none">
              {/* Modal Header */}
              <div className="px-6 lg:px-8 py-5 lg:py-6 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-[#FCFBF7] dark:bg-stone-900 shrink-0">
                <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-primary">
                  Category Details
                </h2>
                <button className="text-stone-400 hover:text-primary transition-colors p-1">
                  <span className="material-symbols-outlined" data-icon="close">
                    close
                  </span>
                </button>
              </div>

              {/* Modal Body / Form */}
              <div className="overflow-y-auto flex-1">
                <form className="p-6 lg:p-8 space-y-6 lg:space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest"
                        htmlFor="category-name"
                      >
                        Category Name
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-stone-200 dark:border-stone-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-on-surface font-body-md placeholder:text-stone-400"
                        id="category-name"
                        name="category-name"
                        placeholder="e.g., Seasonal Sides"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest"
                        htmlFor="short-description"
                      >
                        Short Description
                      </label>
                      <textarea
                        className="w-full bg-surface-container-low border-stone-200 dark:border-stone-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-on-surface font-body-md placeholder:text-stone-400 resize-none"
                        id="short-description"
                        name="short-description"
                        placeholder="Briefly describe the theme and contents of this category..."
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-widest">
                        Category Image
                      </label>
                      <div className="border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-xl p-6 lg:p-8 text-center bg-surface-container-lowest hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors group cursor-pointer">
                        <span
                          className="material-symbols-outlined text-4xl text-stone-300 group-hover:text-primary transition-colors mb-2"
                          data-icon="add_a_photo"
                        >
                          add_a_photo
                        </span>
                        <p className="text-sm text-stone-500">
                          Drag and drop or{" "}
                          <span className="text-secondary font-bold">browse</span>
                        </p>
                        <p className="text-[10px] text-stone-400 mt-1 italic">
                          16:9 ratio, high-res JPEG
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Modal Footer */}
              <div className="px-6 lg:px-8 py-5 lg:py-6 border-t border-stone-100 dark:border-stone-800 bg-[#FCFBF7] dark:bg-stone-900 flex flex-col lg:flex-row justify-end items-center gap-3 lg:gap-4 shrink-0">
                <button className="w-full lg:w-auto px-6 py-3 lg:py-2 rounded-lg font-semibold text-stone-600 hover:text-primary hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800 transition-all font-label-sm order-2 lg:order-1">
                  Cancel
                </button>
                <button className="w-full lg:w-auto px-8 py-3 lg:py-2 bg-secondary text-on-secondary rounded-lg font-semibold shadow-md hover:opacity-90 active:scale-[0.98] lg:active:scale-95 transition-all font-label-sm order-1 lg:order-2">
                  Save Category
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
