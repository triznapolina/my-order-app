import { useEffect, useState } from "react";

import { foodService, categoryService, orderService, orderItemService } from "../apis/api";
import { useNavigate } from "react-router-dom";

import {
  useParams
} from "react-router-dom";


export default function DetailsMenuDish() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const [readyOrdersCount, setReadyOrdersCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categoryName, setCategoryName] = useState("");

 useEffect(() => {

  document.title =
    "Digital Bistro";

  loadFood();

}, [id]);

 const totalQuantity =
    order?.list?.reduce(
      (sum, item) => sum + item.quantity,
      0
    ) || 0;  

const loadFood =
  async () => {

    try {

      const res =
        await foodService.getFoodById(
          id
        );

      setFood(
        res.data
      );

    } catch (e) {

      console.error(
        "LOAD FOOD ERROR",
        e
      );

    }
};

  const token = localStorage.getItem("token");

  const clientId = token
    ? JSON.parse(atob(token.split(".")[1])).id
    : null;

  useEffect(() => {

  if (!clientId) return;

  initOrder();

  loadReadyOrders();

}, [clientId]);

useEffect(() => {

  const loadCategory = async () => {

    if (!food?.id) return;

    try {

      const response =
        await categoryService.getById(
          food.categoryId
        );

      setCategoryName(
        response.data?.name || ""
      );

    } catch (e) {

      console.error(
        "LOAD CATEGORY ERROR",
        e
      );

    }

  };

  loadCategory();

}, [food]);


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

  const initOrder = async () => {
  try {
    const res =
      await orderService.getNonCompletedByClient(clientId);

    if (!res.data) {
      setOrder(null);
      setOrderId(null);

      localStorage.removeItem("orderId");

      return;
    }

    const currentOrderId = res.data.id;

    setOrderId(currentOrderId);

    localStorage.setItem(
      "orderId",
      currentOrderId
    );

    const orderRes = await orderService.getOrder(currentOrderId);

    setOrder(orderRes.data);

  } catch (e) {
    console.error("INIT ORDER ERROR:", e);

    setOrder(null);
    setOrderId(null);

    localStorage.removeItem("orderId");
  }
};


const addToCart = async (food) => {
  try {
    let currentOrderId = orderId;

    if (!currentOrderId) {
      const orderRes = await orderService.createOrder({
        clientId,
        shortDescription: " ",
      });

      currentOrderId = orderRes.data.id;

      setOrderId(currentOrderId);

      localStorage.setItem("orderId", currentOrderId);
    }

    const orderRes = await orderService.getOrder(currentOrderId);

    const currentOrder = orderRes.data;

    const existingItem = currentOrder?.list?.find(
      (i) => Number(i.foodId) === Number(food.id)
    );

    if (existingItem) {
      await orderItemService.updateItem({
        orderId: currentOrderId,
        foodId: food.id,
        quantity: existingItem.quantity + quantity,
      });
    } else {
      await orderItemService.createItem({
        orderId: currentOrderId,
        foodId: food.id,
        quantity: quantity,
      });
    }

    const updated = await orderService.getOrder(currentOrderId);

    setOrder(updated.data);

  } catch (e) {
    console.error("ADD TO CART ERROR:", e);
  }
};

  const openDetails = () => {
    navigate(`/client-catalog`);
  };


  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      {/* TopNavBar */}
      <header className="bg-[#FDFCF8] text-[#1B3022] font-epilogue tracking-tight border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors lg:hidden"
            onClick={openDetails}
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <div className="text-xl md:text-2xl font-bold text-[#1B3022]">Bistro Provence</div>
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
      <main className="pt-20 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 mb-8 text-stone-500 font-label-sm text-label-sm">
      <a className="hover:text-primary transition-colors" href="/client-catalog">Menu</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-primary font-bold">{categoryName || "—"}</span>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-primary font-bold">{food?.name}</span>
      </nav>
      {/* Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
      {/* Image Side */}
      <div className="lg:col-span-7 space-y-6">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shadow-[0_10px_30px_rgba(27,48,34,0.05)]">
      <img
  alt={food?.name}
  className="
    w-full h-full object-cover
    hover:scale-105
    transition-transform
    duration-700
  "
  src={`http://localhost:8080/catalog/images/${food?.id}`}/>
      </div>
      
     
      </div>
      {/* Details Side */}
      <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
      <div>
      <div className="flex gap-2 mb-4">
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">Premium Selection</span>
      </div>
      <h1
  className="
    font-display-xl
    text-display-xl
    text-primary mb-2
  "
