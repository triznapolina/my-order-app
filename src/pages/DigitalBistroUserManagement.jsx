import React, { useState } from "react";

const navItems = [
  { label: "Catalog", icon: "menu_book", active: false },
  { label: "Users", icon: "group", active: true },
  { label: "Orders", icon: "shopping_cart", active: false },
  { label: "Restaurant Info", icon: "restaurant", active: false },
];

const statsCards = [
  {
    label: "Total Users",
    value: "1,284",
    icon: "group",
    iconBg: "bg-emerald-50 text-emerald-900",
    badge: "+12%",
    badgeClass: "text-emerald-600 bg-emerald-50",
  },
  {
    label: "Active Now",
    value: "42",
    icon: "person_check",
    iconBg: "bg-tertiary-fixed-dim/20 text-tertiary",
    badge: "Stable",
    badgeClass: "text-stone-500 bg-transparent",
  },
  {
    label: "Staff Members",
    value: "56",
    icon: "verified_user",
    iconBg: "bg-secondary-fixed/30 text-secondary",
    badge: "+3%",
    badgeClass: "text-secondary bg-transparent",
  },
  {
    label: "Pending Requests",
    value: "18",
    icon: "pending",
    iconBg: "bg-stone-100 text-stone-500",
    badge: "-2%",
    badgeClass: "text-red-500 bg-transparent",
  },
];

const users = [
  {
    initials: "ED",
    name: "Elena Dubois",
    email: "elena.d@earthygastronomy.com",
    role: "Admin",
    joined: "Oct 12, 2023",
    badgeClass: "bg-emerald-100 text-emerald-800",
    avatarBg: "bg-primary-fixed text-primary-container",
  },
  {
    initials: "JM",
    name: "Julian Martinez",
    email: "julian.m@gmail.com",
    role: "Customer",
    joined: "Nov 04, 2023",
    badgeClass: "bg-stone-100 text-stone-600",
    avatarBg: "bg-tertiary-fixed text-tertiary",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    email: "schen.kitchen@earthy.com",
    role: "Chef",
    joined: "Dec 15, 2023",
    badgeClass: "bg-secondary-fixed/30 text-secondary",
    avatarBg: "bg-secondary-fixed text-secondary",
  },
];

