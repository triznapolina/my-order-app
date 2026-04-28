import { useEffect } from 'react';

export default function OrderResultCreated() {
  useEffect(() => {
    document.title = 'Order Successfully Placed | Digital Bistro';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* Top App Bar */}
      <header className="bg-[#F5F5F0] dark:bg-stone-950 docked full-width top-0 border-b border-stone-200/50 dark:border-stone-800 shadow-sm flex items-center justify-between px-6 h-16 w-full sticky z-40">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#1B3022] dark:text-emerald-500 cursor-pointer active:scale-95 duration-150" data-icon="arrow_back">arrow_back</span>
          <h1 className="font-['Epilogue'] tracking-tight font-semibold text-[#1B3022] dark:text-emerald-500">Order Status</h1>
        </div>
        <div className="font-['Epilogue'] font-bold text-xl text-[#1B3022] dark:text-emerald-500">BISTRO</div>
      </header>
      
      {/* Background Content */}
      <main className="p-margin-mobile pb-32">
        <section className="opacity-30 pointer-events-none">
          <h2 className="font-headline-md text-headline-md mb-md">Checkout</h2>
          <div className="space-y-md">
            <div className="bg-surface-container rounded-xl p-md flex gap-md">
              <img className="w-20 h-20 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7bBqvCMVjysc-5A7FyqiOJlZbsHfwfxj4WmhEvkv9L3O5WcWi7Ysbkvyrf8sFOs4zxDZpQ9KXi5VgPpwyU6t1XKu8t2-aO2KW0jlghdWFB62BrEDmqQ4cdE5pL3oQJ-Wn2Ero4RVUoht4D-mGJ95eMKkF3YJ99qFHEr5OXVPDRLsGgdp0t89o1YclVH2uqkEkmeFMO2BX1H7dVyH03WTEd0vCYA_fWM0_PvBR9JIDT6s4-vyJA-m46Sir2tOrdbGM-8dPmMcpng" alt="Heirloom Grain Bowl" />
              <div className="flex-1">
                <p className="font-headline-sm font-bold">Heirloom Grain Bowl</p>
                <p className="text-on-surface-variant text-sm">Extra Avocado, No Onions</p>
                <p className="font-price-label text-price-label text-secondary mt-xs">$18.50</p>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-md space-y-sm">
              <div className="flex justify-between"><span className="text-on-surface-variant">Subtotal</span><span>$18.50</span></div>
              <div className="flex justify-between"><span className="text-on-surface-variant">Delivery Fee</span><span>$2.50</span></div>
              <div className="flex justify-between font-bold text-lg pt-sm"><span>Total</span><span>$21.00</span></div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Success Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary-container/40 backdrop-blur-sm p-4">
        <div className="bg-surface-container-lowest w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
          <div className="relative p-xl flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-lg shadow-lg">
              <span className="material-symbols-outlined text-on-primary-container text-[40px]">check_circle</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-sm leading-tight">Order Successfully Placed!</h2>
            <p className="font-body-md text-on-surface-variant mb-xl">
              Your meal is being prepared with care. <br />
              <span className="font-bold text-primary">Order number #GH-99281</span>
            </p>
            <div className="w-full h-32 mb-xl relative rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh6oOYum8z9AFLxnhf4IusYjqxdXdFc7gekVw6xyi_1e9kc2iofqX3wa7UsFAeKR7nyPjSdTcdHz3TEWkdfU_0apHGRx54nAS9SrkHml9zc7hvV8ATHSwXxbKQr0nDI3KggGYpNBga6ZpEiFBvmu063poJUS4xw7-S3oHQoSMLBIoCVCworz6j0i6_HsBqpMV5EmmO-lMeSxe-4BI4XWwNCPkRVxsrNzKuIxOS-v84YU5J2IO2c_XFeWijTZ6JZchTCziWiNiQPkA" alt="Chef plating a gourmet dish" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
            </div>
            <div className="w-full space-y-md">
              <button className="w-full bg-primary-container text-on-primary-container font-semibold py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">local_shipping</span>
                Track Order
              </button>
              <button className="w-full bg-secondary-container text-on-secondary-container font-semibold py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all">
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
