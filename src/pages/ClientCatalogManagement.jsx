import { useState, useEffect } from 'react';

import { foodService, categoryService, orderService, orderItemService } from "../apis/api";
import { useNavigate } from "react-router-dom";

const ClientCatalogManagement = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('Recommended');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [order, setOrder] = useState(null);

  useEffect(() => {
  const initOrder = async () => {
    try {

      document.title = 'Menu Catalog | Bistro Provence';

      const token = localStorage.getItem("token");
      if (!token) return;

      const payload = parseJwt(token);
      const currentClientId = payload.id || payload.sub;

      setClientIdState(currentClientId);

      // 🔥 проверяем есть ли уже заказ в localStorage
      const savedOrderId = localStorage.getItem("orderId");

      if (savedOrderId) {
        setOrderId(savedOrderId);

        const res = await orderService.getOrder(savedOrderId);
        setCart(res.data.list || []);
        return;
      }

      // 🔥 ищем незавершённый заказ на бэке
      const res = await orderService.findIsNotCompleted(currentClientId);

      if (res.data) {
        setOrderId(res.data.id);
        setCart(res.data.list || []);

        localStorage.setItem("orderId", res.data.id);
      }

    } catch (e) {
      console.error("INIT ORDER ERROR:", e);
    }
  };

  initOrder();
}, []);


useEffect(() => {
  const loadOrder = async () => {
    const savedOrderId = localStorage.getItem("orderId");

    if (!savedOrderId) return;

    try {
      const res = await orderService.getOrder(savedOrderId);
      setOrder(res.data);
      setOrderId(savedOrderId);
    } catch (e) {
      console.error(e);
    }
  };

  loadOrder();
}, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const [menuItems, setMenuItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
  loadFoods();
}, [currentPage, itemsPerPage]);

const loadFoods = async () => {
  try {
    setLoading(true);
    const res = await foodService.getAllFoods(currentPage - 1, itemsPerPage);

    setMenuItems(res.data.content);
    setTotalItems(res.data.totalElements);
  } catch (e) {
    console.error(e);
  } finally {
    setLoading(false);
  }
};

 const [categories, setCategories] = useState([]);

 useEffect(() => {
  loadCategories();
}, []);

const loadCategories = async () => {
  try {
    const res = await categoryService.getAll(0, 100); 

    setCategories(res.data.content || res.data);
  } catch (e) {
    console.error("CATEGORY ERROR:", e);
  }
};


const handleCategoryClick = async (categoryId) => {
  try {
    const res = await foodService.getByCategory(categoryId);
    setMenuItems(res.data);
  } catch (e) {
    console.error(e);
  }
};

const handlePriceFilter = async (min, max) => {
  try {
    const res = await foodService.getByPriceRange(min, max);
    setMenuItems(res.data);
  } catch (e) {
    console.error(e);
  }
};


const handleSearch = async (value) => {
  try {
    const res = await foodService.searchByName(value);
    setMenuItems(res.data);
  } catch (e) {
    console.error(e);
  }
};

const parseJwt = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

// usage
const token = localStorage.getItem("token");
const payload = parseJwt(token);
const clientId = payload.id; // или sub

const [orderId, setOrderId] = useState(null);

const [cart, setCart] = useState([]);

const [clientIdState, setClientIdState] = useState(null);

const addToCart = async (item) => {
  try {
    let currentOrderId = orderId || localStorage.getItem("orderId");

    const token = localStorage.getItem("token");
    if (!token) return;

    let currentClientId = clientId;

    if (!currentClientId) {
      const res = await authService.extractId(token);
      currentClientId = res.data;
      setClientId(currentClientId);
    }

    // 🛒 создаём заказ если нет
    if (!currentOrderId) {
      const orderRes = await orderService.createOrder({
        clientId: currentClientId,
        restaurantId: null,
        paymentId: null,
        deliveryId: null,
        shortDescription: "Draft order",
      });

      currentOrderId = orderRes.data.id;
      setOrderId(currentOrderId);
      localStorage.setItem("orderId", currentOrderId);
    }

    // 🔍 ищем item в текущем заказе
    const existingItem = order?.list?.find(
      (i) => i.foodId === item.id
    );

    if (existingItem) {
      // ➕ UPDATE (увеличиваем количество)
      await orderItemService.updateItem({
        orderId: currentOrderId,
        foodId: item.id,
        quantity: existingItem.quantity + 1,
      });
    } else {
      // ➕ CREATE (новый item)
      await orderItemService.createItem({
        orderId: currentOrderId,
        foodId: item.id,
        quantity: 1,
      });
    }

    // 🔄 обновляем заказ с бэка (важно!)
    const updated = await orderService.getOrder(currentOrderId);
    setOrder(updated.data);

  } catch (e) {
    console.error(e);
  }
};

const navigate = useNavigate();

const openDetails = (id) => {
  navigate(`/details-menu-dish/${id}`);
};

const getImageUrl = (id) =>
  id ? `http://localhost:8080/catalog/images/${id}` : "/no-image.png";

const totalPages = Math.ceil(totalItems / itemsPerPage);

const changePage = (page) => {
  setCurrentPage(page);
};

