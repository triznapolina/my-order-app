import { useState, useEffect } from 'react';

import { foodService, categoryService, orderService, orderItemService } from "../apis/api";
import { useNavigate } from "react-router-dom";

const ClientCatalogManagement = () => {
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const [readyOrdersCount, setReadyOrdersCount] = useState(0);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const [selectedCategoryId, setSelectedCategoryId] = useState(null);


  document.title = "Menu Catalog | Bistro Provence";

  const token = localStorage.getItem("token");

  const clientId = token
    ? JSON.parse(atob(token.split(".")[1])).id
    : null;

  useEffect(() => {
    loadFoods();
  }, [currentPage]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (!clientId) return;

    initOrder();

    loadReadyOrders();
  }, [clientId]);


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

  const loadFoods = async () => {
    try {
      setLoading(true);

      const res = await foodService.getAllFoods(
        currentPage - 1,
        itemsPerPage
      );

      setMenuItems(res.data.content);
      setTotalItems(res.data.totalElements);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await categoryService.getAll(0, 100);

      setCategories(res.data.content || res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCategoryClick =
async (categoryId) => {

  try {

    setSelectedCategoryId(
      categoryId
    );

    setCurrentPage(1);

    const res =
      await foodService.getByCategory(categoryId);

    const foods =
      res.data.content ||
      res.data ||
      [];

    setMenuItems(foods);

    setTotalItems(
      foods.length
    );

  } catch (e) {

    console.error(e);

  }
};


  const formatDecimal = (value) => {

  if (!value) {
    return null;
  }

  return Number(value)
    .toFixed(2);
};


  const handlePriceFilter =
  async () => {

    try {

      const formattedMin =
        formatDecimal(
          minPrice
        );

      const formattedMax =
        formatDecimal(
          maxPrice
        );

      setMinPrice(
        formattedMin || ""
      );

      setMaxPrice(
        formattedMax || ""
      );

      let res;

      if (
        selectedCategoryId
      ) {

        res =
          await foodService
            .getByCategoryAndPriceRange(
              selectedCategoryId,
              formattedMin || "0.00",
              formattedMax || "999999.99"
            );

      }

      else {

        res =
          await foodService
            .getByPriceRange(
              formattedMin || "0.00",
              formattedMax || "999999.99"
            );
      }

      const foods =
  res.data.content ||
  res.data ||
  [];

setMenuItems(foods);

setTotalItems(
  foods.length
);

      setCurrentPage(1);

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

const addToCart = async (item) => {
  try {
    let currentOrderId = orderId;

    if (!currentOrderId) {
      const orderRes = await orderService.createOrder({
        clientId,
        shortDescription: " ",
      });

      currentOrderId = orderRes.data.id;

      setOrderId(currentOrderId);

      localStorage.setItem(
        "orderId",
        currentOrderId
      );
    }

    const orderRes = await orderService.getOrder(currentOrderId);

    const currentOrder = orderRes.data;

    const existingItem = currentOrder?.list?.find(
      (i) => Number(i.foodId) === Number(item.id)
    );

    if (existingItem) {
      await orderItemService.updateItem({
        orderId: currentOrderId,
        foodId: item.id,
        quantity: existingItem.quantity + 1,
      });
    }

    else {
      await orderItemService.createItem({
        orderId: currentOrderId,
        foodId: item.id,
        quantity: 1,
      });
    }

    const updated =
      await orderService.getOrder(currentOrderId);

    setOrder(updated.data);

  } catch (e) {
    console.error("ADD TO CART ERROR:", e);
  }
};

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);

    document.body.style.overflow = !isDrawerOpen
      ? "hidden"
      : "";
  };

  const openDetails = (id) => {
    navigate(`/details-menu-dish/${id}`);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const getImageUrl = (id) =>
    id
      ? `http://localhost:8080/catalog/images/${id}`
      : "/no-image.png";

  const totalQuantity =
    order?.list?.reduce(
      (sum, item) => sum + item.quantity,
      0
    ) || 0;


  const totalPages =
  Math.max(
    1,
    Math.ceil(
      (totalItems || 0) /
      itemsPerPage
    )
  );

const paginatedItems =
  Array.isArray(menuItems)
    ? menuItems
    : [];

  return (
    <div className="light bg-surface text-on-background selection:bg-primary-fixed-dim">
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      />

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


        <div className="pt-6 border-t border-stone-200">

  <h3
    className="
      text-label-sm uppercase
      tracking-widest
      text-on-surface-variant
      mb-4
    "
  >
    Price Range
  </h3>

  <div className="flex flex-col gap-3">

    <div
      className="
        flex items-center
        justify-between gap-2
      "
    >

     <input
  className="
    w-full bg-surface border
    border-outline-variant
    rounded-lg p-2
    focus:ring-primary
    focus:border-primary
    text-body-md
  "
  placeholder="0.00"
  type="number"
  step="0.01"
  min="0"
  value={minPrice}
  onChange={(e) =>
    setMinPrice(
      e.target.value.replace(
        ",",
        "."
      )
    )
  }
/>

      <span
        className="text-stone-400"
      >
        —
      </span>

      <input
        className="
          w-full bg-surface border
          border-outline-variant
          rounded-lg p-2
          focus:ring-primary
          focus:border-primary
          text-body-md
        "
        placeholder="9999.99"
        type="number"
        step="0.01"
        min="0"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(
            e.target.value.replace(
        ",",
        "."
      )
          )
        }
      />

    </div>

    <button
      onClick={handlePriceFilter}
      className="
        w-full bg-primary text-white
        py-3 rounded-lg font-bold
        hover:bg-opacity-90
        transition-colors
      "
    >
      Apply Filters
    </button>

  </div>

</div>

        <div className="space-y-6">

<div className="space-y-1">

  {categories.map((category) => (

    <button
      key={category.id}
      onClick={() =>
        handleCategoryClick(
          category.id
        )
      }
      className={`
        w-full flex items-center
        gap-3 p-3 rounded-lg
        transition-all duration-300
        text-left

        ${
          selectedCategoryId ===
          category.id

            ? `
              text-[#D4A373]
              bg-surface-container
              font-bold
            `

            : `
              text-stone-600
              dark:text-stone-400
              hover:bg-stone-50
              dark:hover:bg-stone-900
              hover:pl-2
            `
        }
      `}
    >

      <span
        className="
          material-symbols-outlined
        "
      >
        restaurant_menu
      </span>

      <span className="text-sm">

        {category.name}

      </span>

    </button>

  ))}

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

      <div className="max-w-[1440px] mx-auto flex min-h-screen">
        {/* SideNavBar / Refine Menu (Desktop) */}
        <aside className="bg-[#FDFCF8] text-[#1B3022] font-epilogue text-sm border-r border-stone-100 fixed left-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto p-6 hidden lg:flex flex-col w-64 z-30">
          <div className="space-y-6">
           
          <div className="pt-6 border-t border-stone-200">

  <h3
    className="
      text-label-sm uppercase
      tracking-widest
      text-on-surface-variant
      mb-4
    "
  >
    Price Range
  </h3>

  <div className="flex flex-col gap-3">

    <div
      className="
        flex items-center
        justify-between gap-2
      "
    >

     <input
  className="
    w-full bg-surface border
    border-outline-variant
    rounded-lg p-2
    focus:ring-primary
    focus:border-primary
    text-body-md
  "
  placeholder="0.00"
  type="number"
  step="0.01"
  min="0"
  value={minPrice}
  onChange={(e) =>
    setMinPrice(
      e.target.value.replace(
        ",",
        "."
      )
    )
  }
/>

      <span
        className="text-stone-400"
      >
        —
      </span>

      <input
        className="
          w-full bg-surface border
          border-outline-variant
          rounded-lg p-2
          focus:ring-primary
          focus:border-primary
          text-body-md
        "
        placeholder="9999.99"
        type="number"
        step="0.01"
        min="0"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(
            e.target.value.replace(
        ",",
        "."
      )
          )
        }
      />

    </div>

    <button
      onClick={handlePriceFilter}
      className="
        w-full bg-primary text-white
        py-3 rounded-lg font-bold
        hover:bg-opacity-90
        transition-colors
      "
    >
      Apply Filters
    </button>

  </div>

</div>

<div className="space-y-1">

  {categories.map((category) => (

    <button
      key={category.id}
      onClick={() =>
        handleCategoryClick(
          category.id
        )
      }
      className={`
        w-full flex items-center
        gap-3 p-3 rounded-lg
        transition-all duration-300
        text-left

        ${
          selectedCategoryId ===
          category.id

            ? `
              text-[#D4A373]
              bg-surface-container
              font-bold
            `

            : `
              text-stone-600
              dark:text-stone-400
              hover:bg-stone-50
              dark:hover:bg-stone-900
              hover:pl-2
            `
        }
      `}
    >

      <span
        className="
          material-symbols-outlined
        "
      >
        restaurant_menu
      </span>

      <span className="text-sm">

        {category.name}

      </span>

    </button>

  ))}

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
            {paginatedItems.map((item) => (
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

 <span className="font-price-label text-price-label text-primary">
  {item?.price != null
    ? `$${Number(item.price).toFixed(2)}`
    : "$0.00"}
</span>

                    
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

<div
  className="
    mt-12 py-8 border-t
    border-stone-100 flex
    flex-col md:flex-row
    items-center justify-between
    gap-6 text-on-surface-variant
  "
>

  <div className="text-label-sm">

    Showing{" "}

    {
      paginatedItems?.length === 0
        ? 0
        : (
            (
              currentPage - 1
            ) * itemsPerPage
          ) + 1
    }

    -

    {
      Math.min(
        currentPage *
        itemsPerPage,

        totalItems || 0
      )
    }

    {" "}of{" "}

    {totalItems || 0}

    dishes

  </div>

  <div
    className="
      flex items-center gap-2
    "
  >

    <button
      disabled={
        currentPage <= 1
      }
      onClick={() =>
        setCurrentPage(
          (prev) =>
            Math.max(
              prev - 1,
              1
            )
        )
      }
      className="
        w-10 h-10 flex
        items-center
        justify-center
        rounded-full
        hover:bg-surface-container
        transition-colors
        disabled:opacity-40
      "
    >

      <span
        className="
          material-symbols-outlined
        "
      >
        chevron_left
      </span>

    </button>

    {

      Array.from({

        length: Number.isFinite(
          totalPages
        )
          ? totalPages
          : 0

      }).map((_, index) => {

        const page =
          index + 1;

        return (

          <button
            key={page}
            onClick={() =>
              setCurrentPage(
                page
              )
            }
            className={`
              w-10 h-10 flex
              items-center
              justify-center
              rounded-full
              transition-colors

              ${
                currentPage === page

                  ? `
                    bg-primary
                    text-white
                    font-bold
                  `

                  : `
                    hover:bg-surface-container
                  `
              }
            `}
          >

            {page}

          </button>

        );
      })

    }

    <button
      disabled={
        currentPage >=
        totalPages
      }
      onClick={() =>
        setCurrentPage(
          (prev) =>
            Math.min(
              prev + 1,
              totalPages
            )
        )
      }
      className="
        w-10 h-10 flex
        items-center
        justify-center
        rounded-full
        hover:bg-surface-container
        transition-colors
        disabled:opacity-40
      "
    >

      <span
        className="
          material-symbols-outlined
        "
      >
        chevron_right
      </span>

    </button>

  </div>

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