export default function DigitalBistroUserManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 w-64 transform transition-transform duration-300 bg-stone-50 dark:bg-stone-950 border-r border-stone-200 dark:border-stone-800 flex flex-col py-6 font-['Epilogue'] tracking-tight z-50 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="px-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Chef's Profile Picture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4PUcUQ12mLXksu034Rxt1YBXMuUkW-EsnYL1cTk7E6U-FU6jJ3hMQExBxR8Yde5jkfZ4DkHRDkIfZCfllmfpamhNSGsG8C4DxZZxDcrg-i7OC6Gitcn5CMn-pCg7fYD_PXiDO_gA3FYtADb-1Dj2kE7dtz9QtJonf7nOY-9uwVA0gkHexK5FMLeim953OAkA-Q_Fs-yQCOSCkzKX9exnC5VyiWSDGAYr9L81LVNRTKDJ-xSRLAFlEJfIzaUl9BN9zOeD7u_ntq4"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900 dark:text-emerald-50 leading-none">Digital Bistro</h1>
                <p className="text-xs text-stone-500 font-medium">Admin Dashboard</p>
              </div>
            </div>
            <button
              className="lg:hidden text-stone-500"
              type="button"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active
                    ? "text-emerald-900 dark:text-emerald-400 font-semibold border-r-4 border-emerald-900 dark:border-emerald-400 bg-stone-100 dark:bg-stone-900"
                    : "text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-stone-100 dark:hover:bg-stone-900"
                }`}
                href="#"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="px-4 mt-6 border-t border-stone-100 dark:border-stone-800 pt-4">
            <button className="w-full py-3 bg-secondary text-on-secondary rounded-lg font-bold text-sm">
              View Live Menu
            </button>
          </div>
          <div className="border-t border-stone-100 dark:border-stone-800 pt-4 mt-auto">
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-emerald-800"
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span>Support</span>
            </a>
          </div>
        </aside>

        <main className="flex-1 min-h-screen lg:ml-64">
          <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 border-b border-stone-100 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 z-40 font-['Epilogue'] font-medium">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden flex items-center justify-center p-2 rounded-lg text-stone-500 hover:bg-stone-100"
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="hidden md:flex items-center gap-4 bg-surface-container rounded-full px-4 py-1.5 w-64 lg:w-96 focus-within:ring-2 focus-within:ring-emerald-900/10">
                <span className="material-symbols-outlined text-stone-400">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-full font-body-md"
                  placeholder="Search..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-6">
              <div className="flex items-center gap-2 lg:gap-4 text-stone-400">
                <button className="hover:text-emerald-700 p-2" type="button">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="hidden sm:block hover:text-emerald-700 p-2" type="button">
                  <span className="material-symbols-outlined">mail</span>
                </button>
              </div>
              <div className="h-8 w-px bg-stone-200 mx-2" />
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-emerald-900 hidden sm:block">Admin User</span>
                <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Administrator Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALrYN9RN86fUpCemsBKfSjeuicO-Dz9GezXq7kicgX5rK19U-e2FZuv6mXdBHupLybAkRt_C4OPgULchmQ1o0GioZl6MJipY2WofjgvIk8kcEv-5rWXTzcbzYJN660evFHiNRRjJYUhiQR2-4AE1bOZyXVUqKvzXbp6u7Vma4ffg3MegwDTX1_w-2njlsnQ3A874sc3Yd7MK_h4B0AecVpyZXNRWK_psVtj_CGK6M2-tHDZTfHV3OBz1qo6r_PVB0F5A1yGPYmbmg"
                  />
                </div>
              </div>
            </div>
          </header>

          <div className="pt-24 px-4 lg:px-8 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-2">User Management</h2>
                <p className="font-body-md text-on-surface-variant max-w-xl">
                  Oversee system access and roles for Earthy Gastronomy's staff and patrons.
                </p>
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold hover:opacity-90 active:scale-95 transition-all" type="button">
                <span className="material-symbols-outlined">add</span>
                Invite User
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mb-10">
              {statsCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white p-6 rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}>
                      <span className="material-symbols-outlined">{card.icon}</span>
                    </div>
                    <span className={`text-xs font-label-sm ${card.badgeClass} px-2 py-1 rounded-full`}>
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm font-medium">{card.label}</p>
                  <h3 className="text-2xl font-bold text-primary">{card.value}</h3>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(27,48,34,0.05)] border border-stone-50 overflow-hidden">
              <div className="px-6 lg:px-8 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    <span className="hidden sm:inline">Filter</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-[20px]">sort</span>
                    <span className="hidden sm:inline">Sort</span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-label-sm text-stone-400 hidden sm:inline">Rows:</span>
                  <select className="text-xs font-semibold bg-transparent border-none focus:ring-0 cursor-pointer" defaultValue="10">
                    <option>10</option>
                    <option>25</option>
                  </select>
                </div>
              </div>

              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs font-label-sm text-stone-400 uppercase tracking-widest border-b border-stone-100">
                      <th className="px-8 py-5">Name</th>
                      <th className="px-8 py-5">Email</th>
                      <th className="px-8 py-5">Role</th>
                      <th className="px-8 py-5">Join Date</th>
                      <th className="px-8 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-body-md">
                    {users.map((user) => (
                      <tr key={user.email} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors">
                        <td className="px-8 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] ${user.avatarBg}`}>
                              {user.initials}
                            </div>
                            <span className="font-bold text-emerald-900">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-4 text-on-surface-variant">{user.email}</td>
                        <td className="px-8 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.badgeClass}`}>{user.role}</span>
                        </td>
                        <td className="px-8 py-4 text-on-surface-variant">{user.joined}</td>
                        <td className="px-8 py-4 text-right">
                          <button className="text-stone-400 hover:text-emerald-900" type="button">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:hidden divide-y divide-stone-100">
                {users.map((user) => (
                  <div key={user.email} className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${user.avatarBg}`}>
                          {user.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-emerald-900">{user.name}</h4>
                          <p className="text-xs text-on-surface-variant">{user.email}</p>
                        </div>
                      </div>
                      <button className="text-stone-400" type="button">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2.5 py-1 rounded-full font-bold ${user.badgeClass}`}>{user.role}</span>
                      <span className="text-stone-400">Joined {user.joined.slice(0, -6)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm font-body-md text-stone-400 text-center sm:text-left">
                  Showing <span className="font-bold text-on-surface">1</span> to <span className="font-bold text-on-surface">3</span> of <span className="font-bold text-on-surface">1,284</span>
                </p>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-400" type="button">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold" type="button">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant" type="button">
                    2
                  </button>
                  <span className="px-1 text-stone-400">...</span>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-400" type="button">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              <div className="lg:col-span-2 bg-emerald-900 text-white rounded-xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-headline-md mb-2">Grow Your Community</h4>
                  <p className="text-primary-fixed-dim/80 mb-6 max-w-md">
                    Earthy Gastronomy's user base has increased by 15% this quarter. Send personalized invites to top customers.
                  </p>
                  <button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold hover:opacity-90" type="button">
                    Generate Invites
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 transform -rotate-12 hidden sm:block">
                  <span className="material-symbols-outlined text-[200px]">restaurant</span>
                </div>
              </div>

              <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-headline-md text-primary mb-4">Audit Logs</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5" />
                      <div>
                        <p className="text-xs font-bold text-on-surface">Role change for Sarah Chen</p>
                        <p className="text-[10px] text-stone-400">2 hours ago</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5" />
                      <div>
                        <p className="text-xs font-bold text-on-surface">New User Julian Martinez</p>
                        <p className="text-[10px] text-stone-400">5 hours ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="text-emerald-900 text-xs font-bold flex items-center gap-1 mt-6 hover:underline" type="button">
                  View Full History
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
