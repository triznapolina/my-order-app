import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { orderService, cardService, userService } from "../apis/api";


import AddNewCard from "./AddNewCard";

export default function Profile() {
  useEffect(() => {
    document.title = 'Account - The Digital Bistro';
  }, []);


const [user, setUser] = useState(null);

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

const [cards, setCards] = useState([]);
const [orders, setOrders] = useState([]);
const [isCardModalOpen, setIsCardModalOpen] = useState(false);


useEffect(() => {
  const loadData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const payload = parseJwt(token);
    const userId = payload.id;

    try {
      const userRes = await userService.getInfoById(userId);
      setUser(userRes.data);
    } catch (e) {
      console.error("USER ERROR", e);
    }

    try {
      const ordersRes = await orderService.getByClientId(userId);
      setOrders(ordersRes.data);
    } catch (e) {
      console.error("ORDERS ERROR", e);
    }

    try {
      const cardsRes = await cardService.getByClientId(userId);
      setCards(cardsRes.data);
    } catch (e) {
      console.error("CARDS ERROR", e);
    }
  };

  loadData();
}, []);

const navigate = useNavigate();

const openOrderModal = (orderId) => {
  // например через router
  navigate(`/any-order-details/${orderId}`);
};

const openEditModal = () => {
  navigate("/personal-info-user");
};

const openAddCard = () => {
  navigate("/add-new-card");
};

const deleteCard = async (cardId) => {
  try {
    await cardService.delete(cardId);
    setCards(prev => prev.filter(c => c.id !== cardId));
  } catch (e) {
    console.error("DELETE ERROR", e);
  }
};

