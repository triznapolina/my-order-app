import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    document.title = 'Account - The Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <nav className="bg-[#FDFCFB] dark:bg-stone-950 text-[#1B3022] dark:text-stone-200 font-epilogue font-medium tracking-tight fixed top-0 w-full z-50 border-b border-stone-200/60 dark:border-stone-800 shadow-[0px_4px_20px_rgba(27,48,34,0.02)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-black tracking-tighter text-[#1B3022] dark:text-stone-100" style="">The Digital Bistro</div>
      <div className="hidden md:flex gap-8 items-center h-full">
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#" style="">Menu</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#" style="">Reservations</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#" style="">Private Dining</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#" style="">Our Story</a>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-300 rounded-full active:scale-[0.98]" style="">
      <span className="material-symbols-outlined" data-icon="shopping_bag" style="">shopping_bag</span>
      </button>
      <button className="p-2 text-[#1B3022] dark:text-white border-b-2 border-[#1B3022] dark:border-stone-200 transition-all duration-300 active:scale-[0.98]" style="">
      <span className="material-symbols-outlined" data-icon="account_circle" style='font-variation-settings: "FILL" 1;'>account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-12">
      <aside className="md:w-1/3 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)] text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
      <img className="w-full h-full object-cover rounded-full ring-4 ring-surface-container" data-alt="professional headshot of a middle-aged man with short dark hair and a groomed beard wearing a casual linen shirt in warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkB-EFBETR7UmyWfJul3d_oQGU8dmYE1fe2CeZkFZoVsE4cpiHf1SWtjZVjsLldCyGagcZ2FaMpzuiSMooPKF7i31D1fK3fNjQHzqMS9pPxEGceo-Vul3rkvza4wG15AIf0lZuYYwrlF6Ec_Zf44PgvCobR3LFkfpzrfy98Lclquze46zxpy0KWL1HAHqp203hmQ6MzmNMA40493qVDJdc55kHDGQjszeAPpAo_bSgDK7WTJp_kkAalW1jrCAbptQxxM56MTSAuRk" style=""/>
      <div className="absolute bottom-1 right-1 bg-primary-container text-on-primary-container p-1.5 rounded-full border-2 border-white shadow-sm">
      <span className="material-symbols-outlined text-[16px]" data-icon="verified" style='font-variation-settings: "FILL" 1;'>verified</span>
      </div>
      </div>
      <h2 className="font-headline-lg text-primary mb-1" style="">Julian Thorne</h2>
      <div className="grid grid-cols-2 gap-4 border-t border-surface-variant pt-6 mt-4">
      <div className="text-left">
      <span className="text-label-sm text-on-surface-variant uppercase block mb-1" style="">Credit Balance</span>
      <span className="font-price-label text-primary" style="">$245.50</span>
      </div>
      <div className="text-left">
      <span className="text-label-sm text-on-surface-variant uppercase block mb-1" style="">Loyalty Points</span>
      <span className="font-price-label text-secondary" style="">1,280</span>
      </div>
      </div>
      </div>
      <nav className="space-y-2">
      <a className="flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-lg font-medium transition-all duration-200" href="#" style="">
      <span className="material-symbols-outlined" data-icon="person" style="">person</span>
                              Profile &amp; Security
                          </a>
      <a className="flex items-center gap-3 px-6 py-4 text-on-surface hover:bg-white hover:shadow-sm rounded-lg font-medium transition-all duration-200" href="#" style="">
      <span className="material-symbols-outlined" data-icon="restaurant_menu" style="">restaurant_menu</span>
                              Order History
                          </a>
      <a className="flex items-center gap-3 px-6 py-4 text-on-surface hover:bg-white hover:shadow-sm rounded-lg font-medium transition-all duration-200" href="#" style="">
      <span className="material-symbols-outlined" data-icon="payments" style="">payments</span>
                              Payment Methods
                          </a>
      <a className="flex items-center gap-3 px-6 py-4 text-on-surface hover:bg-white hover:shadow-sm rounded-lg font-medium transition-all duration-200" href="#" style="">
      <span className="material-symbols-outlined" data-icon="notifications" style="">notifications</span>
                              Preferences
                          </a>
      </nav>
      </aside>
      <div className="md:w-2/3 space-y-12">
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary" style="">Personal Details</h3>
      <button className="text-secondary font-semibold hover:underline decoration-2 underline-offset-4" style="">Edit Details</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)]">
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase" style="">Full Name</label>
      <p className="font-body-lg text-on-surface font-medium" style="">Julian Thorne</p>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase" style="">Email Address</label>
      <p className="font-body-lg text-on-surface font-medium" style="">j.thorne@premium-life.com</p>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase" style="">Telephone (Primary)</label>
      <div className="flex items-center gap-2">
      <p className="font-body-lg text-on-surface font-medium" style="">+1 (555) 892-4410</p>
      <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider" style="">Verified</span>
      </div>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase" style="">Default Delivery Address</label>
      <p className="font-body-lg text-on-surface font-medium" style="">1280 Highland Avenue, Ste 402, LA</p>
      </div>
      </div>
      </section>
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary" style="">Order History</h3>
      <a className="text-secondary font-semibold hover:underline decoration-2 underline-offset-4" href="#" style="">View All</a>
      </div>
      <div className="bg-white rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low text-label-sm text-on-surface-variant uppercase">
      <th className="px-8 py-4 font-semibold" style="">Order #</th>
      <th className="px-8 py-4 font-semibold" style="">Date</th>
      <th className="px-8 py-4 font-semibold" style="">Status</th>
      <th className="px-8 py-4 font-semibold" style="">Total</th>
      <th className="px-8 py-4 font-semibold text-right" style="">Action</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-surface-variant">
      <tr className="hover:bg-surface-bright transition-colors">
      <td className="px-8 py-6 font-medium text-primary" style="">GH-99281</td>
      <td className="px-8 py-6 text-on-surface-variant" style="">Oct 24, 2023</td>
      <td className="px-8 py-6" style="">
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                                  Delivered
                                              </td>
      <td className="px-8 py-6 font-price-label text-sm" style="">$84.20</td>
      <td className="px-8 py-6 text-right" style="">
      <button className="text-secondary font-semibold" style="">Details</button>
      </td>
      </tr>
      <tr className="hover:bg-surface-bright transition-colors">
      <td className="px-8 py-6 font-medium text-primary" style="">GH-98102</td>
      <td className="px-8 py-6 text-on-surface-variant" style="">Oct 12, 2023</td>
      <td className="px-8 py-6" style="">
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                                  Delivered
                                              </td>
      <td className="px-8 py-6 font-price-label text-sm" style="">$112.50</td>
      <td className="px-8 py-6 text-right" style="">
      <button className="text-secondary font-semibold" style="">Details</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </section>
      <section className="bg-primary-container text-white p-8 rounded-lg shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
      <span className="material-symbols-outlined text-9xl" data-icon="receipt_long" style="">receipt_long</span>
      </div>
      <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined text-on-primary-container" data-icon="info" style="">info</span>
      <h3 className="font-headline-md" style="">Active Order Details: #GH-99281</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
      <div className="flex-1 space-y-4">
      <div className="flex justify-between items-center pb-4 border-b border-on-primary-container/20">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-on-primary-container/10 rounded-lg flex items-center justify-center" style="">1x</div>
      <div>
      <p className="font-medium" style="">Heirloom Quinoa Bowl</p>
      <p className="text-sm text-on-primary-container" style="">Extra avocado, No cilantro</p>
      </div>
      </div>
      <span className="font-price-label text-sm" style="">$28.00</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-on-primary-container/20">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-on-primary-container/10 rounded-lg flex items-center justify-center" style="">1x</div>
      <div>
      <p className="font-medium" style="">Wild Mushroom Truffle Pizza</p>
      <p className="text-sm text-on-primary-container" style="">Thin crust, Artisanal goat cheese</p>
      </div>
      </div>
      <span className="font-price-label text-sm" style="">$42.00</span>
      </div>
      <div className="flex justify-between items-center pb-4 border-b border-on-primary-container/20">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-on-primary-container/10 rounded-lg flex items-center justify-center" style="">2x</div>
      <div>
      <p className="font-medium" style="">Sparkling Mineral Water</p>
      <p className="text-sm text-on-primary-container" style="">750ml, Chilled</p>
      </div>
      </div>
      <span className="font-price-label text-sm" style="">$14.20</span>
      </div>
      </div>
      <div className="lg:w-72 bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
      <div className="space-y-3 mb-6">
      <div className="flex justify-between text-sm">
      <span className="text-on-primary-container" style="">Subtotal</span>
      <span className="" style="">$84.20</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-on-primary-container" style="">Delivery Fee</span>
      <span className="text-secondary-fixed" style="">FREE</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-on-primary-container" style="">Tax (8%)</span>
      <span className="" style="">$6.74</span>
      </div>
      </div>
      <div className="pt-4 border-t border-white/20 flex justify-between items-end">
      <span className="font-bold uppercase tracking-widest text-xs" style="">Total Amount</span>
      <span className="text-2xl font-bold font-price-label" style="">$90.94</span>
      </div>
      <button className="w-full mt-6 bg-secondary text-white py-3 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2" style="">
      <span className="material-symbols-outlined text-[18px]" data-icon="refresh" style="">refresh</span>
                                          Reorder Now
                                      </button>
      </div>
      </div>
      </div>
      </section>
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary" style="">Payment Methods</h3>
      <button className="bg-primary text-white px-4 py-2 rounded-lg text-label-sm flex items-center gap-2" style="">
      <span className="material-symbols-outlined text-[16px]" data-icon="add" style="">add</span>
                                  Add New Card
                              </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg border border-surface-variant flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
      <div className="w-12 h-8 bg-surface-container rounded-sm flex items-center justify-center">
      <img className="h-4 grayscale" data-alt="stylized classic visa credit card logo with blue and yellow colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS8rAunYVSiVJcQ5kAS9fjOCP6muXaK8fZ4CNxzydi0uBMAiK2eITg3hrq1t3pQ6HLUhwYO0ybgJRsg2M2r_RMcaFGNTezii7fDBd8ky9ROdax-B0y6FGjK-G0usLc2H26UW8x4H3NfL8hN6aqNjlkhwz_INa0T9Acta_5_0F9-RlzF6pXzP9WLco9-UHDwgKfl1YI9OnCgCK54DYt-7Q9lGBV84YwiZ6PpAPIy2IgN__o5Oa0KaSxaZ_lcXRvQUaXhmWVdjuC3G4" style=""/>
      </div>
      <div>
      <p className="font-medium text-primary" style="">Visa ending in 4412</p>
      <p className="text-xs text-on-surface-variant" style="">Expires 08/26</p>
      </div>
      </div>
      <span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold" style="">DEFAULT</span>
      </div>
      <div className="bg-white p-6 rounded-lg border border-surface-variant flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
      <div className="w-12 h-8 bg-surface-container rounded-sm flex items-center justify-center">
      <img className="h-4 grayscale" data-alt="mastercard logo with two overlapping circles in red and yellow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXfW_Dc1TNrexhcEYPUJ52dYgUudN0zvhNfUsbST3ZLuS1qARDwXWOYAUPlJYs42DuLb7Wq8YEUJVdzqOXwLouC00xP261rNAqIl-e1oH3N8c53JoIi0IvVOG9IRZXzzig6JrVh6CpDCu9GuU95NmDIOE177MBMC6y-eh2VV8CCtjQDE8kQHff_o-GvfjvgElyxQ8e4EE4rHBfjgQA8wrAaxi0RtdJ-SIY6KiEMj4m7RQ8FCaboDyyjjEh7Rjg-kE6VTJhyRJYHKw" style=""/>
      </div>
      <div>
      <p className="font-medium text-primary" style="">Mastercard ending in 8829</p>
      <p className="text-xs text-on-surface-variant" style="">Expires 11/25</p>
      </div>
      </div>
      <button className="text-on-surface-variant hover:text-error transition-colors" style="">
      <span className="material-symbols-outlined" data-icon="delete" style="">delete</span>
      </button>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
      <footer className="bg-[#FDFCFB] dark:bg-stone-950 text-[#1B3022] dark:text-stone-200 font-epilogue text-sm uppercase tracking-widest w-full border-t border-stone-200 dark:border-stone-800 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-[#1B3022] dark:text-stone-100" style="">The Digital Bistro</div>
      <div className="flex flex-wrap justify-center gap-8">
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#" style="">Privacy Policy</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#" style="">Terms of Service</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#" style="">Sustainability</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#" style="">Careers</a>
      </div>
      <p className="text-[10px] text-stone-400 text-center md:text-right" style="">© 2024 The Digital Bistro. <br className="md:hidden"/>Crafted for the discerning palate.</p>
      </div>
      </footer>
    </div>
  );
}
