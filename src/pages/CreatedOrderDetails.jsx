import { useEffect } from "react";

const menuItems = [
  {
    title: "Harvest Buddha Bowl",
    description: "Quinoa base, roasted sweet potato, kale, and tahini dressing.",
    price: "$18.50",
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSKiVpGpHV_wV9eqo4wCNLmQ0VVdEaMJPHzW09ci-KoPMiPV405sPONHD6PIpmFuUUN30fadpbCw-QjvzLKJR0LF6FLTrSGdrMOOCEhNBKYMTIFpT2ucUADnGTF8zC0SCads7rZqWO-R531BbaoLoMpQMqNNzMMAer8Qhyj4it6eBHDePL5m89dHNMmFGZwGv2q8DsahEEt9OOTsHnc5h-r2hjXWO8V3GENRmngZhRZF3fDlkacVtWIJHHSwcQVEVWXqHKJa_D2V4",
  },
  {
    title: "Artisan Hummus Plate",
    description: "House-made beet hummus with heirloom carrots and warmed sourdough.",
    price: "$26.00",
    quantity: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCw2No-eWThdZdKcMeQoYNaj1QyAwlQHwJ9juekfo7-9hRoiO4BXeOK0TEgFJN0nbyVyxofjGpsGckt0KoQYssIwNUYIBQYEjPIjN4bknxrvGNPQ4oZKZYt5BDzyZ1ljRD12XUOTg8BRELb3pZ8P5siWmk05buPK_qFnDT2tBpdPYP6fjz-cIPt53nLCy2zekInRyVLFWs3R8x7-P-DdBxOSkY9p_BRaMLs4yU51Ch_G5lXNrYLeKAAEBxPQtD_N41Oo38oDjngZeU",
  },
  {
    title: "Rosemary Botanical Tonic",
    description: "Sparkling spring water infused with wild-harvested rosemary.",
    price: "$8.50",
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIUL-7F3oPzyy6dqVjYpgKDSyQRCr_oPcr-ZcRfjCayN5dH7xfCxMftnLUtoIXwMKAoM5LZ8UQPJoHGW25kHZIHTYnwxw_VGoUxcesY3C14X2lf1wGGROGF0daR645l5VzRsrDKMH312ySXLw1dETz8uIpRMFy4Eoh0LS-WNmNRJrt9yPFwiVVnbTYObKTjxUSWc-eug4TDYjclLqdUN1H5hY2sSnLKdKh7lWlnEOfEeFA0ust3nDpjx1Hj3E6JyyYQU8XScwoun0",
  },
];

const summary = {
  subtotal: "$53.00",
  delivery: "$4.50",
  tax: "$4.51",
  total: "$62.01",
};

