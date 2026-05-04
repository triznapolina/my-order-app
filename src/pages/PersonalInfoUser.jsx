import { useEffect } from 'react';

export default function PersonalInfoUser() {
  useEffect(() => {
    document.title = 'Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* Background Layer (Simulating SCREEN_40) */}
      <div className="fixed inset-0 z-0 overflow-y-auto filter blur-sm grayscale-[0.2]">
      {/* TopAppBar (Simulated Background) */}
      <header className="flex justify-between items-center w-full px-6 py-4 bg-stone-50 border-b border-stone-200">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-emerald-900">arrow_back</span>
      <h1 className="font-headline-md text-emerald-900">Account</h1>
      </div>
      <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-200">
      <img alt="User Profile Photo" data-alt="close-up portrait of a sophisticated man with a friendly expression in a professionally lit indoor environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwSIBSvXCIwIpGC1QUVfII5wpHdNJD08WOIpWHag3Hy2uMAwNONQ5w-gGli8JPA90boXOhXYXM3oYAVMXy2g4xyqVm1i6Zp9PWdKGhHKqxLy_86oeiKD-wrnY2YJSyyxGE4MBzRiGPZSH1UveL60b7tORbuIUNumDvjnBlOUITOdA1XZS6PplQDqMhEF1A8Lasz4MxttmKg27RK10c4FC3X9AoM7ih9lnqQ0GsduPwjb7nNhoi15SZ8UI8mTFPo02-dpCId4mFit0"/>
      </div>
      </header>
      <main className="max-w-xl mx-auto px-margin-mobile pt-lg pb-xl space-y-lg">
      <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm space-y-md">
      <div className="w-24 h-24 bg-stone-100 rounded-full mx-auto overflow-hidden">
      <img alt="Julian Thorne" data-alt="professional portrait of Julian Thorne with soft directional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQigYvH1hFAlMaooa7s1r6guu_JwWNhS9kyUcIp3cI0Amf0EEKQvNMh820qqvMxHDkkT2X95hoJ3ddNgJ3rfH98bUz9WRjrxDrTqlZk8zg1lAqM_3Fp7jmA8vwJPQw6E-kldARaL7FBvXKD63c3ooz8VPS1MxTj_OVEGg5ef5-Z5T4vUs_NMqs9iHrSgTBtaJ5EnRLd_N_xL3SNbrh17-pwWUpbu_LMI9U11pFUOXYOw9FeMagQK2ex-35QdO3lnWdVZenkcz0h4"/>
      </div>
      <div className="text-center">
      <h2 className="font-headline-lg text-primary">Julian Thorne</h2>
      <p className="font-body-md text-on-surface-variant">j.thorne@premium-life.com</p>
      </div>
      </div>
      <div className="space-y-sm">
      <div className="flex items-center gap-4 p-md bg-white rounded-lg border border-stone-100">
      <span className="material-symbols-outlined text-secondary">receipt_long</span>
      <span className="font-body-md flex-1">Order History</span>
      <span className="material-symbols-outlined text-stone-400">chevron_right</span>
      </div>
      <div className="flex items-center gap-4 p-md bg-white rounded-lg border border-stone-100">
      <span className="material-symbols-outlined text-secondary">payment</span>
      <span className="font-body-md flex-1">Payment Methods</span>
      <span className="material-symbols-outlined text-stone-400">chevron_right</span>
      </div>
      </div>
      </main>
      </div>
      {/* Modal Backdrop Overlay */}
      <div className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-lg">
      {/* Adaptive Modal Content */}
      <div className="bg-surface w-full max-w-2xl rounded-t-[32px] md:rounded-[24px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
      {/* Modal Header */}
      <div className="px-lg pt-lg pb-md flex justify-between items-center border-b border-surface-variant/30">
      <h2 className="font-headline-md text-primary tracking-tight">Personal Details</h2>
      <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
      <span className="material-symbols-outlined text-on-surface-variant">close</span>
      </button>
      </div>
      {/* Modal Body (Scrollable for smaller heights) */}
      <div className="p-lg overflow-y-auto max-h-[618px] space-y-xl">
      {/* Personal Info Section */}
      <section className="space-y-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Full Name */}
      <div className="space-y-xs">
      <label className="font-label-sm text-primary uppercase block">Full Name</label>
      <input className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300" placeholder="Enter your full name" type="text" value="Julian Thorne"/>
      </div>
      {/* Email Address */}
      <div className="space-y-xs">
      <label className="font-label-sm text-primary uppercase block">Email Address</label>
      <input className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300" placeholder="name@example.com" type="email" value="j.thorne@premium-life.com"/>
      </div>
      {/* Telephone with Badge */}
      <div className="space-y-xs md:col-span-2">
      <div className="flex justify-between items-center">
      <label className="font-label-sm text-primary uppercase">Telephone (Primary)</label>
      <span className="bg-primary/10 text-primary-container px-2 py-0.5 rounded-full flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]"style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
      <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
      </span>
      </div>
      <input className="w-full bg-surface-container-low border-b-2 border-primary-container/20 focus:border-primary px-sm py-md font-body-md outline-none transition-all placeholder:text-stone-300" placeholder="+x (xxx) xxx-xxxx" type="tel" value="+1 (555) 012-3456"/>
      </div>
      </div>
      </section>
      {/* Delivery Address Section */}
      <section className="space-y-md">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-secondary rounded-sm"></span>
      <h3 className="font-label-sm text-primary uppercase tracking-widest">Default Delivery Address</h3>
      </div>
      <div className="bg-surface-container rounded-xl p-md flex gap-4 items-start border border-stone-100">
      <span className="material-symbols-outlined text-secondary pt-1">location_on</span>
      <div className="flex-1 space-y-1">
      <p className="font-body-md font-semibold text-primary">Residence One</p>
      <p className="font-body-md text-on-surface-variant leading-relaxed">
                                      482 Heritage Oak Drive<br/>
                                      Savannah, GA 31401
                                  </p>
      </div>
      <button className="text-secondary font-label-sm uppercase hover:underline">Change</button>
      </div>
      </section>
      </div>
      {/* Modal Actions */}
      <div className="p-lg bg-surface-container-lowest border-t border-surface-variant/30 flex flex-col md:flex-row-reverse gap-md">
      <button className="w-full md:w-auto px-xl py-md bg-primary-container text-white rounded-lg font-label-sm uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95 transition-all">
                          Save Changes
                      </button>
      <button className="w-full md:w-auto px-xl py-md text-stone-500 font-label-sm uppercase tracking-widest hover:text-primary transition-colors">
                          Cancel
                      </button>
      </div>
      </div>
      </div>
      {/* BottomNavBar (Shared Component Identity) */}
      <nav className="fixed bottom-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-stone-50/90 backdrop-blur-lg border-t border-stone-200 z-50">
      <div className="text-stone-400 flex flex-col items-center gap-1 pt-2">
      <span className="material-symbols-outlined" data-icon="explore">explore</span>
      <span className="font-label-sm text-[11px] uppercase tracking-widest">Discover</span>
      </div>
      <div className="text-stone-400 flex flex-col items-center gap-1 pt-2">
      <span className="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
      <span className="font-label-sm text-[11px] uppercase tracking-widest">Menu</span>
      </div>
      <div className="text-stone-400 flex flex-col items-center gap-1 pt-2">
      <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
      <span className="font-label-sm text-[11px] uppercase tracking-widest">Orders</span>
      </div>
      {/* Active Tab: Profile/Account */}
      <div className="text-emerald-900 font-bold flex flex-col items-center gap-1 border-t-2 border-emerald-900 pt-2">
      <span className="material-symbols-outlined" data-icon="person" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
      <span className="font-label-sm text-[11px] uppercase tracking-widest">Profile</span>
      </div>
      </nav>
    </div>
  );
}
