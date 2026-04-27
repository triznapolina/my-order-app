import React from "react";

export default function DigitalBistroUserProfile() {
  return (
    <div className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <div className="fixed inset-0 flex overflow-hidden filter blur-md pointer-events-none scale-105">
        <aside className="hidden md:flex h-screen w-64 border-r border-stone-200 bg-stone-50 flex-col p-4 gap-2">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-white">restaurant</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-emerald-900 font-headline-md">The Gilded Plate</h1>
              <p className="text-xs text-stone-500 font-label-sm">Main Kitchen</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <div className="bg-emerald-50 text-emerald-900 rounded-lg p-3 flex items-center gap-3 font-label-sm">
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </div>
            <div className="text-stone-600 p-3 flex items-center gap-3 font-label-sm">
              <span className="material-symbols-outlined">group</span>
              Staff Members
            </div>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="sticky top-0 z-50 flex justify-between items-center px-6 h-16 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-emerald-950 font-display tracking-tighter">BistroAdmin</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-stone-500">notifications</span>
              <span className="material-symbols-outlined text-stone-500">settings</span>
              <div className="w-8 h-8 rounded-full bg-stone-200"></div>
            </div>
          </header>

          <div className="p-xl space-y-lg">
            <div className="grid grid-cols-4 gap-gutter">
              <div className="h-32 bg-white rounded-xl shadow-sm border border-stone-100"></div>
              <div className="h-32 bg-white rounded-xl shadow-sm border border-stone-100"></div>
              <div className="h-32 bg-white rounded-xl shadow-sm border border-stone-100"></div>
              <div className="h-32 bg-white rounded-xl shadow-sm border border-stone-100"></div>
            </div>
            <div className="h-96 bg-white rounded-xl shadow-sm border border-stone-100"></div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 z-[100] bg-primary/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-md">
        <div className="bg-surface rounded-t-2xl sm:rounded-xl shadow-[0px_20px_50px_rgba(27,48,34,0.15)] w-full max-w-4xl h-[90vh] sm:max-h-[921px] overflow-hidden flex flex-col border-t sm:border border-outline-variant">
          <div className="px-md sm:px-lg py-md flex items-center justify-between border-b border-surface-container-highest shrink-0">
            <h3 className="font-headline-md text-headline-md text-primary truncate">User Profile Details</h3>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 hover:bg-surface-container-high transition-colors" type="button">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="overflow-y-auto p-md sm:p-lg space-y-lg sm:space-y-xl flex-1">
            <section className="bg-white rounded-xl border border-surface-container-highest p-md sm:p-lg shadow-sm">
              <div className="flex flex-col sm:flex-row gap-md sm:gap-lg items-center sm:items-start text-center sm:text-left">
                <div className="relative">
                  <img
                    alt="Elena Dubois Profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover ring-4 ring-surface-container"
                    data-alt="portrait of a professional woman with a warm smile and refined style in a soft lit modern office setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_rT3NgN2hrEbn-BMfFrgt7e5AfygoJ0StUjhh3KOvBLFiPembd7mGzXZYDnF1ROrCrJfjnLfuSEbWej5mo_wRyBIs2NCN2agiSSTIvxm5cXEeOg2-MadNxlOa356WA3G3lV2I3EOG-dF3v0TLU3gHm1-SJ5pqSeykbgE-sk0K9Lq49r8--COW8z9XmIAJTjkZVqiv6kQmY8P2-qiCpusUVqVbzbbanSsd4xy9CUBRLRLu2c-_ssbZuES2ps_3Ep_afKD6D-K78I"
                  />
                  <div className="absolute -bottom-2 right-1/2 translate-x-1/2 sm:translate-x-0 sm:-right-2 bg-secondary text-white px-3 py-1 rounded-full text-label-sm font-label-sm">
                    Admin
                  </div>
                </div>

                <div className="flex-1 space-y-md w-full">
                  <div>
                    <h4 className="font-headline-lg text-headline-lg text-primary tracking-tight">Elena Dubois</h4>
                    <p className="text-stone-500 font-body-md">Senior Operations Lead • BistroAdmin</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-md pt-md border-t border-surface-container text-left">
                    <div className="flex items-center gap-sm text-on-surface-variant overflow-hidden">
                      <span className="material-symbols-outlined text-secondary shrink-0">mail</span>
                      <span className="font-body-md truncate">elena.dubois@bistroadmin.com</span>
                    </div>
                    <div className="flex items-center gap-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary shrink-0">phone_iphone</span>
                      <span className="font-body-md">+1 (555) 012-3456</span>
                    </div>
                    <div className="flex items-center gap-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
                      <span className="font-body-md">Lyon, France</span>
                    </div>
                    <div className="flex items-center gap-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary shrink-0">calendar_today</span>
                      <span className="font-body-md">Joined Oct 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-md">
              <div className="flex items-center justify-between">
                <h5 className="font-headline-md text-headline-md text-primary">Active Orders</h5>
                <button className="text-secondary font-label-sm flex items-center gap-xs hover:underline" type="button">
                  <span className="hidden sm:inline">View All History</span>
                  <span className="sm:hidden">All History</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <div className="overflow-hidden rounded-xl border border-surface-container-highest bg-white">
                <table className="hidden sm:table w-full text-left border-collapse">
                  <thead className="bg-surface-container-low text-on-surface-variant font-label-sm uppercase tracking-wider">
                    <tr>
                      <th className="px-lg py-md font-semibold">Order ID</th>
                      <th className="px-lg py-md font-semibold">Date</th>
                      <th className="px-lg py-md font-semibold text-center">Status</th>
                      <th className="px-lg py-md font-semibold text-right">Total Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-lg py-md font-label-sm text-primary">#ORD-2024-9901</td>
                      <td className="px-lg py-md font-body-md text-stone-600">Jan 24, 12:45 PM</td>
                      <td className="px-lg py-md text-center">
                        <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-semibold">
                          Preparing
                        </span>
                      </td>
                      <td className="px-lg py-md text-right font-price-label text-primary">$124.50</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-lg py-md font-label-sm text-primary">#ORD-2024-9895</td>
                      <td className="px-lg py-md font-body-md text-stone-600">Jan 24, 11:20 AM</td>
                      <td className="px-lg py-md text-center">
                        <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm font-semibold">
                          Out for Delivery
                        </span>
                      </td>
                      <td className="px-lg py-md text-right font-price-label text-primary">$89.00</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-lg py-md font-label-sm text-primary">#ORD-2024-9882</td>
                      <td className="px-lg py-md font-body-md text-stone-600">Jan 23, 08:15 PM</td>
                      <td className="px-lg py-md text-center">
                        <span className="px-3 py-1 rounded-full bg-surface-container-high text-stone-600 text-label-sm font-semibold">
                          Pending
                        </span>
                      </td>
                      <td className="px-lg py-md text-right font-price-label text-primary">$210.25</td>
                    </tr>
                  </tbody>
                </table>

                <div className="sm:hidden divide-y divide-surface-container">
                  <div className="p-md space-y-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-label-sm text-primary">#ORD-2024-9901</p>
                        <p className="text-xs text-stone-500">Jan 24, 12:45 PM</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                        Preparing
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-stone-500 uppercase tracking-widest font-label-sm">Total</span>
                      <span className="font-price-label text-primary text-lg">$124.50</span>
                    </div>
                  </div>
                  <div className="p-md space-y-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-label-sm text-primary">#ORD-2024-9895</p>
                        <p className="text-xs text-stone-500">Jan 24, 11:20 AM</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                        Out for Delivery
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-stone-500 uppercase tracking-widest font-label-sm">Total</span>
                      <span className="font-price-label text-primary text-lg">$89.00</span>
                    </div>
                  </div>
                  <div className="p-md space-y-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-label-sm text-primary">#ORD-2024-9882</p>
                        <p className="text-xs text-stone-500">Jan 23, 08:15 PM</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-stone-600 text-[10px] font-bold uppercase tracking-wider">
                        Pending
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-stone-500 uppercase tracking-widest font-label-sm">Total</span>
                      <span className="font-price-label text-primary text-lg">$210.25</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
              <div className="p-md bg-stone-100 rounded-lg flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-label-sm">Total Orders</p>
                  <p className="font-headline-md text-primary">42</p>
                </div>
              </div>
              <div className="p-md bg-stone-100 rounded-lg flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-label-sm">Lifetime Value</p>
                  <p className="font-headline-md text-primary">$3,420</p>
                </div>
              </div>
              <div className="p-md bg-stone-100 rounded-lg flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">star_rate</span>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-label-sm">Rating Score</p>
                  <p className="font-headline-md text-primary">4.9</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-md sm:p-lg border-t border-surface-container-highest flex flex-col-reverse sm:flex-row justify-end gap-md bg-surface-container-lowest shrink-0">
            <button className="w-full sm:w-auto px-lg py-sm rounded-lg border border-outline text-on-surface font-label-sm hover:bg-surface-container-low transition-colors" type="button">
              Suspend User
            </button>
            <button className="w-full sm:w-auto px-lg py-sm rounded-lg bg-primary text-white font-label-sm hover:opacity-90 shadow-sm transition-all active:scale-95" type="button">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
