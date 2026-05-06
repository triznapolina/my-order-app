import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { orderService, restaurantService, userService, cardService, orderItemService } from "../apis/api";

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

const getImageUrl = (id) =>
  id ? `http://localhost:8080/catalog/images/${id}` : "/no-image.png";


// 🔁 единый рефетч заказа + инфы
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

// 🚀 первый загрузчик (ВСЁ сразу)
useEffect(() => {
  document.title = "Digital Bistro";

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
const removeItem = async (foodId) => {
  try {
    await orderItemService.deleteItem(foodId);
    refetchOrder();
  } catch (e) {
    console.error(e);
  }
};


// 🛒 оформление заказа
const placeOrder = async () => {
  try {
    if (deliveryType === "client") {
      await orderService.createDelivery({
        orderId: id,
        deliveryAddress: clientAddress,
        restaurantId: null,
      });
    } else {
      await orderService.createDelivery({
        orderId: id,
        deliveryAddress: null,
        restaurantId: selectedAddress?.id,
      });
    }

    await orderService.updateOrder({
      orderId: id,
      shortDescription,
    });

    alert("Order placed!");
  } catch (e) {
    console.error(e);
  }
};


  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* TopAppBar */}
      <header className="bg-[#FDFCF0] dark:bg-stone-950 border-b border-stone-200/50 dark:border-stone-800 shadow-[0_2px_15px_-3px_rgba(27,48,34,0.05)] docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 md:px-12 h-24 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-black text-emerald-900 dark:text-emerald-400 tracking-widest font-['Epilogue']">LUXE BISTRO</div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Menu</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Reservations</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Our Story</a>
      <a className="font-['Epilogue'] tracking-tight text-sm uppercase font-semibold text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300" href="#">Gift Cards</a>
      </nav>
      <div className="flex items-center space-x-6">
      <button className="text-emerald-900 dark:text-emerald-400 hover:text-emerald-700 transition-colors">
      <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
      </button>
      <button className="text-emerald-900 dark:text-emerald-400 hover:text-emerald-700 transition-colors">
      <span className="material-symbols-outlined" data-icon="person">person</span>
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

    {/* 🏠 CLIENT ADDRESS */}
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


    {/* 🏢 RESTAURANTS DROPDOWN */}
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

  {/* ✅ ГАЛОЧКА — теперь на уровне карточки */}
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
      <h2 className="font-headline-lg text-headline-lg text-primary">Payment Method</h2>
      <button className="text-secondary font-label-sm flex items-center gap-2 hover:underline underline-offset-4">
      <span className="material-symbols-outlined text-sm">credit_card</span> ADD CARD
                              </button>
      </div>
      <div className="space-y-md">
      
      {Array.isArray(cards) && cards.map((card) => {
    const isSelected = selectedCard?.id === card.id;

    return (
      <div
        key={card.id}
        onClick={() => setSelectedCard(card)}
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
              {card.brand || "Card"} ending in {card.last4 || card.number?.slice(-4)}
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
          {isSelected ? "radio_button_checked" : "radio_button_unchecked"}
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
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-3 text-body-md focus:outline-none focus:border-primary transition-colors placeholder:text-stone-400" id="order-instructions" name="order-instructions" placeholder="e.g., allergies, gate code, extra napkins" type="text"/>
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
    </div>
  );
}
