import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { orderService, userService } from "../apis/api";

export default function DigitalBistroUserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setUser(null);
      setOrders([]);
      return;
    }

    const loadUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userRes, ordersRes] = await Promise.all([
          userService.getInfoById(id),
          orderService.getByClientId(id),
        ]);

        setUser(userRes.data);
        setOrders(Array.isArray(ordersRes.data) ? ordersRes.data : ordersRes.data?.content || []);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные пользователя.");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  const handleToggleActive = async () => {
    if (!user) return;

    try {
      const updated = user.active
        ? await userService.deactivate(user.id, false)
        : await userService.activate(user.id, true);

      setUser(updated.data);
    } catch (err) {
      console.error(err);
      setError("Не удалось обновить статус пользователя.");
    }
  };

  const handleClose = () => navigate(-1);

  const formattedDate = user?.joinedAt
    ? new Date(user.joinedAt).toLocaleDateString()
    : user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "—";

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
            <div className="space-y-1">
              <h3 className="font-headline-md text-headline-md text-primary truncate">User Profile Details</h3>
            </div>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 hover:bg-surface-container-high transition-colors"
              type="button"
              onClick={handleClose}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="overflow-y-auto p-md sm:p-lg space-y-lg sm:space-y-xl flex-1">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-base text-stone-500">Загрузка...</p>
              </div>
            ) : error ? (
              <div className="p-lg bg-error-container text-error rounded-xl">{error}</div>
            ) : !user ? (
              <div className="p-lg bg-surface rounded-xl">Пользователь не найден.</div>
            ) : (
              <>
                <section className="bg-white rounded-xl border border-surface-container-highest p-md sm:p-lg shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-md sm:gap-lg items-center sm:items-start text-center sm:text-left">
                    

                    <div className="flex-1 space-y-md w-full">
                      <div>
                        <h4 className="font-headline-lg text-headline-lg text-primary tracking-tight">{user.name || user.email}</h4>
                        <p className="text-stone-500 font-body-md">{"Client"}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-md pt-md border-t border-surface-container text-left">
                        <div className="flex items-center gap-sm text-on-surface-variant overflow-hidden">
                          <span className="material-symbols-outlined text-secondary shrink-0">mail</span>
                          <span className="font-body-md truncate">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary shrink-0">phone_iphone</span>
                          <span className="font-body-md">{user.phoneNumber || "Не указано"}</span>
                        </div>
                        <div className="flex items-center gap-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
                          <span className="font-body-md">{user.address || "Не указано"}</span>
                        </div>
                        <div className="flex items-center gap-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary shrink-0">calendar_today</span>
                          <span className="font-body-md">{user.fullName || "Не указано"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </section>

                <section className="space-y-md">
                  <div className="flex items-center justify-between">
                    <h5 className="font-headline-md text-headline-md text-primary">Active Orders</h5>
                    
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
                        {orders.length > 0 ? (
                          orders.map((order) => (
                            <tr key={order.id || order.number} className="hover:bg-stone-50 transition-colors">
                              <td className="px-lg py-md font-label-sm text-primary">{order.number}</td>
                              <td className="px-lg py-md font-body-md text-stone-600">{order.date || order.createdAt || "—"}</td>
                              <td className="px-lg py-md text-center">
                                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-label-sm font-semibold">
                                  {order.status || "Unknown"}
                                </span>
                              </td>
                              <td className="px-lg py-md text-right font-price-label text-primary">
  {order.totalPrice != null
    ? Number(order.totalPrice).toFixed(2)
    : "—"}
</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="px-lg py-md text-center text-stone-500">
                              У этого пользователя пока нет заказов.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    <div className="sm:hidden divide-y divide-surface-container">
                      {orders.length > 0 ? (
                        orders.map((order) => (
                          <div key={order.id || order.orderNumber} className="p-md space-y-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-label-sm text-primary">{order.id || order.orderNumber}</p>
                                <p className="text-xs text-stone-500">{order.date || order.createdAt || "—"}</p>
                              </div>
                              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                                {order.status || "Unknown"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <span className="text-xs text-stone-500 uppercase tracking-widest font-label-sm">Total</span>
                              <span className="font-price-label text-primary text-lg">{order.total || order.amount || "—"}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-md text-center text-stone-500">У этого пользователя пока нет заказов.</div>
                      )}
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
                      <p className="font-headline-md text-primary">{orders.length}</p>
                    </div>
                  </div>
                  
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
