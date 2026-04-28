import { useEffect } from 'react';

export default function CreatedOrderDetails() {
  useEffect(() => {
    document.title = 'Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="bg-[#FDFCF0] dark:bg-stone-950 border-b border-stone-200/50 dark:border-stone-800 shadow-[0_2px_15px_-3px_rgba(27,48,34,0.05)] docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 md:px-12 h-24 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-black text-emerald-900 dark:text-emerald-400 tracking-widest font-['Epilogue']">LUXE BISTRO</div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Menu</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Reservations</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Our Story</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Gift Cards</a>
      </nav>
      <div className="flex items-center space-x-6">
      <button className="text-emerald-900 dark:text-emerald-400 hover:text-emerald-700 transition-colors">
      <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
      </button>
      <button className="text-emerald-900 dark:text-emerald-400 hover:text-emerald-700 transition-colors">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      </button>
      </div>
      </div>
      </header>
      <main className="max-w-screen-2xl mx-auto px-8 md:px-12 py-xl">
      <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Left Column: Checkout Details */}
      <div className="flex-1 space-y-xl">
      {/* Section: Shopping Basket */}
      <section>
      <div className="flex items-center justify-between mb-lg">
      <h1 className="font-headline-lg text-headline-lg text-primary">Shopping Basket</h1>
      <span className="font-label-sm text-label-sm bg-surface-container px-4 py-2 rounded-full text-on-surface-variant">2 ITEMS</span>
      </div>
      <div className="space-y-md">
      {/* Basket Item 1 */}
      <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-lg shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100">
      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
      <img alt="Classic Wagyu Burger" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="gourmet wagyu beef burger with melted cheese and fresh greens on a toasted brioche bun, studio food photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAU2qZElNCt4aLUQFl4eT1pk-dOi7j4ZPpIdLbfL5QF4upp1i5qXlf0nG5LpYEX8z1xIGfB21hTJXx2cWAzlhmwEFcsTALORW39Ubolu4YCzkoHokNyv6qVZ-RlBmP0_v7_ZAE6LyonpM3HeCr_WBlDeX6iRIhlKdF-73laojHupGQL4-dKD7A2139LKC_UojmkmmGCdB9gu7slUwPboI2zEMyecGG3G9zicOPSJnpmUIs4dqlSY9yb0XeQWfm_P551F11AOJmAvw"/>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-headline-md text-headline-md text-primary">Classic Wagyu Burger</h3>
      <p className="font-body-md text-on-surface-variant mt-1">Caramelized onions, truffle aioli, aged cheddar</p>
      </div>
      <span className="font-price-label text-price-label text-primary">$34.00</span>
      </div>
      <div className="flex items-center justify-between mt-lg">
      <div className="flex items-center bg-surface-container rounded-lg p-1">
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors">
      <span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'wght' 600;">remove</span>
      </button>
      <span className="font-price-label text-price-label px-4 text-on-surface">1</span>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors">
      <span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'wght' 600;">add</span>
      </button>
      </div>
      <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 font-label-sm">
      <span className="material-symbols-outlined text-sm">delete</span> REMOVE
                                          </button>
      </div>
      </div>
      </div>
      {/* Basket Item 2 */}
      <div className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-lg shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100">
      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
      <img alt="Truffle Bianca Pizza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="artisanal white pizza with truffle shavings, fresh mozzarella, and aromatic herbs, dramatic side lighting on stone background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIqx3-T_aDbnnR4ZA0dxCAP9XJ0Mp0A128TrsQHbGL5bDGVHW8_5EikkuyOkSLSzaTS-XzjcZWeI_1bfeiR19nftU5ptOn3FzN1F-ARQ0oYdTFwIwLrkbnriXwTOI9D64-ubIzQdH3XVABS1R-1VYq5TtrKN0AWb8-kgLjOfzSilz1K-64_uXWwB2WGsBbzhXvpml8A_npXcdTyNWCsrx1StGhz8GRmpwnkHKAutWqw4S5Bd3gtxzjh-yI2YWBQ8IRH78-jttLHIY"/>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-start">
      <div>
      <h3 className="font-headline-md text-headline-md text-primary">Truffle Bianca Pizza</h3>
      <p className="font-body-md text-on-surface-variant mt-1">Buffalo mozzarella, white truffle oil, rosemary</p>
      </div>
      <span className="font-price-label text-price-label text-primary">$28.00</span>
      </div>
      <div className="flex items-center justify-between mt-lg">
      <div className="flex items-center bg-surface-container rounded-lg p-1">
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors">
      <span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'wght' 600;">remove</span>
      </button>
      <span className="font-price-label text-price-label px-4 text-on-surface">1</span>
      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors">
      <span className="material-symbols-outlined text-secondary" style="font-variation-settings: 'wght' 600;">add</span>
      </button>
      </div>
      <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 font-label-sm">
      <span className="material-symbols-outlined text-sm">delete</span> REMOVE
                                          </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Delivery Address */}
      <section className="space-y-lg">
      <div className="flex items-center justify-between">
      <h2 className="font-headline-lg text-headline-lg text-primary">Delivery Address</h2>
      <button className="text-secondary font-label-sm flex items-center gap-2 hover:underline underline-offset-4">
      <span className="material-symbols-outlined text-sm">add_location</span> ADD NEW
                              </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Primary Address Card */}
      <div className="bg-surface-container border-2 border-primary-container p-lg rounded-xl flex items-start gap-md relative">
      <span className="material-symbols-outlined text-primary" data-weight="fill">home</span>
      <div>
      <h4 className="font-headline-md text-body-lg font-bold text-primary">Primary Residence</h4>
      <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">1280 Highland Avenue, Ste 402<br/>Los Angeles, CA 90038</p>
      </div>
      <span className="absolute top-4 right-4 material-symbols-outlined text-primary" data-weight="fill">check_circle</span>
      </div>
      {/* Secondary Address Card */}
      <div className="bg-surface-container-lowest border border-stone-200 p-lg rounded-xl flex items-start gap-md hover:border-primary-container transition-colors cursor-pointer">
      <span className="material-symbols-outlined text-on-surface-variant">work</span>
      <div>
      <h4 className="font-headline-md text-body-lg font-bold text-primary">Office</h4>
      <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">450 N Canon Dr<br/>Beverly Hills, CA 90210</p>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Payment Method */}
      <section className="space-y-lg">
      <div className="flex items-center justify-between">
      <h2 className="font-headline-lg text-headline-lg text-primary">Payment Method</h2>
      <button className="text-secondary font-label-sm flex items-center gap-2 hover:underline underline-offset-4">
      <span className="material-symbols-outlined text-sm">credit_card</span> ADD CARD
                              </button>
      </div>
      <div className="space-y-md">
      {/* Saved Card 1 */}
      <div className="bg-surface-container border-2 border-primary-container p-lg rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-lg">
      <div className="bg-white p-2 rounded border border-stone-100">
      <span className="material-symbols-outlined text-primary">payments</span>
      </div>
      <div>
      <p className="font-body-lg font-bold text-primary">Visa ending in 4412</p>
      <p className="font-label-sm text-on-surface-variant uppercase mt-1">Expires 08/26</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-primary" data-weight="fill">radio_button_checked</span>
      </div>
      {/* Saved Card 2 */}
      <div className="bg-surface-container-lowest border border-stone-200 p-lg rounded-xl flex items-center justify-between hover:border-primary-container transition-colors cursor-pointer">
      <div className="flex items-center gap-lg">
      <div className="bg-white p-2 rounded border border-stone-100">
      <span className="material-symbols-outlined text-stone-400">payments</span>
      </div>
      <div>
      <p className="font-body-lg font-bold text-primary">Mastercard ending in 9012</p>
      <p className="font-label-sm text-on-surface-variant uppercase mt-1">Expires 12/24</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-stone-300">radio_button_unchecked</span>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Order Summary Sidebar */}
      <aside className="lg:w-[400px]">
      <div className="bg-surface-container p-lg md:p-xl rounded-xl sticky top-32 shadow-[0_10px_30px_rgba(27,48,34,0.05)]">
      <h2 className="font-headline-lg text-headline-lg text-primary border-b border-stone-200/50 pb-lg mb-lg">Order Summary</h2>
      <div className="space-y-md">
      <div className="flex justify-between items-center">
      <span className="font-body-md text-on-surface-variant">Subtotal</span>
      <span className="font-body-md font-bold text-primary">$62.00</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-md text-on-surface-variant">Delivery Fee</span>
      <span className="font-body-md font-bold text-primary">$5.00</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-md text-on-surface-variant">Service Tax (8%)</span>
      <span className="font-body-md font-bold text-primary">$4.96</span>
      </div>
      <div className="pt-lg mt-lg border-t border-stone-200/50">
      <div className="flex justify-between items-center mb-xl">
      <span className="font-headline-md text-headline-md text-primary">Total</span>
      <span className="font-display-xl text-display-xl text-primary">$71.96</span>
      </div>
      <button className="w-full bg-primary text-on-primary py-lg rounded-lg font-headline-md hover:opacity-90 transition-opacity mb-lg shadow-lg">
                                      Place Order
                                  </button>
      <p className="font-label-sm text-on-surface-variant text-center px-lg">
                                      By clicking 'Place Order', you agree to our Terms of Service and Privacy Policy.
                                  </p>
      </div>
      </div>
      {/* Dietary Info Tip */}
      <div className="mt-xl bg-primary-container p-md rounded-lg flex gap-md items-start">
      <span className="material-symbols-outlined text-on-primary-container">info</span>
      <p className="font-label-sm text-on-primary-container">Our ingredients are sourced from organic local farms to ensure the highest quality experience.</p>
      </div>
      </div>
      </aside>
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 full-width mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-12 max-w-screen-2xl mx-auto space-y-6 md:space-y-0">
      <div className="text-xl font-bold text-emerald-900 dark:text-emerald-400 font-['Epilogue']">LUXE BISTRO</div>
      <div className="flex gap-8">
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Privacy</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Terms</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Accessibility</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Sustainability</a>
      </div>
      <div className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
                      © 2024 LUXE BISTRO. CRAFTED FOR THE DISCERNING PALATE.
                  </div>
      </div>
      </footer>
    </div>
  );
}
