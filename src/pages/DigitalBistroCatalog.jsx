import { useEffect, useState } from "react";

export default function DigitalBistroCatalog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          id="mobile-overlay"
          onClick={closeSidebar}
        />
      )}

      {/* NavigationDrawer (Shared Component) */}
      <aside
        className={`flex flex-col fixed left-0 top-0 h-screen py-6 px-4 w-64 border-r border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 font-['Epilogue'] antialiased tracking-tight z-50 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out`}
        id="sidebar"
      >
        <div className="mb-10 px-4 flex justify-between items-center">
          <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50">
            Bistro Admin
          </span>
          <button
            className="lg:hidden text-stone-500 hover:text-primary"
            onClick={closeSidebar}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <a
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg transition-transform active:scale-95 cursor-pointer"
            href="/admin-menu"
          >
            <span
              className="material-symbols-outlined active-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              menu_book
            </span>
            <span className="text-body-md">Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-categories"
          >
            <span className="material-symbols-outlined">category</span>
            <span className="text-body-md">Categories</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-branches"
          >
            <span className="material-symbols-outlined">store</span>
            <span className="text-body-md">Branches</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-orders"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="text-body-md">Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 active:scale-95 cursor-pointer"
            href="/admin-users"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-body-md">Users</span>
          </a>
        </nav>
      </aside>

      {/* TopAppBar (Shared Component) */}
     
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
      <main className="lg:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-xl">
          {/* Page Header with Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-label-sm font-bold text-secondary uppercase tracking-widest block mb-xs">
                Management
              </span>
              <h2 className="text-display-xl font-display-xl text-primary mb-2">Catalog</h2>
              <p className="text-body-lg text-on-surface-variant">
                Curate your digital bistro offerings and manage item availability.
              </p>
            </div>
            <div className="flex gap-md w-full md:w-auto">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-lg font-bold shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all w-full md:w-auto">
                <span className="material-symbols-outlined">add</span>
                Add New Item
              </button>
            </div>
          </div>

          {/* Dashboard Stats (New Minimalist Bento Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">Total Dishes</span>
              <div className="text-headline-lg font-bold mt-2">124</div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">Active Menu</span>
              <div className="text-headline-lg font-bold mt-2">86%</div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">Top Category</span>
              <div className="text-headline-lg font-bold mt-2">Starters</div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <span className="text-label-sm text-on-tertiary-fixed-variant">Last Update</span>
              <div className="text-headline-lg font-bold mt-2 text-secondary">2h ago</div>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden border border-surface-container-highest">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest">
                    <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                      Item Name
                    </th>
                    <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                      Category
                    </th>
                    <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-right">
                      Price
                    </th>
                    <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-center">
                      Status
                    </th>
                    <th className="px-lg py-md text-label-sm text-on-surface-variant uppercase tracking-widest font-bold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-highest">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            data-alt="overhead view of a vibrant colorful healthy salad with roasted salmon avocado and citrus fruits on a white plate"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_dXyEtV5JELVzQrMMaeStUdATTFn9ixEjR6A1zAaD9STeRba-1SFcf3UTOHdlvQvl7piC6Evhcg6IMf47ZlK-zMbqHmePzjBtWEkwMQyAX7fgEf7Zpmr3VwBvI7A2kbfXBWiy61dCCxR8xDscbJo7i3S1WItyV9sRxrjOEsS7Wg1S3vPtQEVmW9AGj2_3wWiigad_hB-NtX0gCObDbY-D7sKu0U0R4BYsb4CF9C1kaRvdc3al7qh7XvIM6PTl7eonY3e84HCNK4I"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Citrus Glazed Salmon</div>
                          <div className="text-sm text-on-surface-variant">
                            Farm-raised salmon, citrus reduction
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-lg">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm">
                        Main Course
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right font-bold text-primary">$28.50</td>
                    <td className="px-lg py-lg text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-label-sm font-bold">
                        Available
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/5 rounded-full text-primary" title="Update">
                          <span className="material-symbols-outlined">edit_note</span>
                        </button>
                        <button className="p-2 hover:bg-error/5 rounded-full text-error" title="Delete">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            data-alt="close-up of a creamy flat white coffee with latte art heart in a black ceramic cup"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABhS1xabdECdz1dEJ7cTKv5cBGE0T9iMC4pRQ3K3kBjs9Ef3uXCXuDM9dM5bJ4Ual5MJOp0yV_Xe6zl-eBdIhyfwJYy8m26J2YP4oyOyD_7nXHW1VPFvYkVSWhygHHFk1Ca7WLxkPHU5giaifrg43gQiBB2hR7s-14SpeutviTWj9lWS4unl-7S-BhA2B15uPRlWY4p_pe5arYlof6H87r2L00asAPbWng58IlKm8oiq9obVM29Zcon9zwhgSZy85ju8yheiO5yyU"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Artisan Flat White</div>
                          <div className="text-sm text-on-surface-variant">
                            Ethically sourced beans, silk milk
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-lg">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm">
                        Beverages
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right font-bold text-primary">$5.50</td>
                    <td className="px-lg py-lg text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-label-sm font-bold">
                        Available
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/5 rounded-full text-primary" title="Update">
                          <span className="material-symbols-outlined">edit_note</span>
                        </button>
                        <button className="p-2 hover:bg-error/5 rounded-full text-error" title="Delete">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            data-alt="vibrant vegan poke bowl with fresh tofu seaweed edamame and colorful radish on dark textured surface"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBetC45dJVO4Wwtjl1flOuppBfxnGvogbGazLAodoEO4BQhFLzlcP1WP836BxzFqujjzyhnTWshYnwCv5tXNrID_v-Bs8avWC6fTC7zUwOe2rm3H8gX_3-5ECoCi49pwTZqFStB7dE4Mjq2cSIVl3LEdXjaE9lNUFaHMWSAjVq3eva8tW2nZpmlu_RxHaciRs75bPNOk6LBNbmhOpi4qzIKG_AWHUD-Sqj_ifaJwpsWXUSFsJ9xxHRanShDYl-aBB0HHxgofDVXWY"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Truffle Wild Mushroom</div>
                          <div className="text-sm text-on-surface-variant">
                            Hand-picked porcini, black truffle oil
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-lg">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm">
                        Main Course
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right font-bold text-primary">$24.00</td>
                    <td className="px-lg py-lg text-center">
                      <span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg text-label-sm font-bold">
                        Sold Out
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/5 rounded-full text-primary" title="Update">
                          <span className="material-symbols-outlined">edit_note</span>
                        </button>
                        <button className="p-2 hover:bg-error/5 rounded-full text-error" title="Delete">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            data-alt="gourmet warm chocolate lava cake with molten center dusting of sugar and fresh raspberries on elegant plate"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJKxtkKJxyBCLc_JA1yb4tWgCBInmWj-HSCI0mZ0tAb-efKLuGR0WI5RQC1kZJF2P309UYPY62nnUUcmGuZzUZV27dFgBjEXvG7L1-tu1MC3ShjqF2uOsq-im8ZSlMY-R6byU1Xo-xYdyK8-bWMBsIpxo4ibP8_-6s1vShFbqjuDVcAKFZONtghGBVABYH8j5BcxF2knB9U9JEfGbz4yPfYhKLCuFKjW0I-Ge-D_YA-XB01BRtt3cx_PTOpn22m6tBAqgr77cBIwM"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Velvet Lava Cake</div>
                          <div className="text-sm text-on-surface-variant">
                            70% Dark cocoa, vanilla bean gelato
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-lg py-lg">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm">
                        Desserts
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right font-bold text-primary">$12.00</td>
                    <td className="px-lg py-lg text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-label-sm font-bold">
                        Available
                      </span>
                    </td>
                    <td className="px-lg py-lg text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 lg:group-hover:opacity-100 opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-primary/5 rounded-full text-primary" title="Update">
                          <span className="material-symbols-outlined">edit_note</span>
                        </button>
                        <button className="p-2 hover:bg-error/5 rounded-full text-error" title="Delete">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination (Modern Minimalist Style) */}
            <div className="px-lg py-md border-t border-surface-container-highest flex items-center justify-between bg-surface-container-lowest">
              <div className="text-label-sm text-on-surface-variant hidden sm:block">
                Showing <span className="font-bold">1-4</span> of <span className="font-bold">124</span> items
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
                <button className="p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-bold text-label-sm">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low text-on-surface font-bold text-label-sm">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low text-on-surface font-bold text-label-sm">
                  3
                </button>
                <span className="px-2 text-on-surface-variant">...</span>
                <button className="w-10 h-10 rounded-lg hover:bg-surface-container-low text-on-surface font-bold text-label-sm">
                  31
                </button>
                <button className="p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Meta */}
      <footer className="lg:ml-64 p-lg text-center text-[10px] sm:text-label-sm text-on-surface-variant opacity-50 font-label-sm tracking-widest uppercase">
        © 2024 Bistro Collective Admin Shell • System v2.4.0
      </footer>
    </>
  );
}