>
  {food?.name}
</h1>
     <p
  className="
    font-price-label
    text-price-label
    text-secondary
  "
>
  {food?.price != null
    ? `$${Number(food.price).toFixed(2)}`
    : "$0.00"}
</p>
      </div>
      <p
  className="
    font-body-lg
    text-body-lg
    text-on-surface-variant
    leading-relaxed
  "
>
  {food?.shortDescription}
</p>
     
     
      {/* Order Actions */}

      <div className="pt-6 flex flex-col gap-4">
  <div className="flex items-center gap-6">

    <div className="flex items-center bg-surface-container-high rounded-full p-1 h-14">

      <button
        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-primary active:scale-90"
      >
        <span className="material-symbols-outlined">remove</span>
      </button>

      <span className="w-12 text-center font-price-label text-price-label text-secondary">
        {quantity}
      </span>

      <button
        onClick={() => setQuantity((prev) => prev + 1)}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-primary active:scale-90"
      >
        <span className="material-symbols-outlined">add</span>
      </button>

    </div>

    <button
      onClick={() => addToCart(food)}
      className="flex-1 h-14 bg-primary text-on-primary rounded-xl font-headline-md text-headline-md shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all"
    >
      Add to Order
    </button>

  </div>
</div>
     
      </div>
      </div>
      {/* Provenance / Details Tab Section */}
      <section className="mt-20 border-t border-stone-200 pt-16">
      <div className="flex gap-12 mb-12 border-b border-stone-100">
      <button className="pb-4 font-headline-md text-headline-md text-primary border-b-2 border-primary">Ingredients</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
<p
  className="
    font-body-lg
    text-body-lg
    text-on-surface-variant
    mb-8
  "
>
  {food?.ingredientsDescription}
</p>      
      </div>
      
      </div>
      </section>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-16 bg-stone-100 border-t border-stone-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
      <div>
      <div className="text-xl font-bold text-emerald-900 mb-4">Digital Bistro</div>
      <p className="font-epilogue text-sm font-light text-stone-600 mb-6 leading-relaxed">
                          © 2024 Digital Bistro. Sustainably sourced, thoughtfully prepared. Experience the intersection of technology and taste.
                      </p>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Quick Links</h5>
      <ul className="space-y-2">
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Sourcing Policy</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Gift Cards</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Careers</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Support</h5>
      <ul className="space-y-2">
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Privacy</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Accessibility</a></li>
      <li><a className="font-epilogue text-sm font-light text-stone-500 hover:text-emerald-900 transition-colors" href="#">Contact Us</a></li>
      </ul>
      </div>
      <div>
      <h5 className="font-epilogue font-bold text-emerald-950 mb-4">Social</h5>
      <div className="flex space-x-4">
      <a className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">share</span>
      </a>
      <a className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all" href="#">
      <span className="material-symbols-outlined text-[20px]">public</span>
      </a>
      </div>
      </div>
      </div>
      </footer>
      {/* BottomNavBar (Mobile only) */}
      <nav className="fixed bottom-0 w-full z-50 rounded-t-2xl md:hidden bg-stone-50/95 backdrop-blur-lg border-t border-stone-200 shadow-[0_-10px_30px_rgba(27,48,34,0.05)]">
      <div className="flex justify-around items-center h-16 px-4">
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="home">home</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-emerald-900 bg-stone-200/50 rounded-xl px-4 py-1 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="restaurant_menu">restaurant_menu</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Menu</span>
      </button>
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Orders</span>
      </button>
      <button className="flex flex-col items-center justify-center text-stone-400 active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-epilogue text-[10px] font-semibold tracking-wide">Profile</span>
      </button>
      </div>
      </nav>
    </div>
  );
}
