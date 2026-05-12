import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { orderService, cardService, userService, foodService, paymentService, restaurantService } from "../apis/api";

import AddNewCard from "./AddNewCard";
import PersonalInfoUser from "./PersonalInfoUser";

export default function Profile() {

  useEffect(() => {
  document.title = "Account - The Digital Bistro";
}, []);

const navigate = useNavigate();

const [user, setUser] = useState(null);
const [cards, setCards] = useState([]);
const [orders, setOrders] = useState([]);
const [order, setOrder] = useState(null);

const [selectedOrder, setSelectedOrder] =
  useState(null);

const [foodsMap, setFoodsMap] = useState({});
const [paymentInfo, setPaymentInfo] =
  useState(null);

const [deliveryAddress, setDeliveryAddress] =
  useState("");

const [orderId, setOrderId] = useState(null);

const [readyOrdersCount, setReadyOrdersCount] =
  useState(0);

const [isModalOpen, setIsModalOpen] =
  useState(false);

const [isCardModalOpen, setIsCardModalOpen] =
  useState(false);

const [isEditOpen, setIsEditOpen] =
  useState(false);

const parseJwt = (token) => {
  try {
    return JSON.parse(
      atob(token.split(".")[1])
    );
  } catch (error) {
    console.error("JWT PARSE ERROR", error);
    return null;
  }
};

const token = localStorage.getItem("token");

const clientId = token
  ? parseJwt(token)?.id
  : null;

const getImageUrl = (id) =>
  id
    ? `http://localhost:8080/catalog/images/${id}`
    : "/no-image.png";

const totalQuantity =
  order?.list?.reduce(
    (sum, item) => sum + item.quantity,
    0
  ) || 0;

const openDetails = () => {
  navigate("/client-catalog");
};

const closeOrderModal = () => {
  setIsModalOpen(false);
  setSelectedOrder(null);
};

const openAddCard = () => {
  navigate("/add-new-card");
};

const handleNotificationReceived =
  async (orderId) => {
    try {
      await orderService.setIsDeleted(
        orderId,
        true
      );

      setOrders((prev) =>
        prev.filter(
          (order) => order.id !== orderId
        )
      );

      setReadyOrdersCount((prev) =>
      prev > 0 ? prev - 1 : 0
    );

      setSelectedOrder(null);

    } catch (error) {
      console.error(
        "SET IS DELETED ERROR",
        error
      );
    }
  };

const loadUser = async () => {
  if (!clientId) return;

  try {
    const response =
      await userService.getInfoById(
        clientId
      );

    setUser(response.data);

  } catch (error) {
    console.error(
      "LOAD USER ERROR",
      error
    );
  }
};

const loadCards = async () => {
  if (!clientId) return;

  try {
    const response =
      await cardService.getByClientId(
        clientId
      );

    setCards(response.data);

  } catch (error) {
    console.error(
      "LOAD CARDS ERROR",
      error
    );
  }
};

const loadOrders = async () => {
  if (!clientId) return;

  try {
    const response =
      await orderService.getByClientId(
        clientId
      );

    const filteredOrders =
      (response.data || []).filter(
        (order) => !order.isDeleted
      );

    setOrders(filteredOrders);

  } catch (error) {
    console.error(
      "LOAD ORDERS ERROR",
      error
    );
  }
};

const loadReadyOrders = async () => {
  if (!clientId) return;

  try {
    const response =
      await orderService.getOrdersByStatus(
        clientId,
        "isReady"
      );

    const filteredOrders =
      (response.data || []).filter(
        (order) => !order.isDeleted
      );

    setReadyOrdersCount(
      filteredOrders.length
    );

  } catch (error) {
    console.error(
      "LOAD READY ORDERS ERROR",
      error
    );
  }
};

const initOrder = async () => {
  if (!clientId) return;

  try {
    const response =
      await orderService.getNonCompletedByClient(
        clientId
      );

    if (!response.data) {
      setOrder(null);
      setOrderId(null);

      localStorage.removeItem("orderId");

      return;
    }

    const currentOrderId =
      response.data.id;

    setOrderId(currentOrderId);

    localStorage.setItem(
      "orderId",
      currentOrderId
    );

    const orderResponse =
      await orderService.getOrder(
        currentOrderId
      );

    setOrder(orderResponse.data);

  } catch (error) {
    console.error(
      "INIT ORDER ERROR",
      error
    );

    setOrder(null);
    setOrderId(null);

    localStorage.removeItem("orderId");
  }
};

const deleteCard = async (cardId) => {
  try {
    await cardService.delete(cardId);

    setCards((prev) =>
      prev.filter(
        (card) => card.id !== cardId
      )
    );

  } catch (error) {
    console.error(
      "DELETE CARD ERROR",
      error
    );
  }
};

const openOrderModal = async (orderId) => {
  try {
    const response =
      await orderService.getOrder(orderId);

    const orderData = response.data;

    setSelectedOrder(orderData);

    const foods = {};

    await Promise.all(
      orderData.list.map(async (item) => {
        try {
          const foodResponse =
            await foodService.getFoodById(
              item.foodId
            );

          foods[item.foodId] =
            foodResponse.data;

        } catch (error) {
          console.error(
            `FOOD ${item.foodId} ERROR`,
            error
          );
        }
      })
    );

    setFoodsMap(foods);

    if (orderData.paymentId) {
      try {
        const paymentResponse =
          await paymentService.getById(
            orderData.paymentId
          );

        const cardResponse =
          await cardService.getById(
            paymentResponse.data.cardId
          );

        const last4 =
          cardResponse.data.number.slice(-4);

        setPaymentInfo(
          `**** **** **** ${last4}`
        );

      } catch (error) {
        console.error(
          "PAYMENT LOAD ERROR",
          error
        );

        setPaymentInfo("Card");
      }

    } else {
      setPaymentInfo("Payment in cash");
    }

    if (orderData.delivery?.address) {

      setDeliveryAddress(
        orderData.delivery.address
      );

    } else if (
      orderData.delivery?.restaurantId
    ) {

      try {
        const restaurantResponse =
          await restaurantService.getById(
            orderData.delivery.restaurantId
          );

        setDeliveryAddress(
          restaurantResponse.data.address
        );

      } catch (error) {
        console.error(
          "RESTAURANT ERROR",
          error
        );

        setDeliveryAddress(
          "Address unavailable"
        );
      }

    } else {

      setDeliveryAddress(
        "No address provided"
      );
    }

    setIsModalOpen(true);

  } catch (error) {
    console.error(
      "ORDER DETAILS ERROR",
      error
    );
  }
};

useEffect(() => {
  if (!clientId) return;

  const loadData = async () => {
    await Promise.all([
      loadUser(),
      loadCards(),
      loadOrders(),
      loadReadyOrders(),
      initOrder(),
    ]);
  };

  loadData();

}, [clientId]);
    

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <header className="bg-[#FDFCF8] text-[#1B3022] font-epilogue tracking-tight border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors lg:hidden"
            onClick={openDetails}
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <div onClick={openDetails} className="text-xl md:text-2xl font-bold text-[#1B3022]" >Bistro Provence</div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
         
         <div className="flex gap-2 md:gap-4">
  <button
  onClick={() => {
    const savedOrderId = orderId || localStorage.getItem("orderId");

    if (!savedOrderId) {
      console.warn("Order not found");
      return;
    }

    navigate(`/created-order-details/${savedOrderId}`);
  }}
  className="relative p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200"
>
  <span className="material-symbols-outlined">shopping_cart</span>

 {totalQuantity > 0 && (
  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
    {totalQuantity}
  </span>
)}
</button>

  <button  onClick={() => {
    navigate(`/user-profile`);
  }} className="relative p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200">

  <span className="material-symbols-outlined">
    account_circle
  </span>

    {readyOrdersCount > 0 && (
    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
      {readyOrdersCount}
    </span>
  )}

</button>
</div>
        </div>
      </header>
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
      
      <div className="md:w-2/3 space-y-12">
      <section>
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-primary"  >Personal Details</h3>
      <button
  type="button"
  className="text-secondary font-semibold hover:underline decoration-2 underline-offset-4"
  onClick={() => setIsEditOpen(true)}
>
  Edit Details
</button>
{user && (
        <PersonalInfoUser
  isOpen={isEditOpen}
  onClose={() => setIsEditOpen(false)}
  clientId={user.id}
  onSuccess={loadUser}
/>
      )}
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
      <p className="font-body-lg text-on-surface font-medium"  >{user?.phoneNumber || "No phone"}</p>
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
      {order.number}
    </td>

    <td className="px-8 py-6 text-on-surface-variant">
      {new Date(order.createdAt).toLocaleDateString()}
    </td>

    <td className="px-8 py-6">
      <span
        className={`inline-block w-2 h-2 rounded-full mr-2 ${
          order.status ? "bg-green-500" : "bg-yellow-500"
        }`}
      ></span>

      {order.status}
    </td>

     <td className="px-8 py-6 font-price-label text-sm">
  {order?.totalPrice != null
    ? `$${Number(order.totalPrice).toFixed(2)}`
    : "$0.00"}
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


      {isModalOpen && selectedOrder && (
  <div className="fixed inset-0 z-[60] bg-tertiary/40 backdrop-blur-sm flex items-center justify-center p-md">
    
    {/* MODAL */}
    <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-[0px_20px_50px_rgba(27,48,34,0.15)] flex flex-col max-h-[90vh] overflow-hidden border border-outline-variant/30">

      {/* HEADER */}
      <div className="p-lg border-b border-surface-container-highest flex justify-between items-center">
        <div>
          <span className="font-label-sm text-secondary tracking-widest uppercase mb-xs block">
            Order #{selectedOrder.number}
          </span>

          <h2 className="font-headline-md text-primary">
            Order Details
          </h2>
        </div>

        <button
          onClick={closeOrderModal}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
      </div>

      {/* CONTENT */}
      <div className="overflow-y-auto p-lg space-y-xl">

        {/* STATUS */}
        <div className="flex flex-wrap items-center justify-between gap-md">
          <div className="flex items-center gap-sm">

            <div
              className={`w-3 h-3 rounded-full ${
                selectedOrder.status
                  ? "bg-emerald-600"
                  : "bg-yellow-500"
              }`}
            ></div>

            <span
              className={`font-body-md font-semibold ${
                selectedOrder.status
                  ? "text-emerald-900"
                  : "text-yellow-700"
              }`}
            >
              {selectedOrder.status}
            </span>

            <span className="text-on-surface-variant px-sm border-l border-outline-variant">
              {new Date(
                selectedOrder.createdAt
              ).toLocaleString()}
            </span>
          </div>
        </div>

        {/* ITEMS */}
        <div className="space-y-lg">
          <h3 className="font-headline-md text-primary text-lg">
            Menu Items
          </h3>

          <div className="divide-y divide-surface-container-highest">

            {selectedOrder.list?.map((item) => {

    const food = foodsMap[item.foodId];

    return (
      <div
        key={item.id}
        className="py-md flex gap-lg items-center"
      >

        {/* IMAGE */}
        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-stone-100">
          <img
            className="w-full h-full object-cover"
            src={getImageUrl(item.foodId)}
            alt={food?.name || "Food image"}
          />
        </div>

        {/* INFO */}
        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div>
              <h4 className="font-body-lg font-bold text-primary">
                {food?.name || "Loading..."}
              </h4>

              {food?.description && (
                <p className="text-on-surface-variant font-body-md text-sm mb-sm">
                  {food.description}
                </p>
              )}
            </div>

           <span className="font-price-label text-primary">
  {item?.price != null
    ? `$${Number(item.price).toFixed(2)}`
    : "$0.00"}
</span>
          </div>

          <div className="flex items-center gap-md mt-sm">
            <span className="font-label-sm text-secondary bg-secondary/5 px-2 py-0.5 rounded">
              Qty: {item.quantity}
            </span>
          </div>
        </div>
      </div>
    );
  })}
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-surface-container-low rounded-xl p-lg">
         

          <div className="pt-md mt-md border-t border-outline-variant/20 flex justify-between items-end">
              <span className="font-headline-md text-primary">
                Total Amount
              </span>

              
               <span className="font-display-xl text-primary text-3xl">
  {selectedOrder?.totalPrice != null
    ? `$${Number(selectedOrder.totalPrice).toFixed(2)}`
    : "$0.00"}
</span>
            </div>
        </div>

        {/* ADDRESS + PAYMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

  {/* ADDRESS */}
  <div>
    <span className="font-label-sm text-secondary tracking-widest uppercase mb-sm block">
      Delivery Address
    </span>

    <p className="font-body-md text-on-surface">
      {deliveryAddress}
    </p>
  </div>

  {/* PAYMENT */}
  <div>
    <span className="font-label-sm text-secondary tracking-widest uppercase mb-sm block">
      Payment Method
    </span>

    <div className="flex items-center gap-sm">

      <span className="material-symbols-outlined text-on-surface-variant">
        {selectedOrder.paymentId
          ? "credit_card"
          : "payments"}
      </span>

      <p className="font-body-md text-on-surface">
        {paymentInfo}
      </p>
    </div>
  </div>
</div>
      </div>


     <div className="p-lg border-t border-surface-container-highest flex gap-md">

 <button
  type="button"
  onClick={() =>
    handleNotificationReceived(
      selectedOrder.id
    )
  }
  disabled={
    selectedOrder.status !== "isReady"
  }
  className={`
    flex-1 py-md font-epilogue font-bold
    rounded-lg transition-all flex items-center
    justify-center gap-sm
    ${
      selectedOrder.status === "isReady"
        ? `
          bg-secondary text-on-secondary
          hover:opacity-90
          active:scale-[0.98]
        `
        : `
          bg-gray-300 text-gray-500
          cursor-not-allowed opacity-60
        `
    }
  `}
>

  <span
    className="material-symbols-outlined text-sm"
    data-icon="refresh"
  >
    refresh
  </span>

  Notification received

</button>

</div>

      
    </div>
  </div>
)}
    </div>
  );
}
