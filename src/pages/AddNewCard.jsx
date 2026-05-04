import { useEffect } from 'react';

export default function AddNewCard() {
  useEffect(() => {
    document.title = 'Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* Background Content (Dimmed Profile Page) */}
      <div className="fixed inset-0 z-0 flex flex-col blur-sm brightness-50 pointer-events-none overflow-hidden">
      <header className="bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm z-50 docked full-width top-0">
      <div className="flex justify-between items-center h-16 px-6 w-full max-w-7xl mx-auto">
      <span className="text-xl font-bold text-emerald-900 tracking-tighter uppercase font-epilogue">Earthy Gastronomy</span>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="text-stone-500 font-epilogue" href="#">Menu</a>
      <a className="text-stone-500 font-epilogue" href="#">Reservations</a>
      <a className="text-stone-500 font-epilogue" href="#">About</a>
      </nav>
      <div className="flex items-center space-x-4">
      <span className="material-symbols-outlined text-emerald-900">shopping_bag</span>
      <span className="material-symbols-outlined text-emerald-900" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
      </div>
      </div>
      </header>
      <main className="max-w-7xl mx-auto w-full px-margin-desktop py-xl flex-1 overflow-auto">
      <div className="flex flex-col gap-lg">
      <div className="flex items-end gap-md">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container">
      <img alt="Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a man with a friendly expression in a sunlit outdoor garden setting with soft green foliage background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2y3atj0ccGFl2l75mFc0KaPx7grVT8O4VCIHzdmBSENVEqtzoAu0mJb22V9PDhPjWiO6igg1rcMNXr5IxO5Cm0I88yq_wqQdBOxZ8DzQrlT4Gft5RiyQP9TQh8qj_CgWzD4PnIB8Nq7ky3FRq2f4hQ5VkUrUiy0oCgOvlx2F4u5177zcl5kd0gc2lOEqkHACgDzvD4FkhGTWeb_SjQqClcYM8dOlHB4BreJkaXq8g5YM_4LDOM-CQy3x3dTf58VrPJ7kNDccRs8"/>
      </div>
      <div>
      <h1 className="font-headline-lg text-headline-lg text-primary">Julian Thorne</h1>
      <p className="font-body-md text-on-surface-variant">Connoisseur since 2022</p>
      </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter">
      <div className="col-span-8 flex flex-col gap-lg">
      <section className="bg-surface-container-low rounded-xl p-lg">
      <h2 className="font-headline-md text-headline-md text-primary mb-md">Payment Methods</h2>
      <div className="flex flex-col gap-md">
      <div className="bg-white p-md rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-secondary">credit_card</span>
      <span className="font-body-md">Visa ending in 4242</span>
      </div>
      <span className="text-on-surface-variant font-label-sm">DEFAULT</span>
      </div>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-[2px] flex items-center justify-center p-md">
      {/* Modal Card */}
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-[0px_20px_50px_rgba(27,48,34,0.15)] overflow-hidden border border-surface-container-high">
      {/* Modal Header */}
      <div className="px-lg py-md border-b border-surface-container flex items-center justify-between">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-secondary">add_card</span>
      <h2 className="font-headline-md text-headline-md text-primary">Add New Card</h2>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors p-xs">
      <span className="material-symbols-outlined">close</span>
      </button>
      </div>
      {/* Form Content */}
      <form className="p-lg flex flex-col gap-lg">
      {/* Card Illustration / Preview Area */}
      <div className="w-full h-48 rounded-xl relative overflow-hidden bg-gradient-to-br from-primary-container to-primary p-lg text-white flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-start">
      <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Earthy Gastronomy Member</span>
      <span className="material-symbols-outlined mt-xs text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
      </div>
      <span className="material-symbols-outlined text-4xl opacity-80">contactless</span>
      </div>
      <div className="flex flex-col gap-xs">
      <div className="font-mono text-xl tracking-[0.2em]">•••• •••• •••• ••••</div>
      <div className="flex justify-between items-end">
      <div className="flex flex-col">
      <span className="text-[8px] uppercase tracking-tighter opacity-50">Cardholder Name</span>
      <span className="text-sm font-medium tracking-wide">YOUR NAME HERE</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="text-[8px] uppercase tracking-tighter opacity-50">Expiry</span>
      <span className="text-sm font-medium">MM/YY</span>
      </div>
      </div>
      </div>
      {/* Decorative Element */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="flex flex-col gap-md">
      {/* Cardholder Name */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-xs">Cardholder Name</label>
      <div className="relative">
      <input className="w-full bg-surface-container-low border-none rounded-lg px-md py-3 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant font-body-md" placeholder="e.g. Julian Thorne" type="text"/>
      </div>
      </div>
      {/* Card Number */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-xs">Card Number</label>
      <div className="relative">
      <input className="w-full bg-surface-container-low border-none rounded-lg px-md py-3 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant font-body-md" placeholder="0000 0000 0000 0000" type="text"/>
      <div className="absolute right-md top-1/2 -translate-y-1/2 flex gap-xs">
      <span className="material-symbols-outlined text-outline-variant">credit_card</span>
      </div>
      </div>
      </div>
      {/* Expiry and CVV */}
      <div className="grid grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-xs">Expiry Date</label>
      <input className="w-full bg-surface-container-low border-none rounded-lg px-md py-3 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant font-body-md text-center" placeholder="MM/YY" type="text"/>
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase ml-xs">CVV</label>
      <div className="relative">
      <input className="w-full bg-surface-container-low border-none rounded-lg px-md py-3 focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant font-body-md text-center" placeholder="•••" type="password"/>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline-variant text-sm">help</span>
      </div>
      </div>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="flex gap-md pt-md">
      <button className="flex-1 py-3 px-lg border border-outline-variant text-primary font-label-sm rounded-lg hover:bg-surface-container transition-colors active:scale-95" type="button">
                              Cancel
                          </button>
      <button className="flex-1 py-3 px-lg bg-secondary text-white font-label-sm rounded-lg hover:brightness-110 shadow-lg shadow-secondary/20 transition-all active:scale-95" type="submit">
                              Save Card
                          </button>
      </div>
      <div className="flex items-center justify-center gap-xs text-[10px] text-outline-variant uppercase tracking-widest font-bold mt-xs">
      <span className="material-symbols-outlined text-xs">lock</span>
                          Secure Encrypted Payment
                      </div>
      </form>
      </div>
      </div>
    </div>
  );
}
