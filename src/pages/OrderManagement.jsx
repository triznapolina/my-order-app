import { useState, useMemo } from "react";

const orderStats = [
  {
    label: "Live Orders",
    value: "24",
    badge: "+12% from last hour",
    icon: "wifi_tethering",
    badgeClass: "text-emerald-700",
    iconBg: "bg-emerald-50 text-emerald-900",
  },
  {
    label: "Preparing",
    value: "08",
    badge: "Avg. time: 14 mins",
    icon: "skillet",
    badgeClass: "text-stone-400",
    iconBg: "bg-tertiary-fixed text-tertiary",
  },
  {
    label: "Ready",
    value: "05",
    badge: "Needs notification",
    icon: "notifications_active",
    badgeClass: "text-secondary font-bold italic",
    iconBg: "bg-secondary-fixed text-secondary",
  },
  {
    label: "Today's Revenue",
    value: "$4,280",
    badge: "Higher than yesterday",
    icon: "payments",
    badgeClass: "text-primary-fixed-dim",
    iconBg: "bg-primary-fixed-dim text-primary",
    panelClass: "bg-primary-container",
    valueClass: "text-white",
  },
];

const orders = [
  {
    id: "#ORD-8821",
    datetime: "Oct 24, 12:45 PM",
    customer: "Julian Rossi",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiteBAODj5Hehog54Cs9zJ_7k30VC14UD6ycCqx0hjJzczQORgxXZRauDoke_VH2Ziz-rJpYTLmQj4aG8H7yuhTjgG5tzLzGo8-JCShm7gWR7cOklTtwlG6g5SJZZmquUfymuS2w3vrXHzqXRYfFFMJ3bwdja396s8mC-ED1i5p9gPMhM6rKTSNV1TcUXoOS9opIuEUrhgto8PGMz0z_Tt25l_sNBvXzJF__7m1jP9Mh66TdiMcZ87Mfj_l6iFvrSfpAS7W64vYQg",
    items: "3x Truffle Gnocchi...",
    total: "$124.50",
    status: "Preparing",
    statusClass: "bg-emerald-50 text-emerald-900",
    actionLabel: "Notify Pick-up",
    actionDisabled: false,
    actionClass: "bg-secondary text-white hover:bg-secondary-container",
  },
  {
    id: "#ORD-8820",
    datetime: "Oct 24, 12:30 PM",
    customer: "Elena Brooks",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Waum2Ed4ByvjEhkdNErXs7z7gAwQK7SL1U9e9Gf-HPtPmGBYtepJzs96s5VnF2jndhVkTVI6SAJwy6nFoJ9IKC2SLOZBgBJkyamAXqwkzSKjh-IAn85uXwNDa8x2iGbSDvEmZSVdCwB19ZAmh3-z1mADQmuRuL8jQj1j9xuhwnp0473hPzVY--Xrd1ZQQkhOH7HPyNDJXoQnJXQzOXKvd8JRvDWet_QHptvO0ysHmy4CVUFxw5O0GgAcsMyoddauNdIqQJlw5kc",
    items: "1x Ribeye Steak, 1x Red Wine",
    total: "$89.00",
    status: "Ready",
    statusClass: "bg-secondary-fixed text-secondary",
    actionLabel: "Notify Pick-up",
    actionDisabled: false,
    actionClass: "bg-secondary text-white hover:bg-secondary-container",
  },
  {
    id: "#ORD-8819",
    datetime: "Oct 24, 12:15 PM",
    customer: "Marcus Chen",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZBgXzwJ6ry14hSG6-KZumtpLlo4-PmRoGpqVW4K7tBpSov2-4uDIbiBmEu78B4CSELfSPd8XUMdrWCOGVtUbhw9awYPOirelT8TMGdnC2awrsrioeQ4quWejG-ih2WP965k6N2RLfOCbUjukJCx2hmWTam4f0EaISU9gpp7m25qlWWbBx2eehUC7t9C88BqpNk4DPTIj7gu7rW8vZW8mdjQplYT_aN_baqtcrAi0S8a_GSCgzxOfbJCMrv1GkRZJ8NPcKUWOrboE",
    items: "2x Lobster Thermidor",
    total: "$210.00",
    status: "Completed",
    statusClass: "bg-stone-100 text-stone-600",
    actionLabel: "Notified",
    actionDisabled: true,
    actionClass: "text-stone-400 cursor-not-allowed",
  },
  {
    id: "#ORD-8818",
    datetime: "Oct 24, 11:55 AM",
    customer: "Sarah Jenkins",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMRm0a7devShm1e6OQT07W7kMO87e5slIAmVBg4COKhzUxSk_u79GaL7PtdmZPH_fsQfAM9goxGhJHkYYLVB7G6g1EMW_mDcp3VwfpIuZB-IG2Djwpx-n6maVH7CqS3xdPTI8LZzWkJM0UNRQZXsPQUEaDr6OC5legXKMYhxAfxpkDNishQizhwvZpIn3KVLqEPYDdCGThllXh-3ujwcX24bzCYJkLO53UXYZ3Ze-keyJEBmxi4WefuhXbof9yHChNaD-crjxHdJk",
    items: "4x Classic Burger",
    total: "$72.25",
    status: "Completed",
    statusClass: "bg-stone-100 text-stone-600",
    actionLabel: "Notified",
    actionDisabled: true,
    actionClass: "text-stone-400 cursor-not-allowed",
  },
  {
    id: "#ORD-8817",
    datetime: "Oct 24, 11:40 AM",
    customer: "Olivia Vance",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfyBbXHuWpXKgsFXMWwDTSaMWsIWVxDlj7R1E4OgBeM-X1jq4bq5TVLKSCZhBgQYz2ToEzueasTZSwSp7nnrhEjoAyNA5APygZrcAPUwUUqMyCjeF76jYAoJ-yFkmtJ38Oea-bgXzITN_hl-75DhewGE6e3le_szLZvoUg5P4P0JkSf1zlnUZsB4GRU_5xoJjea5wDYs9FWiv1-AbBxOE9HztgVOeKB_GcFXoOZ2-L1CQzVrv01fUjl_sMRV4La7P7kxpA1ViSi80",
    items: "1x Caesar Salad, 1x Water",
    total: "$18.50",
    status: "Preparing",
    statusClass: "bg-emerald-50 text-emerald-900",
    actionLabel: "Notify Pick-up",
    actionDisabled: false,
    actionClass: "bg-secondary text-white hover:bg-secondary-container",
  },
];

const OrderManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return orders;
    return orders.filter((order) =>
      [order.id, order.datetime, order.customer, order.items, order.total, order.status]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  const pageCount = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const currentPageSafe = Math.min(currentPage, pageCount - 1);

  const paginatedOrders = useMemo(() => {
    const start = currentPageSafe * itemsPerPage;
    return filteredOrders.slice(start, start + itemsPerPage);
  }, [filteredOrders, currentPageSafe, itemsPerPage]);

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

   const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="font-body-md text-on-surface bg-background min-h-screen">
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-stone-900/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`flex flex-col fixed left-0 top-0 h-full py-6 px-4 bg-stone-50 dark:bg-stone-950 h-screen w-64 border-r border-stone-200 dark:border-stone-800 font-['Epilogue'] antialiased tracking-tight z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-10 px-4">
          <span className="text-xl font-bold text-emerald-900 dark:text-emerald-50">Bistro Admin</span>
          <button
            className="lg:hidden cursor-pointer text-stone-500"
            onClick={closeSidebar}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-menu"
          >
            <span className="material-symbols-outlined" data-icon="menu_book">
              menu_book
            </span>
            <span>Catalog</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform" 
            href="/admin-categories"
          >
            <span className="material-symbols-outlined" data-icon="category">
              category
            </span>
            <span>Categories</span>
          </a>
          {/* Active State: Branches */}
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-branches"
          >
            <span
              className="material-symbols-outlined"
              data-icon="store"
            >
              store
            </span>
            <span>Branches</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-400 font-semibold rounded-lg cursor-pointer active:scale-95 transition-transform" 
            href="/admin-orders"
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart" style={{ fontVariationSettings: "'FILL' 1" }}>
              shopping_cart
            </span>
            <span>Orders</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-900 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 cursor-pointer active:scale-95 transition-transform"
            href="/admin-users"
          >
            <span className="material-symbols-outlined" data-icon="group">
              group
            </span>
            <span>Users</span>
          </a>
        </nav>
      </aside>

      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* TopAppBar Shell */}
        <header className="flex justify-between items-center px-4 md:px-8 h-16 sticky top-0 z-40 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm font-['Epilogue'] font-medium">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full p-2 focus:ring-2 focus:ring-emerald-500 transition-all text-emerald-900 dark:text-emerald-500"
              onClick={handleSidebarToggle}
              type="button"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          
        </header>

        <div className="p-margin-mobile lg:p-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
            {orderStats.map((card) => (
              <div key={card.label} className={`bg-white p-lg rounded-xl shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100 ${card.panelClass || ''}`}>
                <div className="flex justify-between items-start mb-sm">
                  <span className="text-label-sm font-label-sm text-stone-500 uppercase tracking-wider">{card.label}</span>
                  <div className={`p-2 rounded-lg ${card.iconBg}`}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                </div>
                <div className={`text-display-xl font-display-xl ${card.valueClass || 'text-primary'}`}>{card.value}</div>
                <div className={`flex items-center gap-1 text-label-sm font-label-sm mt-2 ${card.badgeClass}`}>
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  <span>{card.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100 overflow-hidden">
            <div className="px-lg py-md border-b border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-headline-md font-headline-md text-primary">Recent Orders</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
                  <input
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 focus:ring-secondary focus:border-secondary text-sm"
                    placeholder="Search orders..."
                    type="text"
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value);
                      setCurrentPage(0);
                    }}
                  />
                </div>
                <button className="p-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-50" type="button">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50/50 text-label-sm font-label-sm text-stone-500 uppercase tracking-widest border-b border-stone-100">
                    <th className="px-lg py-4">Order #</th>
                    <th className="px-lg py-4">Date/Time</th>
                    <th className="px-lg py-4">Customer</th>
                    <th className="px-lg py-4">Items</th>
                    <th className="px-lg py-4">Total Price</th>
                    <th className="px-lg py-4">Status</th>
                    <th className="px-lg py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50 font-body-md text-sm">
                  {paginatedOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-stone-50/40 transition-colors">
                      <td className="px-lg py-4 font-bold text-primary">{order.id}</td>
                      <td className="px-lg py-4 text-stone-500">{order.datetime}</td>
                      <td className="px-lg py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden">
                            <img className="w-full h-full object-cover" alt={order.customer} src={order.avatar} />
                          </div>
                          <span>{order.customer}</span>
                        </div>
                      </td>
                      <td className="px-lg py-4">{order.items}</td>
                      <td className="px-lg py-4 font-bold">{order.total}</td>
                      <td className="px-lg py-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${order.statusClass}`}>{order.status}</span>
                      </td>
                      <td className="px-lg py-4 text-right">
                        <button
                          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${order.actionClass}`}
                          type="button"
                          disabled={order.actionDisabled}
                        >
                          {order.actionLabel}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-lg py-lg bg-stone-50/30 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-500">Items per page:</span>
                <select
                  className="bg-white border border-stone-200 rounded-lg text-sm px-2 py-1 focus:ring-secondary focus:border-secondary"
                  value={itemsPerPage}
                  onChange={(event) => {
                    setItemsPerPage(Number(event.target.value));
                    setCurrentPage(0);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-stone-500">Showing {Math.min(currentPageSafe * itemsPerPage + 1, filteredOrders.length)}-{Math.min((currentPageSafe + 1) * itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-200 text-stone-400 hover:bg-stone-50"
                  type="button"
                  onClick={() => handlePageChange(Math.max(currentPageSafe - 1, 0))}
                  disabled={currentPageSafe === 0}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {Array.from({ length: pageCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handlePageChange(index)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold ${index === currentPageSafe ? 'bg-primary text-white' : 'border border-transparent text-stone-600 hover:bg-stone-100'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50"
                  type="button"
                  onClick={() => handlePageChange(Math.min(currentPageSafe + 1, pageCount - 1))}
                  disabled={currentPageSafe === pageCount - 1}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default OrderManagement;
