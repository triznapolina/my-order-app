import React from "react";

export default function DigitalBistroDishCatalog() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <aside className="hidden lg:flex fixed left-0 top-0 h-full flex-col py-6 px-4 bg-stone-50 dark:bg-stone-950 text-emerald-900 dark:text-emerald-500 font-['Epilogue'] tracking-tight h-screen w-64 border-r border-stone-200 dark:border-stone-800 shadow-sm z-50">
          <div className="mb-10 px-4">
            <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-500">BistroAdmin</h1>
            <p className="text-xs font-medium text-stone-500">Management Portal</p>
          </div>
          <nav className="flex-1 space-y-2">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-emerald-900 dark:text-emerald-400 font-bold border-r-4 border-emerald-900 dark:border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 transition-all" href="#">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span>Catalog</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">group</span>
              <span>Users</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span>Orders</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">storefront</span>
              <span>Restaurant Info</span>
            </a>
          </nav>
          <div className="mt-auto px-4 pt-6 border-t border-stone-100 flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              data-alt="professional portrait of a restaurant manager in a clean white shirt with soft studio lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxYJeBraFLqjI6KZ_pVGEWsmxhfoeiYgebvSDaoNZsQs2JY7wsavzVh54m0xu1847afj85V2bRb6P-62aLjZopq1RM6L4tejCOagB_XSeBOy-bPljjaovNpm1dcjT3bQZ81gQs-4JPDHt0gpfsX_T5wi8EYAx5W71se_CZ01FYHN0I5heOWQfsXlB2FP_c3PTmVoN8lVQiUoUkqrhPtWF78hhBFINkzN6qQkDYpZwKAr9X0kDl6EEv5L3vtouN8Qd23UScTe53118"
            />
            <div>
              <p className="text-sm font-semibold truncate text-stone-900">Admin User</p>
              <p className="text-[10px] text-stone-400 truncate">Super Administrator</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden relative lg:ml-64">
          <header className="w-full h-16 sticky top-0 z-40 flex items-center justify-between px-4 lg:px-8 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 shadow-[0px_10px_30px_rgba(27,48,34,0.05)] font-['Epilogue'] text-sm">
            <div className="flex items-center flex-1 max-w-xl gap-4">
              <button className="lg:hidden text-stone-500">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <h2 className="text-base lg:text-lg font-semibold text-stone-900 dark:text-stone-100 whitespace-nowrap">Catalog</h2>
              <div className="hidden sm:block max-w-md w-full relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-stone-50 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Search menu items..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-stone-400 hover:text-emerald-700 cursor-pointer">notifications</span>
              <span className="material-symbols-outlined text-stone-400 hover:text-emerald-700 cursor-pointer">settings</span>
            </div>
          </header>

          <div className="p-4 lg:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="font-headline-lg text-2xl lg:text-3xl text-primary">Dish Catalog</h1>
                <p className="font-body-md text-sm lg:text-base text-on-surface-variant">Manage your seasonal menu items and availability.</p>
              </div>
              <button className="w-full sm:w-auto bg-primary text-on-primary px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-sm">add</span>
                Add New Item
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <tr>
                    <th className="px-6 py-4">Dish</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        className="w-12 h-12 rounded-lg object-cover"
                        data-alt="vibrant healthy salad bowl with fresh greens, tomatoes, and balsamic glaze"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX2APSNe71qKO764BjysiwWGbwZBHPjacJaVVTlUlVp5SYys1tkrkVfCnesCMf29Uz5ztVMA9dQslX1DYSFvYnn-W88R2ieagp9W2o84mgQKVwbqMuv9fTF4RgZXa7-bihm943D8kppDGhoV1bNHS8oQ62xzvmeLD4Xls0DxFWvOzhNt-wFlT9mKMw6G9fZ8pk0H9Bj8EoqN0Qs-ivGlKh8B1tnzmkZ4EzEKHcgLq3qX62CGQOQcEH9bfJxNRb2aOtFT4Dr3qn5yI"
                      />
                      <div>
                        <p className="font-semibold text-stone-900">Quinoa Spring Salad</p>
                        <p className="text-xs text-stone-500">Fresh seasonal greens...</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-on-primary-fixed-variant text-xs font-bold uppercase tracking-wider">
                        Entrées
                      </span>
                    </td>
                    <td className="px-6 py-4 font-price-label text-price-label text-primary">$18.00</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-stone-400 hover:text-emerald-700 transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 modal-overlay overflow-y-auto">
            <div className="bg-background w-full max-w-4xl sm:rounded-2xl shadow-2xl overflow-hidden border border-stone-200/50 flex flex-col md:flex-row min-h-screen sm:min-h-0 sm:max-h-[90vh]">
              <button className="md:hidden absolute top-4 right-4 z-[70] bg-white/20 backdrop-blur p-2 rounded-full text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="w-full md:w-2/5 bg-surface-container-low p-6 lg:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-100">
                <div className="w-full text-center mb-6">
                  <h3 className="font-headline-md text-xl lg:text-2xl text-primary mb-2">Dish Image</h3>
                  <p className="text-xs lg:text-label-sm font-label-sm text-on-surface-variant">Upload a high-resolution photo</p>
                </div>
                <div className="relative group w-full max-w-[280px] md:max-w-none aspect-square bg-white rounded-2xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-secondary-container transition-all overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    data-alt="close-up of a beautifully plated gourmet seafood dish with delicate garnishes and microgreens"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFTv2wIYL5DNu4b1DeWgb8AiahKw6EFROgfegKcSUS1Q858CcfEcujcxyoY-gcEjnJPKy40VFweSEX84aCJ7ff0sZi8HNZCPRP3fSwZXF03WIGYx54OueF4T0UCjh4blnONqhCs3FLPOokngd13XT6W3uY31191nMgEjlJRrWnVB-j-B4U945vEWQprlvY_5YSjV4D1kroIen_pprjTdrRC92Rid9rXu76w9CHpIecnCVpI_FpEk3QyRHMGrRlLPLc9kGQpSKTjiQ"
                  />
                  <div className="relative z-10 bg-white/90 backdrop-blur px-5 lg:px-6 py-2.5 lg:py-3 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-sm lg:text-base text-secondary">photo_camera</span>
                    <span className="text-xs lg:text-sm font-bold text-primary">Replace Photo</span>
                  </div>
                </div>
                <div className="mt-6 lg:mt-8 grid grid-cols-3 gap-3 w-full max-w-[280px] md:max-w-none">
                  <div className="aspect-square rounded-lg bg-surface-container-high border border-stone-200 flex items-center justify-center text-stone-400 hover:text-secondary cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-xl">add</span>
                  </div>
                  <div className="aspect-square rounded-lg bg-stone-100 overflow-hidden opacity-50">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="assorted gourmet appetizers on a rustic wooden platter"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGLGFO4YBSmkI8SDckNzN9xyOfzsrDpjimZGNNzrh2gcSzCUvs1NkC-4gPrq794FVJISCRLdAsvx7kUjcXuOBdRvT7QCRN41m8xPniYDrwVSvRke9zjHFI3Vvyhl6ieATXaYx1uQGGy0uLJlcWWQ7zrQL0jIPt5f5KNMrwpJO97n9EpYsyWDcd4-1Mvue9u_Vudz0H-kOD-xX4_H-oJXO9ps2S2aGDyRh-GeCbbUknnyG4ME0kKKR4rMGs80dEV41r83AX2fAPTZI"
                    />
                  </div>
                  <div className="aspect-square rounded-lg bg-stone-100 overflow-hidden opacity-50">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="elegantly plated dessert with fresh berries and coulis"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-C5qYpNR3Gt-zRhJIxrjUwfolbp81iCFjXrWASl4__FeqbLSV2CDeD_k6McOBi4cGYsJoe-EtR7FfvAFHHgm3OVt-00EISbq7quOEVX-YWvzWCvLFBR6uZTEFCcIMXABb1Gjh25WKNtbSQnk70dHUT4eRFRhQ2C7-LEkhLMYaMD52Xn0453Kfe0uM-gV_wTWqEoiiuAhHJrM3vH7tEb9aY7Y-fwr9i9GasIcsfEgCM6wA53Nkz9nAT7JLU2Q_pH7hYLNjA42erk"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/5 p-6 lg:p-8 overflow-y-auto custom-scrollbar flex flex-col">
                <div className="flex justify-between items-start mb-6 lg:mb-8">
                  <div>
                    <h2 className="font-headline-lg text-2xl lg:text-3xl text-primary">Item Details</h2>
                    <p className="font-body-md text-sm lg:text-base text-on-surface-variant">Adjust pricing and seasonal descriptions.</p>
                  </div>
                  <button className="hidden md:flex p-2 hover:bg-surface-container rounded-full transition-colors">
                    <span className="material-symbols-outlined text-stone-400">close</span>
                  </button>
                </div>
                <form className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="sm:col-span-2">
                      <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                        Dish Name
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-secondary-container focus:border-secondary-container font-body-md text-primary"
                        type="text"
                        defaultValue="Pan-Seared Scallops"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                        Category
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-surface-container-lowest border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-secondary-container focus:border-secondary-container appearance-none"
                          defaultValue="Entrées"
                        >
                          <option>Appetizers</option>
                          <option>Entrées</option>
                          <option>Mains</option>
                          <option>Desserts</option>
                          <option>Wine Pairing</option>
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
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                        <input
                          className="w-full bg-surface-container-lowest border-stone-200 rounded-lg pl-8 pr-4 py-2.5 lg:py-3 focus:ring-secondary-container focus:border-secondary-container font-price-label text-base lg:text-price-label text-primary"
                          step="0.01"
                          type="number"
                          defaultValue="24.50"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                        Description
                      </label>
                      <textarea
                        className="w-full bg-surface-container-lowest border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-secondary-container focus:border-secondary-container font-body-md text-primary resize-none"
                        rows={3}
                        defaultValue="Fresh diver scallops, cauliflower purée, crispy pancetta, and microgreens with a lemon butter emulsion."
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                        Status
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-surface-container-lowest border-stone-200 rounded-lg px-4 py-2.5 lg:py-3 focus:ring-secondary-container focus:border-secondary-container appearance-none"
                          defaultValue="Active"
                        >
                          <option>Active</option>
                          <option>Out of Stock</option>
                          <option>Hidden</option>
                          <option>Seasonal Only</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-sm text-[10px] lg:text-label-sm text-on-surface-variant uppercase mb-1.5 lg:mb-2">
                        Created Date
                      </label>
                      <div className="flex items-center gap-3 bg-surface-container px-4 py-2.5 lg:py-3 rounded-lg border border-transparent">
                        <span className="material-symbols-outlined text-stone-400 text-sm">calendar_today</span>
                        <span className="text-sm lg:text-body-md text-on-surface-variant">May 24, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 border-t border-stone-100 mt-auto">
                    <button className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 text-stone-500 font-semibold hover:text-stone-700 transition-colors" type="button">
                      Discard
                    </button>
                    <button className="w-full sm:w-auto order-1 sm:order-2 bg-secondary-container text-on-secondary-container px-8 lg:px-10 py-3 rounded-lg font-bold shadow-lg shadow-secondary-container/20 hover:opacity-90 transition-all flex items-center justify-center gap-2" type="submit">
                      Update Food Item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
