import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { orderService, restaurantService, userService, cardService, orderItemService, deliveryService, paymentService } from "../apis/api";

export default function CreatedOrderDetails() {

const { id } = useParams();

const [order, setOrder] = useState(null);

const [clientAddress, setClientAddress] = useState(null);
const [restaurantAddresses, setRestaurantAddresses] = useState([]);
const [selectedAddress, setSelectedAddress] = useState(null);

const [cards, setCards] = useState([]);
const [selectedCard, setSelectedCard] = useState(null);

const [shortDescription, setShortDescription] = useState("");
const [deliveryType, setDeliveryType] = useState("client"); 

const [byCard, setByCard] = useState(false);
const navigate = useNavigate();


const getImageUrl = (id) =>
  id ? `http://localhost:8080/catalog/images/${id}` : "/no-image.png";


const refetchOrder = async () => {
  if (!id) return;

  try {
    const [orderRes] = await Promise.all([
      orderService.getOrder(id),
    ]);

    setOrder(orderRes.data);
  } catch (e) {
    console.error(e);
  }
};

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

useEffect(() => {
  document.title = "Digital Bistro";

  loadReadyOrders();
  const init = async () => {
    try {

    const token = localStorage.getItem("token");
    if (!token) return;

    const payload = parseJwt(token);
    const userId = payload.id;

      const [
        orderRes,
        clientRes,
        restRes,
        cardsRes,
      ] = await Promise.all([
        orderService.getOrder(id),
        userService.getClientAddress(userId),
        restaurantService.getAll(0, 100), 
        cardService.getByClientId(userId),
      ]);

      setOrder(orderRes.data);

      setClientAddress(clientRes.data);
      setRestaurantAddresses(
  Array.isArray(restRes.data)
    ? restRes.data
    : restRes.data.content || []
);
      setSelectedAddress(clientRes.data);

      setCards(cardsRes.data);
      setSelectedCard(cardsRes.data?.[0] || null);

    } catch (e) {
      console.error(e);
    }
  };

  if (id) init();
}, [id]);


// ➕➖ обновление количества
const updateQuantity = async (foodId, quantity) => {
  if (quantity < 1) return;

  try {
    await orderItemService.updateItem({ orderId: id, foodId, quantity });
    refetchOrder();
  } catch (e) {
    console.error(e);
  }
};


// 🗑 удаление
const removeItem = async (
  foodId
) => {

  try {

    await orderItemService.deleteItem(
      id,
      foodId
    );

    setOrder((prev) => ({

      ...prev,

      list: (
        prev?.list || []
      ).filter(
        (item) =>
          item.foodId !== foodId
      )

    }));

    console.log(prev?.list);

  } catch (e) {

    console.error(e);

  }
};


const [isOrderResultOpen, setIsOrderResultOpen] = useState(false);
const [createdOrderNumber, setCreatedOrderNumber] = useState(null);
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [readyOrdersCount, setReadyOrdersCount] = useState(0);

   const token = localStorage.getItem("token");

  const clientId = token
    ? JSON.parse(atob(token.split(".")[1])).id
    : null;

  const loadReadyOrders = async () => {

  try {

    const response =
      await orderService.getOrdersByStatus(
        clientId,
        "isReady"
      );

    const orders =
      (response.data || []).filter(
        (order) =>
          order.isDeleted === false
      );

    setReadyOrdersCount(
      orders.length
    );

  } catch (error) {

    console.error(
      "LOAD READY ORDERS ERROR",
      error
    );

  }
};

const placeOrder = async () => {
  try {

    const byCard = !!selectedCard;

    let delivery = null;

    try {
      delivery = await deliveryService.getByOrderId(id).data;
    } catch (e) {
      delivery = null;
    }

    if (!delivery) {

      await deliveryService.create(id, {
        orderId: id,

        address:
          deliveryType === "client"
            ? clientAddress
            : null,

        restaurantId:
          deliveryType === "restaurant"
            ? selectedAddress?.id
            : null,

        byCard,
      });
    }

    let payment = null;
    let order = null;

    if (byCard) {

      try {
        order = await orderService.getOrder(id);
        payment = order.paymentId;
      } catch (e) {
        payment = null;
      }

      if (!payment) {

        await paymentService.approve(
          selectedCard?.id,
          id
        );
      }
    }


    const updatedOrder =
  await orderService.updateOrder(id, {
    paymentId: selectedCard?.id || null,

    delivery: {
      address:
        deliveryType === "client"
          ? clientAddress
          : null,

      restaurantId:
        deliveryType === "restaurant"
          ? selectedAddress?.id
          : null,

      byCard: !!selectedCard,
    },

    shortDescription,
  });

console.log(updatedOrder);
    
    setCreatedOrderNumber(
  updatedOrder?.data?.number ??
  updatedOrder?.number ??
  id
);

setIsOrderResultOpen(true);

  } catch (e) {
    console.error(e);
  }
};

  const totalQuantity =
    order?.list?.reduce(
      (sum, item) => sum + item.quantity,
      0
    ) || 0;

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);

    document.body.style.overflow = !isDrawerOpen
      ? "hidden"
      : "";
  };

  const openDetails = () => {
  navigate("/client-catalog");
};

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="bg-[#FDFCF8] text-[#1B3022] font-epilogue tracking-tight border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors lg:hidden"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <div onClick={openDetails} className="text-xl md:text-2xl font-bold text-[#1B3022]">Bistro Provence</div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          
         <div className="flex gap-2 md:gap-4">
  <button
  className="relative p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200"