const loadCards = async (userId) => {
  try {
    const res = await cardService.getByClientId(userId);
    setCards(res.data);
  } catch (e) {
    console.error("LOAD CARDS ERROR", e);
  }
};

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <nav className="bg-[#FDFCFB] dark:bg-stone-950 text-[#1B3022] dark:text-stone-200 font-epilogue font-medium tracking-tight fixed top-0 w-full z-50 border-b border-stone-200/60 dark:border-stone-800 shadow-[0px_4px_20px_rgba(27,48,34,0.02)]">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-black tracking-tighter text-[#1B3022] dark:text-stone-100"  >The Digital Bistro</div>
      <div className="hidden md:flex gap-8 items-center h-full">
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#"  >Menu</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#"  >Reservations</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#"  >Private Dining</a>
      <a className="text-stone-500 dark:text-stone-400 hover:text-[#1B3022] dark:hover:text-stone-200 h-full flex items-center transition-all duration-300" href="#"  >Our Story</a>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-stone-50 dark:hover:bg-stone-900 transition-all duration-300 rounded-full active:scale-[0.98]"  >
      <span className="material-symbols-outlined" data-icon="shopping_bag"  >shopping_bag</span>
      </button>
      <button className="p-2 text-[#1B3022] dark:text-white border-b-2 border-[#1B3022] dark:border-stone-200 transition-all duration-300 active:scale-[0.98]"  >
      <span className="material-symbols-outlined" data-icon="account_circle" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
      </button>
      </div>
      </div>
      </nav>
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-12">
      <aside className="md:w-1/3 space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)] text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
      
      </div>
      <h2 className="font-headline-lg text-primary mb-1" >{user?.fullName || "No name"}</h2>
      <div className="grid grid-cols-2 gap-4 border-t border-surface-variant pt-6 mt-4">
      
      </div>
      </div>
      
      </aside>
      <div className="md:w-2/3 space-y-12">
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary"  >Personal Details</h3>
      <button className="text-secondary font-semibold hover:underline decoration-2 underline-offset-4" onClick={openEditModal}  >Edit Details</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)]">
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase"  >Full Name</label>
      <p className="font-body-lg text-on-surface font-medium"  >{user?.fullName || "No name"}</p>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase"  >Email Address</label>
      <p className="font-body-lg text-on-surface font-medium"  >{user?.email || "No email"}</p>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase"  >Telephone (Primary)</label>
      <div className="flex items-center gap-2">
      <p className="font-body-lg text-on-surface font-medium"  >{user?.phone || "No phone"}</p>
      <span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"  >Verified</span>
      </div>
      </div>
      <div className="space-y-1">
      <label className="text-label-sm text-on-surface-variant uppercase"  >Default Delivery Address</label>
      <p className="font-body-lg text-on-surface font-medium"  >{user?.address || "No address"}</p>
      </div>
      </div>
      </section>
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary"  >Order History</h3>
      
      </div>
      <div className="bg-white rounded-lg shadow-[0px_10px_30px_rgba(27,48,34,0.05)] overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low text-label-sm text-on-surface-variant uppercase">
      <th className="px-8 py-4 font-semibold"  >Order #</th>
      <th className="px-8 py-4 font-semibold"  >Date</th>
      <th className="px-8 py-4 font-semibold"  >Status</th>
      <th className="px-8 py-4 font-semibold"  >Total</th>
      <th className="px-8 py-4 font-semibold text-right"  >Action</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-surface-variant">
  {orders.map((order) => (
    <tr
      key={order.id}
      className="hover:bg-surface-bright transition-colors"
    >
      <td className="px-8 py-6 font-medium text-primary">
        {order.id}
      </td>

      <td className="px-8 py-6 text-on-surface-variant">
        {new Date(order.createdAt).toLocaleDateString()}
      </td>

      <td className="px-8 py-6">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        {order.isCompleted ? "Completed" : "In Progress"}
      </td>

      <td className="px-8 py-6 font-price-label text-sm">
        ${order.totalPrice || 0}
      </td>

      <td className="px-8 py-6 text-right">
        <button
          onClick={() => openOrderModal(order.id)}
          className="text-secondary font-semibold"
        >
          Details
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
      </div>
      </div>
      </section>
      
      
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary"  >Payment Methods</h3>
      <button className="bg-primary text-white px-4 py-2 rounded-lg text-label-sm flex items-center gap-2"  onClick={() => setIsCardModalOpen(true)} >
      <span className="material-symbols-outlined text-[16px]" data-icon="add"  >add</span>
                                  Add New Card
                              </button>
                              
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       {user && (
  <AddNewCard
    isOpen={isCardModalOpen}
    onClose={() => setIsCardModalOpen(false)}
    clientId={user.id}
    onSuccess={() => loadCards(user.id)}
  />
)}

  {cards.map((card) => (
    <div
      key={card.id}
      className="bg-white p-6 rounded-lg border border-surface-variant flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-8 bg-surface-container rounded-sm flex items-center justify-center">
          💳
        </div>

        <div>
          <p className="font-medium text-primary">
            **** **** **** {card.number.slice(-4)}
          </p>
          <p className="text-xs text-on-surface-variant">
            Expires {card.expirationDate}
          </p>
        </div>
      </div>

      <button
        onClick={() => deleteCard(card.id)}
        className="text-on-surface-variant hover:text-error transition-colors"
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  ))}
</div>
      </section>
      </div>
      </div>
      </main>
      <footer className="bg-[#FDFCFB] dark:bg-stone-950 text-[#1B3022] dark:text-stone-200 font-epilogue text-sm uppercase tracking-widest w-full border-t border-stone-200 dark:border-stone-800 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-[#1B3022] dark:text-stone-100"  >The Digital Bistro</div>
      <div className="flex flex-wrap justify-center gap-8">
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#"  >Privacy Policy</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#"  >Terms of Service</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#"  >Sustainability</a>
      <a className="text-stone-400 dark:text-stone-500 hover:text-[#1B3022] dark:hover:text-stone-200 transition-colors duration-200 hover:underline decoration-[#E2725B] underline-offset-4" href="#"  >Careers</a>
      </div>
      <p className="text-[10px] text-stone-400 text-center md:text-right"  >© 2024 The Digital Bistro. <br className="md:hidden"/>Crafted for the discerning palate.</p>
      </div>
      </footer>
    </div>
  );
}
