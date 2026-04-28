import { useEffect } from 'react';

export default function DetailsMenuDish() {
  useEffect(() => {
    document.title = 'Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-bold text-emerald-950 tracking-tighter">Digital Bistro</div>
      <nav className="hidden md:flex items-center space-x-8 font-epilogue antialiased text-sm uppercase tracking-widest">
      <a className="text-stone-500 font-medium hover:text-emerald-700 transition-colors duration-300" href="#">Our Menu</a>
      <a className="text-stone-500 font-medium hover:text-emerald-700 transition-colors duration-300" href="#">Provenance</a>
      <a className="text-stone-500 font-medium hover:text-emerald-700 transition-colors duration-300" href="#">Reservations</a>
      <a className="text-stone-500 font-medium hover:text-emerald-700 transition-colors duration-300" href="#">Locations</a>
      </nav>
      <div className="flex items-center space-x-6 text-emerald-900">
      <button className="scale-95 active:scale-90 transition-transform flex items-center">
      <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
      </button>
      <button className="scale-95 active:scale-90 transition-transform flex items-center">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      </button>
      </div>
      </div>
      </header>
      <main className="pt-20 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 mb-8 text-stone-500 font-label-sm text-label-sm">
      <a className="hover:text-primary transition-colors" href="#">Menu</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <a className="hover:text-primary transition-colors" href="#">Burgers</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-primary font-bold">Classic Wagyu Burger</span>
      </nav>
      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
      {/* Image Side */}
      <div className="lg:col-span-7 space-y-6">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shadow-[0_10px_30px_rgba(27,48,34,0.05)]">
      <img alt="Classic Wagyu Burger" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="Gourmet wagyu beef burger with melted cheddar, truffle aioli, and brioche bun on a dark ceramic plate with dramatic moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAtc-CGXzTekmd23i2taEo8oGybUx6PBzHC3Zs9XAW1B2RLmTVmhsMRaZHMGJL1764r0dN-FcSefdZsAcBMVJ6eQVVE6IEOEQnD2kV4L28EAsIlt7TVbjXXmKEcWzxq_ZkCKdiHP9cm3WnOux6aOIAP85JmJkKrDLuYSrnMkIkb1YVhMn33WknKZ1ndj1FTu0S6ANugm4WCGFsw0wl93lgw8nDXmkHkcQEPH2jFeJoNf9QxGXFxdkMLt6PEBFnky110aBolnWMCLs"/>
      </div>
      <div className="grid grid-cols-4 gap-4">
      <div className="aspect-square rounded-xl overflow-hidden bg-surface-container cursor-pointer border-2 border-primary">
      <img className="w-full h-full object-cover" data-alt="Close up of wagyu burger texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPt7bwrFskmIcbjlrjvuQLOzPPOAWaYIlFZq6KyhxITIBZ1_6UlmngwcFO3y-WzYD5dtcZD2HcgpYMwjl9nswQMosZvbna4SUcj5dTUKfFKtzDtCw1QfjHA8jhy5490HtgqauaLCEmEjSYNgeACRlQEiIbvQhebguozpqKnIlzWVNZZ25Tq-vqIJt5Mkpn4JQid-7KuuCZwnRqrHDY286uvo0aSgO5gh68sPBjVQA-VB1ZWxULgTcMZprj33sYO_oPZVBoZWwaWB0"/>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden bg-surface-container cursor-pointer border-2 border-transparent hover:border-outline-variant transition-colors">
      <img className="w-full h-full object-cover" data-alt="Side view of gourmet burger ingredients" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkCi7z1yquOa3T4PzLfy3oKikLFQTi8FpFMuap0aNsC6qUx-ofbDlPIn37IxCw5TnUPmirbpzoTJGN4thbwYbkFZiKFV7Pmto-dKBhvKUVcxGSwD37LNc-ATGe1ywoKfXY-urfKgTO9epLaPJryisqFtDDRVGhdp3Y9dBCsVumO4n4R_Gy7PAIsZl9uKbQX2qjMMmJrl-OmClAg82ZLinPLJqH0T7ZU2vefcWr7ElavNCaMKYdgrzP4Hi2VJSsaceYLuDEp9hrYb8"/>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden bg-surface-container cursor-pointer border-2 border-transparent hover:border-outline-variant transition-colors">
      <img className="w-full h-full object-cover" data-alt="Chef preparing wagyu burger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2TwoQ35AbH78W24OnZrfHpuWxjJpIVtSYASPxpMDSl0IUHsjAApOYotUDd-1AyOCjHHF7i3Hq43HKWZwgYdU0r1aHpVJSPTcYMuRsP33awm0ZHeTKV_wSUXUz1PXoNazCaZPiRp11CRA0AgGN9T6GvrtvKQdZ8AVb0CqhkEWbMuWykJwHBsnNapBiyeTo0YBeRzs6M6tVUrRCN4npm3eGycd-JJArVm0Suqlq-23ZtCm6vmuMysqz9PMVdfr9GwjkhXiu_rFt6dc"/>
      </div>
      <div className="aspect-square rounded-xl overflow-hidden bg-surface-container cursor-pointer border-2 border-transparent hover:border-outline-variant transition-colors flex items-center justify-center">
      <span className="material-symbols-outlined text-stone-400">videocam</span>
      </div>
      </div>
      </div>
      {/* Details Side */}
      <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
      <div>
      <div className="flex gap-2 mb-4">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">Premium Selection</span>
      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">Chef's Choice</span>
      </div>
      <h1 className="font-display-xl text-display-xl text-primary mb-2">Classic Wagyu Burger</h1>
      <p className="font-price-label text-price-label text-secondary">$28</p>
      </div>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                              Aged Japanese Wagyu, truffle aioli, heirloom tomatoes, and melted aged cheddar on a toasted brioche bun. Served with house-made triple-cooked fries.
                          </p>
      {/* Add-ons Section */}
      <div className="space-y-4">
      <h3 className="font-headline-md text-headline-md text-primary">Add-ons</h3>
      <div className="space-y-3">
      <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary cursor-pointer transition-all bg-surface-container-low group">
      <div className="flex items-center gap-3">
      <input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
      <span className="font-body-md text-on-surface">Extra Bacon</span>
      </div>
      <span className="font-label-sm text-secondary">+$4.00</span>
      </label>
      <label className="flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-primary cursor-pointer transition-all bg-surface-container-low group">
      <div className="flex items-center gap-3">
      <input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
      <span className="font-body-md text-on-surface">Caramelized Onions</span>
      </div>
      <span className="font-label-sm text-secondary">+$2.00</span>
      </label>
      </div>
      </div>
      {/* Special Instructions */}
      <div className="space-y-4">
      <h3 className="font-headline-md text-headline-md text-primary">Special Instructions</h3>
      <textarea className="w-full h-24 p-4 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md resize-none" placeholder="Allergies, preferences, or specific requests..."></textarea>
      </div>
      {/* Order Actions */}
      <div className="pt-6 flex flex-col gap-4">
      <div className="flex items-center gap-6">
      <div className="flex items-center bg-surface-container-high rounded-full p-1 h-14">
      <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-primary active:scale-90">
      <span className="material-symbols-outlined">remove</span>
      </button>
      <span className="w-12 text-center font-price-label text-price-label text-secondary">1</span>
      <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-primary active:scale-90">
      <span className="material-symbols-outlined">add</span>
      </button>
      </div>
      <button className="flex-1 h-14 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all">
                                      Add to Order
                                  </button>
      </div>
      <button className="flex items-center justify-center gap-2 text-stone-500 font-label-sm uppercase tracking-widest hover:text-primary transition-colors py-2">
      <span className="material-symbols-outlined text-[20px]" data-weight="fill">favorite</span>
                                  Add to Favorites
                              </button>
      </div>
      </div>
      </div>
      {/* Provenance / Details Tab Section */}
      <section className="mt-20 border-t border-stone-200 pt-16">
      <div className="flex gap-12 mb-12 border-b border-stone-100">
      <button className="pb-4 font-headline-md text-headline-md text-primary border-b-2 border-primary">Ingredients</button>
      <button className="pb-4 font-headline-md text-headline-md text-stone-400 hover:text-primary transition-colors">Provenance</button>
      <button className="pb-4 font-headline-md text-headline-md text-stone-400 hover:text-primary transition-colors">Reviews (128)</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">We source our Wagyu beef from the Kagoshima prefecture in Japan, known for its intense marbling and buttery texture. Every burger is ground daily to ensure the peak of freshness.</p>
      <ul className="space-y-4">
      <li className="flex items-center gap-4">
      <span className="w-2 h-2 bg-secondary rounded-sm"></span>
      <span className="font-body-md text-on-surface">A5 Grade Wagyu Beef</span>
      </li>
      <li className="flex items-center gap-4">
      <span className="w-2 h-2 bg-secondary rounded-sm"></span>
      <span className="font-body-md text-on-surface">Organic Heirloom Tomatoes</span>
      </li>
      <li className="flex items-center gap-4">
      <span className="w-2 h-2 bg-secondary rounded-sm"></span>
      <span className="font-body-md text-on-surface">Black Summer Truffle Aioli</span>
      </li>
      </ul>
      </div>
      <div className="bg-surface-container-low p-8 rounded-2xl">
      <h4 className="font-headline-md text-headline-md text-primary mb-4">Nutrition Information</h4>
      <div className="grid grid-cols-2 gap-y-4">
      <div>
      <p className="text-stone-500 font-label-sm uppercase">Calories</p>
      <p className="font-headline-md text-headline-md text-primary">840 kcal</p>
      </div>
      <div>
      <p className="text-stone-500 font-label-sm uppercase">Protein</p>
      <p className="font-headline-md text-headline-md text-primary">42g</p>
      </div>
      <div>
      <p className="text-stone-500 font-label-sm uppercase">Carbs</p>
      <p className="font-headline-md text-headline-md text-primary">54g</p>
      </div>
      <div>
      <p className="text-stone-500 font-label-sm uppercase">Fat</p>
      <p className="font-headline-md text-headline-md text-primary">48g</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-16 bg-stone-100 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
      <div>
      <div className="text-xl font-bold text-emerald-900 mb-4">Digital Bistro</div>
      <p className="font-epilogue text-sm font-light text-stone-600 mb-6 leading-relaxed">
                          © 2024 Digital Bistro. Sustainably sourced, thoughtfully prepared. Experience the intersection of technology and taste.
                      </p>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Quick Links</h5>
      <ul className="space-y-2">
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Sourcing Policy</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Gift Cards</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Careers</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Support</h5>
      <ul className="space-y-2">
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Privacy</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Accessibility</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Contact Us</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Social</h5>
      <div className="flex space-x-4">
      <a className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">share</span>
      </a>
      <a className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">public</span>
      </a>
      </div>
      </div>
      </div>
      </footer>
      {/* BottomNavBar (Mobile only) */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-2xl md:hidden bg-stone-50/95 backdrop-blur-lg border-t border-stone-200 shadow-[0_-10px_30px_rgba(27,48,34,0.05)]">
      <div className="flex justify-around items-center h-16 px-4">
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="home">home</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-emerald-900 bg-stone-200/50 rounded-xl px-4 py-1 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Menu</span>
      </button>
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Orders</span>
      </button>
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Profile</span>
      </button>
      </div>
      </nav>
    </div>
  );
}