const totalQuantity =
  order?.list?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

  return (
    <div className="light bg-surface text-on-background selection:bg-primary-fixed-dim">
      {/* Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      />

      {/* Navigation Drawer (Main Menu) */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#FDFCF8] shadow-2xl z-[70] flex flex-col p-6 overflow-y-auto transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold text-primary">Bistro Provence</div>
          <button
            className="p-2 hover:bg-surface-container rounded-full transition-colors"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-headline-md font-headline-md text-primary mb-1">Main Menu</h2>
          <p className="text-label-sm text-on-surface-variant">Explore our curated selections</p>
        </div>

        <div className="space-y-6">
          {/* Navigation Tabs */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 bg-[#1B3022] text-white rounded-lg font-semibold transition-all duration-300 text-left hover:shadow-md">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span>Our Menu</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">event_available</span>
              <span>Reservations</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">history_edu</span>
              <span>Our Story</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-stone-600 hover:bg-stone-50 hover:pl-2 transition-all duration-300 text-left">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span>Seasonal Specials</span>
            </button>
          </div>

          {/* Food Categories Section */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
  <button
    key={category.id}
    onClick={() => handleCategoryClick(category.id)}
  >
    {category.name}
  </button>
))}
            </div>
          </div>

          {/* Account Section */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
              Account
            </h3>
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container">person</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="bg-[#FDFCF8] text-[#1B3022] font-epilogue tracking-tight border-b border-stone-200 shadow-sm flex justify-between items-center w-full px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-surface-container-high rounded-full transition-colors lg:hidden"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          <div className="text-xl md:text-2xl font-bold text-[#1B3022]">Bistro Provence</div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[#1B3022] border-b-2 border-[#D4A373] pb-1 hover:text-[#1B3022] transition-colors"
          >
            Menu
          </a>
          <a href="#" className="text-stone-500 font-medium hover:text-[#1B3022] transition-colors">
            Reservations
          </a>
          <a href="#" className="text-stone-500 font-medium hover:text-[#1B3022] transition-colors">
            Our Story
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md ml-2 w-48"
              placeholder="Search menu..."
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
            />
          </div>
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

  <button className="p-2 hover:text-[#1B3022] transition-transform active:scale-95 duration-200">
    <span className="material-symbols-outlined">account_circle</span>
  </button>
</div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto flex min-h-screen">
        {/* SideNavBar / Refine Menu (Desktop) */}
        <aside className="bg-[#FDFCF8] text-[#1B3022] font-epilogue text-sm border-r border-stone-100 fixed left-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto p-6 hidden lg:flex flex-col w-64 z-30">
          <div className="mb-8">
            <h2 className="text-headline-md font-headline-md text-primary mb-1">Refine Menu</h2>
            <p className="text-label-sm text-on-surface-variant">Curate your dining experience</p>
          </div>

          <div className="space-y-6">
            {/* Shared Navigation Tabs */}
           

            {/* Price Range Filter */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Price Range
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary text-body-md"
                    placeholder="Min"
                    type="number"
                  />
                  <span className="text-stone-400">—</span>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary text-body-md"
                    placeholder="Max"
                    type="number"
                  />
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Food Categories Section */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="text-label-sm uppercase tracking-widest text-on-surface-variant mb-4">
                Food Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
  <button
    key={category.id}
    onClick={() => handleCategoryClick(category.id)}
  >
    {category.name}
  </button>
))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 p-4 md:p-8 pb-32">
          <div className="mb-8">
            <h1 className="font-display-xl text-3xl md:text-4xl text-primary mb-4">Earthy Gastronomy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated collection of our finest dishes, sourced from local artisans and prepared with
              seasonal precision.
            </p>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <article
                onClick={() => openDetails(item.id)}
                key={item.id}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_10px_30px_rgba(27,48,34,0.05)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
  alt={item.name}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  src={getImageUrl(item.id)}
  onError={(e) => {
    e.currentTarget.src = "/no-image.png";
  }}
/>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-primary">{item.name}</h3>
                    {item.badge && (
                      <span
                        className={`${item.badgeColor} ${item.badgeTextColor} text-label-sm px-2 py-1 rounded`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                    {item.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-price-label text-price-label text-primary">{item.price}</span>
                    <button onClick={(e) => {
  e.stopPropagation();
  addToCart(item);
}} className="bg-[#D4A373] text-white px-6 py-2 rounded-lg font-bold hover:brightness-105 transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Bar */}
          <div className="mt-12 py-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6 text-on-surface-variant">
            <div className="flex items-center gap-4">
              <span className="text-label-sm uppercase tracking-widest font-bold">Items per page</span>
              <select className="bg-surface border border-outline-variant rounded-lg px-3 py-1 text-label-sm">
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="text-label-sm">Showing 1-6 of 48 dishes</div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-6 mt-20 py-12 bg-[#FDFCF8] border-t border-stone-100">
        <div className="font-bold text-[#1B3022] text-xl font-epilogue">Bistro Provence</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Sourcing
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Private Dining
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Sustainability
          </a>
          <a className="font-epilogue text-xs text-stone-500 hover:text-[#D4A373] transition-colors" href="#">
            Careers
          </a>
        </div>
        <div className="font-epilogue text-xs text-stone-500 px-4 text-center">
          © 2024 Bistro Provence. Crafted for the discerning palate.
        </div>
      </footer>

      {/* Material Symbols Stylesheet */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800&family=Be+Vietnam+Pro:wght@400;600;700&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
};

export default ClientCatalogManagement;