export default function CreatedOrderDetails() {
  useEffect(() => {
    document.title = "Created Order Details | Digital Bistro";
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md relative">
      <div className="fixed inset-0 z-0 overflow-hidden opacity-40 grayscale-[20%] pointer-events-none">
        <header className="bg-stone-50/90 backdrop-blur-md border-b border-stone-200 h-16 px-6 w-full flex justify-between items-center">
          <div className="text-xl font-bold text-emerald-900 tracking-tighter uppercase font-epilogue">
            Earthy Gastronomy
          </div>
          <div className="flex gap-lg">
            <span className="font-epilogue text-stone-500">Menu</span>
            <span className="font-epilogue text-stone-500">Reservations</span>
            <span className="font-epilogue text-emerald-900 border-b-2 border-emerald-900">About</span>
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-emerald-900">shopping_bag</span>
            <div className="w-8 h-8 rounded-full bg-stone-200" />
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 pt-xl">
          <div className="flex gap-xl mb-xl">
            <div className="w-48 h-48 rounded-full bg-stone-200 shrink-0" />
            <div className="flex flex-col justify-center">
              <h1 className="font-headline-lg text-primary mb-sm">Julianne Valez</h1>
              <p className="text-on-surface-variant font-body-lg">
                Connoisseur of organic flavors & sustainable dining.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-lg">
            <div className="col-span-8">
              <div className="h-64 bg-stone-100 rounded-xl mb-lg" />
              <div className="h-64 bg-stone-100 rounded-xl" />
            </div>
            <div className="col-span-4">
              <div className="h-96 bg-stone-100 rounded-xl" />
            </div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 z-[60] bg-tertiary/40 backdrop-blur-sm flex items-center justify-center p-md">
        <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-[0px_20px_50px_rgba(27,48,34,0.15)] flex flex-col max-h-[921px] overflow-hidden border border-outline-variant/30">
          <div className="p-lg border-b border-surface-container-highest flex justify-between items-center">
            <div>
              <span className="font-label-sm text-secondary tracking-widest uppercase mb-xs block">
                Order #EG-72941
              </span>
              <h2 className="font-headline-md text-primary">Order Details</h2>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="overflow-y-auto p-lg space-y-xl">
            <div className="flex flex-wrap items-center justify-between gap-md">
              <div className="flex items-center gap-sm">
                <div className="w-3 h-3 rounded-full bg-emerald-600" />
                <span className="font-body-md font-semibold text-emerald-900">Delivered</span>
                <span className="text-on-surface-variant px-sm border-l border-outline-variant">
                  Oct 24, 2023 • 7:42 PM
                </span>
              </div>
              <div className="flex gap-sm">
                <span className="font-label-sm bg-stone-100 px-3 py-1 rounded-full text-stone-600">Organic</span>
                <span className="font-label-sm bg-stone-100 px-3 py-1 rounded-full text-stone-600">Gluten-Free</span>
              </div>
            </div>

            <div className="space-y-lg">
              <h3 className="font-headline-md text-primary text-lg">Menu Items</h3>
              <div className="divide-y divide-surface-container-highest">
                {menuItems.map((item) => (
                  <div key={item.title} className="py-md flex gap-lg items-center">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-body-lg font-bold text-primary">{item.title}</h4>
                        <span className="font-price-label text-primary">{item.price}</span>
                      </div>
                      <p className="text-on-surface-variant font-body-md text-sm mb-sm">{item.description}</p>
                      <div className="flex items-center gap-md">
                        <span className="font-label-sm text-secondary bg-secondary/5 px-2 py-0.5 rounded">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl p-lg">
              <h3 className="font-headline-md text-primary text-lg mb-md">Payment Summary</h3>
              <div className="space-y-sm">
                <div className="flex justify-between text-on-surface-variant font-body-md">
                  <span>Subtotal</span>
                  <span className="font-medium">{summary.subtotal}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-body-md">
                  <span>Delivery Fee</span>
                  <span className="font-medium">{summary.delivery}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-body-md">
                  <span>Tax (8.5%)</span>
                  <span className="font-medium">{summary.tax}</span>
                </div>
                <div className="pt-md mt-md border-t border-outline-variant/20 flex justify-between items-end">
                  <span className="font-headline-md text-primary">Total Amount</span>
                  <span className="font-display-xl text-primary text-3xl">{summary.total}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-lg">
              <div>
                <span className="font-label-sm text-secondary tracking-widest uppercase mb-sm block">Delivery Address</span>
                <p className="font-body-md text-on-surface">1284 Oak Grove Avenue<br />San Francisco, CA 94107</p>
              </div>
              <div>
                <span className="font-label-sm text-secondary tracking-widest uppercase mb-sm block">Payment Method</span>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                  <p className="font-body-md text-on-surface">Visa ending in •••• 9012</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-lg border-t border-surface-container-highest flex gap-md">
            <button className="flex-1 py-md bg-primary text-on-primary font-epilogue font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined text-sm">receipt</span>
              Download Receipt
            </button>
            <button className="flex-1 py-md bg-secondary text-on-secondary font-epilogue font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined text-sm">refresh</span>
              Reorder Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