>
  <span className="material-symbols-outlined">shopping_cart</span>

 {totalQuantity > 0 && (
  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
    {totalQuantity}
  </span>
)}
</button>

  <button 
  onClick={() => {
    navigate(`/user-profile`);
  }}
  className="relative p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200">

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
      <main className="max-w-screen-2xl mx-auto px-8 md:px-12 py-xl">
      <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Left Column: Checkout Details */}
      <div className="flex-1 space-y-xl">
      {/* Section: Shopping Basket */}
      <section>
      <div className="flex items-center justify-between mb-lg">
      <h1 className="font-headline-lg text-headline-lg text-primary">Shopping Basket</h1>
      <span className="font-label-sm text-label-sm bg-surface-container px-4 py-2 rounded-full text-on-surface-variant">{order?.list?.length || 0} ITEMS</span>
      </div>
      <div className="space-y-md">
      {(order?.list ?? []).map((item) => (
    <div
      key={item.id}
      className="bg-surface-container-lowest p-md rounded-xl flex items-center gap-lg shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100"
    >
      {/* IMAGE */}
      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
        <img
          alt={`Food ${item.foodId}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={getImageUrl(item.foodId)}
          onError={(e) => {
            e.target.src = "/no-image.png";
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">
              Food #{item.foodId}
            </h3>
            <p className="font-body-md text-on-surface-variant mt-1">
              Item ID: {item.id}
            </p>
          </div>

          <span className="font-price-label text-price-label text-primary">
            ${Number(item.price).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between mt-lg">
          {/* QUANTITY (UI пока без логики) */}
          <div className="flex items-center bg-surface-container rounded-lg p-1">
  {/* MINUS */}
  <button
    onClick={() => updateQuantity(item.foodId, item.quantity - 1)}
    className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors"
  >
    <span
      className="material-symbols-outlined text-secondary"
      style={{ fontVariationSettings: "'wght' 600" }}
    >
      remove
    </span>
  </button>

  <span className="font-price-label text-price-label px-4 text-on-surface">
    {item.quantity}
  </span>

  {/* PLUS */}
  <button
    onClick={() => updateQuantity(item.foodId, item.quantity + 1)}
    className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded transition-colors"
  >
    <span
      className="material-symbols-outlined text-secondary"
      style={{ fontVariationSettings: "'wght' 600" }}
    >
      add
    </span>
  </button>
</div>

          {/* REMOVE (пока без API) */}
          <button className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 font-label-sm" onClick={() => removeItem(item.foodId)}>
            <span className="material-symbols-outlined text-sm">
              delete
            </span>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  ))}
      </div>
      </section>
      
      {/* Section: Delivery Address */}
<section className="space-y-lg">
  <div className="flex items-center justify-between">
    <h2 className="font-headline-lg text-headline-lg text-primary">
      Delivery Address
    </h2>
    <button className="text-secondary font-label-sm flex items-center gap-2 hover:underline underline-offset-4">
      <span className="material-symbols-outlined text-sm">
        add_location
      </span>{" "}
      ADD NEW
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">

    <div onClick={() => {
    setDeliveryType("client");
    setSelectedAddress(clientAddress);
  }}  className={`p-lg rounded-xl flex items-start gap-md transition-colors cursor-pointer relative ${
    deliveryType === "client"
      ? "bg-surface-container border-2 border-primary-container"
      : "bg-surface-container-lowest border border-stone-200 hover:border-primary-container"
  }`}>
      <span className="material-symbols-outlined text-primary" data-weight="fill">
        home
      </span>

      <div>
        <h4 className="font-headline-md text-body-lg font-bold text-primary">
          Primary Residence
        </h4>

        <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
          {clientAddress
  ? clientAddress || clientAddress
  : "Loading..."}
        </p>
      </div>

      {deliveryType === "client" && (
  <span className="absolute top-4 right-4 material-symbols-outlined text-primary">
    check_circle
  </span>
)}
    </div>


    <div
  onClick={() => setDeliveryType("restaurant")}
  className={`p-lg rounded-xl flex items-start gap-md transition-colors cursor-pointer relative ${
    deliveryType === "restaurant"
      ? "bg-surface-container border-2 border-primary-container"
      : "bg-surface-container-lowest border border-stone-200 hover:border-primary-container"
  }`}
>
  <span className="material-symbols-outlined text-on-surface-variant">
    work
  </span>

  <div className="w-full">
    <h4 className="font-headline-md text-body-lg font-bold text-primary">
      Office
    </h4>

    <div className="mt-2 relative w-full">
      <select
        className="appearance-none w-full bg-surface-container-low border border-outline-variant text-on-surface-variant py-2 px-4 pr-8 rounded-lg font-body-md focus:outline-none focus:border-primary-container cursor-pointer"
        onChange={(e) => {
          const selected = restaurantAddresses.find(
            (r) => r.id === Number(e.target.value)
          );
          setSelectedAddress(selected);
          setDeliveryType("restaurant");
        }}
      >
        <option value="">Select restaurant</option>

        {Array.isArray(restaurantAddresses) &&
          restaurantAddresses.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name} — {r.address}
            </option>
          ))}
      </select>
    </div>
  </div>

  {deliveryType === "restaurant" && (
    <span className="absolute top-4 right-4 material-symbols-outlined text-primary">
      check_circle
    </span>
  )}
</div>

  </div>
</section>
      
     {/* Section: Payment Method */}
<section className="space-y-lg">
  <div className="flex items-center justify-between">
    <h2 className="font-headline-lg text-headline-lg text-primary">
      Payment Method
    </h2>

    <button className="text-secondary font-label-sm flex items-center gap-2 hover:underline underline-offset-4">
      <span className="material-symbols-outlined text-sm">credit_card</span>
      ADD CARD
    </button>
  </div>

  <div className="space-y-md">

    {/* Cash Payment Block */}
    <div
       onClick={() => {
    setSelectedCard(null);
    setByCard(false);
  }}
      className={`p-lg rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
        selectedCard === null
          ? "bg-surface-container border-2 border-primary-container"
          : "bg-surface-container-lowest border border-stone-200 hover:border-primary-container"
      }`}
    >
      <div className="flex items-center gap-lg">
        <div className="bg-white p-2 rounded border border-stone-100">
          <span
            className={`material-symbols-outlined ${
              selectedCard === null ? "text-primary" : "text-stone-400"
            }`}
          >
            payments
          </span>
        </div>

        <div>
          <p className="font-body-lg font-bold text-primary">
            Payment in Cash
          </p>

          <p className="font-label-sm text-on-surface-variant uppercase mt-1">
            Pay directly to courier
          </p>
        </div>
      </div>

      <span
        className={`material-symbols-outlined ${
          selectedCard === null ? "text-primary" : "text-stone-300"
        }`}
      >
        {selectedCard === null
          ? "radio_button_checked"
          : "radio_button_unchecked"}
      </span>
    </div>

    {Array.isArray(cards) &&
      cards.map((card) => {
        const isSelected = selectedCard?.id === card.id;

        return (
          <div
            key={card.id}
            onClick={() => {
              setSelectedCard(card);
              setByCard(true);
            }}
            className={`p-lg rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
              isSelected
                ? "bg-surface-container border-2 border-primary-container"
                : "bg-surface-container-lowest border border-stone-200 hover:border-primary-container"
            }`}
          >
            <div className="flex items-center gap-lg">
              <div className="bg-white p-2 rounded border border-stone-100">
                <span
                  className={`material-symbols-outlined ${
                    isSelected ? "text-primary" : "text-stone-400"
                  }`}
                >
                  payments
                </span>
              </div>

              <div>
                <p className="font-body-lg font-bold text-primary">
                  {card.brand || "Card"} ending in{" "}
                  {card.last4 || card.number?.slice(-4)}
                </p>

                <p className="font-label-sm text-on-surface-variant uppercase mt-1">
                  Expires {card.expMonth}/{card.expYear}
                </p>
              </div>
            </div>

            <span
              className={`material-symbols-outlined ${
                isSelected ? "text-primary" : "text-stone-300"
              }`}
            >
              {isSelected
                ? "radio_button_checked"
                : "radio_button_unchecked"}
            </span>
          </div>
        );
      })}
  </div>
</section>
      </div>
      {/* Right Column: Order Summary Sidebar */}
      <aside className="lg:w-[400px]">
      <div className="bg-surface-container p-lg md:p-xl rounded-xl sticky top-32 shadow-[0_10px_30px_rgba(27,48,34,0.05)]">
      <h2 className="font-headline-lg text-headline-lg text-primary border-b border-stone-200/50 pb-lg mb-lg">Order Summary</h2>
      <div className="space-y-md">
      
      <div class="pt-md">
<label class="block font-label-sm text-on-surface-variant mb-2 uppercase" for="order-instructions">Special Instructions (optional)</label>
<input
  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-3 text-body-md focus:outline-none focus:border-primary transition-colors placeholder:text-stone-400"
  id="order-instructions"
  name="order-instructions"
  placeholder="e.g., allergies, gate code, extra napkins"
  type="text"
  value={shortDescription}
  onChange={(e) => setShortDescription(e.target.value)}
/>
</div>
      <div className="pt-lg mt-lg border-t border-stone-200/50">
      <div className="flex justify-between items-center mb-xl">
      <span className="font-headline-md text-headline-md text-primary">Total</span>
      <span className="font-display-xl text-display-xl text-primary">${order?.totalPrice?.toFixed(2) || "0.00"}</span>
      </div>
      <button className="w-full bg-primary text-on-primary py-lg rounded-lg font-headline-md hover:opacity-90 transition-opacity mb-lg shadow-lg" onClick={placeOrder}>
                                      Place Order
                                  </button>
      <p className="font-label-sm text-on-surface-variant text-center px-lg">
                                      By clicking 'Place Order', you agree to our Terms of Service and Privacy Policy.
                                  </p>
      </div>
      </div>
      {/* Dietary Info Tip */}
      <div className="mt-xl bg-primary-container p-md rounded-lg flex gap-md items-start">
      <span className="material-symbols-outlined text-on-primary-container">info</span>
      <p className="font-label-sm text-on-primary-container">Our ingredients are sourced from organic local farms to ensure the highest quality experience.</p>
      </div>
      </div>
      </aside>
      </div>
      </main>
      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 full-width mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-12 max-w-screen-2xl mx-auto space-y-6 md:space-y-0">
      <div className="text-xl font-bold text-emerald-900 dark:text-emerald-400 font-['Epilogue']">LUXE BISTRO</div>
      <div className="flex gap-8">
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Privacy</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Terms</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Accessibility</a>
      <a className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-300 underline-offset-4 hover:underline transition-opacity duration-300" href="#">Sustainability</a>
      </div>
      <div className="font-['Epilogue'] text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500">
                      © 2024 LUXE BISTRO. CRAFTED FOR THE DISCERNING PALATE.
                  </div>
      </div>
      </footer>



      {isOrderResultOpen && (
  <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary-container/40 backdrop-blur-sm p-4">
    <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative border border-stone-200 dark:border-stone-800">

      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

      <div className="relative p-8 flex flex-col items-center text-center">

        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-500 text-[40px]">
            check_circle
          </span>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-3 leading-tight">
          Order Successfully Placed!
        </h2>

        <p className="text-on-surface-variant mb-8">
          Your meal is being prepared with care.
          <br />

          {createdOrderNumber && (
            <span className="font-bold text-primary">
              Order number #{createdOrderNumber}
            </span>
          )}
        </p>

        <div className="w-full h-32 mb-8 relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh6oOYum8z9AFLxnhf4IusYjqxdXdFc7gekVw6xyi_1e9kc2iofqX3wa7UsFAeKR7nyPjSdTcdHz3TEWkdfU_0apHGRx54nAS9SrkHml9zc7hvV8ATHSwXxbKQr0nDI3KggGYpNBga6ZpEiFBvmu063poJUS4xw7-S3oHQoSMLBIoCVCworz6j0i6_HsBqpMV5EmmO-lMeSxe-4BI4XWwNCPkRVxsrNzKuIxOS-v84YU5J2IO2c_XFeWijTZ6JZchTCziWiNiQPkA"
            alt="Chef plating a gourmet dish"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="w-full space-y-4">

          <button
  onClick={() => {

    setIsOrderResultOpen(false);

    window.location.href =
      "/user-profile";

  }}
  className="
    w-full bg-primary text-on-primary
    font-semibold py-4 rounded-xl
    hover:opacity-90
    active:scale-[0.98]
    transition-all flex
    items-center justify-center gap-2
  "
>

  <span
    className="
      material-symbols-outlined
    "
  >
    person
  </span>

  User Profile

</button>

<button
  onClick={() => {

    setIsOrderResultOpen(false);

    window.location.href =
      "/client-catalog";

  }}
  className="
    w-full bg-stone-100
    dark:bg-stone-800
    text-stone-900
    dark:text-white
    font-semibold py-4
    rounded-xl hover:opacity-90
    active:scale-[0.98]
    transition-all
  "
>

  Back to Catalog

</button>

        </div>
      </div>
    </div>
  </div>
)}




    </div>
  );
}
