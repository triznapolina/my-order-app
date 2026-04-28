import { useState } from "react";

export default function ClientCatalogManagement() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <div className="font-body-md text-on-background selection:bg-primary-fixed-dim">

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60]"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#FDFCF8] shadow-2xl z-[70] flex flex-col p-6 overflow-y-auto transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold text-primary">
            Bistro Provence
          </div>

          <button
            className="p-2 hover:bg-surface-container rounded-full"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-headline-md font-headline-md text-primary mb-1">
            Main Menu
          </h2>
          <p className="text-label-sm text-on-surface-variant">
            Explore our curated selections
          </p>
        </div>

        <div className="space-y-6">

          {/* Nav */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 bg-[#1B3022] text-white rounded-lg font-semibold text-left">
              <span className="material-symbols-outlined">restaurant_menu</span>
              Our Menu
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 text-left">
              <span className="material-symbols-outlined">event_available</span>
              Reservations
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 text-left">
              <span className="material-symbols-outlined">history_edu</span>
              Our Story
            </button>

            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 text-left">
              <span className="material-symbols-outlined">auto_awesome</span>
              Seasonal Specials
            </button>
          </div>

          {/* Categories */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest mb-4">
              Categories
            </h3>

            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 p-3 text-[#D4A373] bg-surface-container rounded-lg font-bold">
                <span className="material-symbols-outlined">tapas</span>
                Appetizers
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50">
                Main Course
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50">
                Sides
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50">
                Desserts
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50">
                Wine List
              </button>
            </div>
          </div>

          {/* Account */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest mb-4">
              Account
            </h3>

            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="font-bold text-sm">James Wilson</p>
                <p className="text-xs text-stone-500">Member since 2023</p>
              </div>
            </div>
          </div>

        </div>
      </aside>

      {/* HEADER */}
      <header className="bg-[#FDFCF8] border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 lg:hidden"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <div className="text-xl font-bold text-[#1B3022]">
            Bistro Provence
          </div>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Our Story</a>
        </nav>
      </header>

      {/* MAIN (укорочено для читаемости) */}
      <main className="max-w-[1440px] mx-auto flex min-h-screen lg:ml-64 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">

          {/* пример карточки */}
          <article className="bg-white rounded-xl shadow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwGuJN2S4LAQzXWelldYiwT2rpy1DHfH0wJJaA_rJsLr2CupOrCVMxR1xqk5-yinVPv7AUCV9odVojNdpIpS5SBqTrkKS9UyUmR0G06lVAbEpYY8hO_HVc5ig9jKMUJG5-PgriVCKNKlsRAaS73Wbpa3E0dyrFj8npXhAEqF__l7lJJ2RG5foYWabDaYItrw7NQqNhZUPcf9LiWom3sfsmZ7PV9vFCV1mVzkPtlEe1BXD8UsZmqkE7KdK6aDabEmH88IXVnoucDXA"
              className="w-full h-48 object-cover rounded-t-xl"
              alt=""
            />
            <div className="p-4">
              <h3 className="font-bold">Wagyu Heritage Burger</h3>
              <p className="text-sm text-stone-500">
                Aged wagyu beef, balsamic onions...
              </p>
            </div>
          </article>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full flex flex-col items-center gap-6 mt-20 py-12 border-t">
        <div className="font-bold text-xl">Bistro Provence</div>
        <div className="text-xs text-stone-500 text-center">
          © 2024 Bistro Provence
        </div>
      </footer>
    </div>
  );
}