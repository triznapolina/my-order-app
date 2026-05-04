import { useState, useEffect } from 'react';

const ClientCatalogManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('Recommended');
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    document.title = 'Menu Catalog | Bistro Provence';
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const menuItems = [
    {
      id: 1,
      title: 'Wagyu Heritage Burger',
      description: 'Aged wagyu beef, balsamic onions, forest mushrooms, and cave-aged gruyère on sourdough.',
      price: '$32.00',
      badge: "Chef's Pick",
      badgeColor: 'bg-primary-fixed',
      badgeTextColor: 'text-on-primary-fixed-variant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwGuJN2S4LAQzXWelldYiwT2rpy1DHfH0wJJaA_rJsLr2CupOrCVMxR1xqk5-yinVPv7AUCV9odVojNdpIpS5SBqTrkKS9UyUmR0G06lVAbEpYY8hO_HVc5ig9jKMUJG5-PgriVCKNKlsRAaS73Wbpa3E0dyrFj8npXhAEqF__l7lJJ2RG5foYWabDaYItrw7NQqNhZUPcf9LiWom3sfsmZ7PV9vFCV1mVzkPtlEe1BXD8UsZmqkE7KdK6aDabEmH88IXVnoucDXA'
    },
    {
      id: 2,
      title: 'Black Truffle Hearth',
      description: 'Hand-stretched dough, Perigord truffles, fior di latte, and cold-pressed extra virgin olive oil.',
      price: '$44.00',
      badge: 'Vegan Opt',
      badgeColor: 'bg-surface-container-high',
      badgeTextColor: 'text-on-surface-variant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrj5AR3lc4o7nfURJ2AozpmdWvWcX7vzy3yIYXwRCJPtA1r7HWomGj3xpzaHzbnk9yaA9qpA5Jw-hxOraW-FrFYFczonY8MvOEQnHmlbtm2KFwVFkdSSCmpsBNcGbOYb0Nf3v2FgoVzmz_N5kQjy_U4IqptNDTPoxchv_LS3HGs7JfeR6iYSdxbGakXF_gCr1vRc1UWKcmjlTjU9hlUJPDIGXmSckUjK3koo4Kl90mAn4z0FgsXdzY6Rmp3MvC8YT3M0kUrEz0mw0'
    },
    {
      id: 3,
      title: 'Omakase Signature',
      description: 'Daily catch featuring Bluefin O-Toro, Hokkaido Scallops, and Wild Kinmedai.',
      price: '$85.00',
      badge: 'Popular',
      badgeColor: 'bg-secondary-fixed',
      badgeTextColor: 'text-on-secondary-container',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBngqBDIzfmc3ow_JJ5k4XXzSYWnOBevY2Urh0Cjit_P0xxy2d9GvjqrcrYxxb_gBdV55CQiJQmik0lA9OWmRQ7TayYnlhoY_osNFlrCCzLqFsMOtqNsT026lPmtHqqMow7S6zF4vg5haqBVT-qCSCQ4aW1MfBiatPtguUy6022nWbn_ISfWsKclv0RZ0mRlrFQnOfUwMuK4siQQ9xaaERKLcOwOjRz-Px668Y9oQub90MRAjbKQzoJ1ERGl3aSR7BHBCGd18sjmeA'
    },
    {
      id: 4,
      title: 'Provenance Bowl',
      description: 'Roasted organic roots, quinoa, avocado, and house-made walnut dukkah.',
      price: '$24.00',
      badge: 'Fresh',
      badgeColor: 'bg-primary-fixed',
      badgeTextColor: 'text-on-primary-fixed-variant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Z_jAvL3u97tpOC56CRVl4VwszRcrROOTrG3hqOudeRlrrLLYXXBv1vnCFo4zhncohWTwoSBByQAigZO6JHQcxK4INdAN-B2P8wS2Tfp8pEPAGLA6h3s-As0-L7kOm43pLezgFFzD-F7ISYtcPi7h5hPvlKplVRjylbFqGh1aLyl4KNHAz7eoeT0UByVnRrUPMP4xieFXiDFwIwrmTkacpz5YZ5hYMJNaiVIWyEeLgepOJS0mQoMKLJTrnQYtLfn02HX7oDxKb-I'
    },
    {
      id: 5,
      title: 'Coastal Scallops',
      description: 'Diver scallops, cauliflower cream, pancetta crisps, and brown butter emulsion.',
      price: '$38.00',
      badge: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuoWz-27DEyInmFEx8OdhFox1qf67NkvFdESRf5Ft_QtjBNuebt448oOIxyQK3XgrVEFeMTBPcSXEzOprua5TYksQQrdee7lwwUxvwDyJJeNqa6sT9yTXfSf1cReiu1PqILxuyy2wi86FVL6WdnJ-nVFIKgbt6KnNXb-2hYgZ1Nt5xjAcuXWi5lhyz1JxlPyTvFS6keJGPV0lsM-6FxFeJTIE4A9ofEpGCC5m-p5HM_EzvGYUzwKXvc1bANb8u8DLIZK-xIWAZebE'
    },
    {
      id: 6,
      title: 'Red Wine Short Rib',
      description: '12-hour braised beef, buttery polenta, and heirloom carrots in a rich jus.',
      price: '$52.00',
      badge: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDepSPA5NMJ2zK6oOEo7ohM6PAcM8-QyDs__6UTjnbK9OySMov_tWLG6E9a_Bfz0CDL1Yu-TCVIXoEB_LKrbpMnnFcC24lc3E_YmhwhHwu4-eukStRkszTamYZomhe057ftJJyL5yQtnYngDvzCYzpd63esf2gccz_ZxgDD-IGVb_MEqmRh6P3BJG1b5k0L737nmRAqHI9YQ3DsAMC3XqkpigXxcyjBoHmdIkr9eYX3mVJLXCHpgPyDDi9RW92r3SuzqosoBed3r_w'
    }
  ];

  const categories = [
    { icon: 'tapas', label: 'Appetizers' },
    { icon: 'outdoor_grill', label: 'Main Course' },
    { icon: 'bakery_dining', label: 'Sides' },
    { icon: 'icecream', label: 'Desserts' },
    { icon: 'wine_bar', label: 'Wine List' }
  ];

  return (
    <div className="light bg-surface text-on-background selection:bg-primary-fixed-dim">
      {/* Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      />

      {/* Navigation Drawer (Main Menu) */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#FDFCF8] shadow-2xl z-[70] flex flex-col p-6 overflow-y-auto transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold text-primary">Bistro Provence</div>
          <button
            className="p-2 hover:bg-surface-container rounded-full transition-colors"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-headline-md font-headline-md text-primary mb-1">Main Menu</h2>
          <p className="text-label-sm text-on-surface-variant">Explore our curated selections</p>
        </div>

        <div className="space-y-6">
          {/* Navigation Tabs */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 bg-[#1B3022] text-white rounded-lg font-semibold transition-all duration-300 text-left hover:shadow-md">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span>Our Menu</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">event_available</span>
              <span>Reservations</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">history_edu</span>
              <span>Our Story</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span>Seasonal Specials</span>
            </button>
          </div>

          {/* Food Categories Section */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.label}
                  className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left"
                >
                  <span className="material-symbols-outlined">{category.icon}</span>
                  <span className="text-sm">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
              Account
            </h3>
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container">person</span>
              </div>
              <div>
                <p className="text-label-sm font-bold">James Wilson</p>
                <p className="text-xs text-on-surface-variant">Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="bg-[#FDFCF8] text-[#1B3022] font-epilogue tracking-tight border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors lg:hidden"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <div className="text-xl md:text-2xl font-bold text-[#1B3022]">Bistro Provence</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[#1B3022] border-b-2 border-[#D4A373] pb-1 hover:text-[#1B3022] transition-colors"
          >
            Menu
          </a>
          <a href="#" className="text-stone-500 font-medium hover:text-[#1B3022] transition-colors">
            Reservations
          </a>
          <a href="#" className="text-stone-500 font-medium hover:text-[#1B3022] transition-colors">
            Our Story
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md ml-2 w-48"
              placeholder="Search menu..."
              type="text"
            />
          </div>
          <div className="flex gap-2 md:gap-4">
            <button className="p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button className="p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto flex min-h-screen">
        {/* SideNavBar / Refine Menu (Desktop) */}
        <aside className="bg-[#FDFCF8] text-[#1B3022] font-epilogue text-sm border-r border-stone-100 fixed left-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto p-6 hidden lg:flex flex-col w-64 z-30">
          <div className="mb-8">
            <h2 className="text-headline-md font-headline-md text-primary mb-1">Refine Menu</h2>
            <p className="text-label-sm text-on-surface-variant">Curate your dining experience</p>
          </div>

          <div className="space-y-6">
            {/* Shared Navigation Tabs */}
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 bg-[#1B3022] text-white rounded-lg font-semibold transition-all duration-300 text-left hover:shadow-md">
                <span className="material-symbols-outlined">payments</span>
                <span>Sort by Price</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
                <span className="material-symbols-outlined">eco</span>
                <span>Dietary Needs</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
                <span className="material-symbols-outlined">auto_awesome</span>
                <span>Chef's Specials</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
                <span className="material-symbols-outlined">fiber_new</span>
                <span>New Arrivals</span>
              </button>
            </div>

            {/* Price Range Filter */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Price Range
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary text-body-md"
                    placeholder="Min"
                    type="number"
                  />
                  <span className="text-stone-400">—</span>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary text-body-md"
                    placeholder="Max"
                    type="number"
                  />
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Sort Order Filter */}
            <div className="pt-6">
              <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Sort Order
              </h3>
              <select className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-body-md focus:ring-primary focus:border-primary">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>

            {/* Food Categories Section */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Food Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <button
                    key={category.label}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg font-${
                      index === 0 ? 'bold' : 'normal'
                    } transition-all duration-300 text-left ${
                      index === 0
                        ? 'text-[#D4A373] bg-surface-container'
                        : 'text-stone-600 hover:bg-stone-50 hover:pl-2'
                    }`}
                  >
                    <span className="material-symbols-outlined">{category.icon}</span>
                    <span className="text-sm">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8 pb-32">
          <div className="mb-8">
            <h1 className="font-display-xl text-3xl md:text-4xl text-primary mb-4">Earthy Gastronomy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated collection of our finest dishes, sourced from local artisans and prepared with
              seasonal precision.
            </p>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <article
                key={item.id}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(27,48,34,0.05)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">{item.title}</h3>
                    {item.badge && (
                      <span
                        className={`${item.badgeColor} ${item.badgeTextColor} text-label-sm px-2 py-1 rounded`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-price-label text-price-label text-primary">{item.price}</span>
                    <button className="bg-[#D4A373] text-white px-6 py-2 rounded-lg font-bold hover:brightness-105 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Bar */}
          <div className="mt-12 py-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 text-on-surface-variant">
            <div className="flex items-center gap-4">
              <span className="text-label-sm uppercase tracking-widest font-bold">Items per page</span>
              <select className="bg-surface border border-outline-variant rounded-lg px-3 py-1 text-label-sm">
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="text-label-sm">Showing 1-6 of 48 dishes</div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-6 mt-20 py-12 bg-[#FDFCF8] border-t border-stone-100">
        <div className="font-bold text-[#1B3022] text-xl font-epilogue">Bistro Provence</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Sourcing
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Private Dining
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Sustainability
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Careers
          </a>
        </div>
        <div className="font-epilogue text-xs text-stone-500 px-4 text-center">
          © 2024 Bistro Provence. Crafted for the discerning palate.
        </div>
      </footer>

      {/* Material Symbols Stylesheet */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800&family=Be+Vietnam+Pro:wght@400;600;700&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
};

export default ClientCatalogManagement;
