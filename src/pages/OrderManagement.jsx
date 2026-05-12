import { useState, useEffect } from "react";
import { orderService, cardService, userService, foodService, paymentService, restaurantService } from "../apis/api";

const OrderManagement = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [orders, setOrders] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(0);

  const [totalPages, setTotalPages] =
    useState(0);

  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

const itemsPerPage = 10;

const [searchValue, setSearchValue] = useState("");

const [selectedFilter, setSelectedFilter] = useState(null); 
const [totalElements, setTotalElements] =
  useState(0); 

  const [paymentInfo, setPaymentInfo] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [foodsMap, setFoodsMap] = useState({});
  const getImageUrl = (id) =>
    id
      ? `http://localhost:8080/catalog/images/${id}`
      : "/no-image.png";
  

  const handleDelete =
  async (orderId) => {

    try {

      await orderService.deleteOrder(
        orderId
      );

      setOrders((prev) =>
        prev.filter(
          (order) =>
            order.id !== orderId
        )
      );

      setSelectedOrder(null);

    } catch (error) {

      console.error(
        "DELETE ERROR",
        error
      );

    }
  };

  const loadOrders = async (
  isFilter = false
) => {

  try {

    const response =
      isFilter
        ? await orderService.filterOrders({
            filter: selectedFilter,
            value:
              searchValue || null,
            page: currentPage,
            size: 10,
          })
        : await orderService.getAllOrders({
            page: currentPage,
            size: 10,
          });

    const ordersData =
      response.data.content || [];

    const mappedOrders =
      await Promise.all(
        ordersData.map(
          async (order) => {

            let customerEmail =
              `Client #${order.clientId}`;

            try {

              const clientResponse =
                await userService.getInfoById(
                  order.clientId
                );

              customerEmail =
                clientResponse.data.email;

            } catch (e) {

              console.error(
                "LOAD CLIENT ERROR",
                e
              );

            }

            return {

              id: order.id,

              number:
                order.number,

              datetime:
                new Date(
                  order.createdAt
                ).toLocaleString(),

              customer:
                customerEmail,

              avatar:
                "/no-avatar.png",

              items:
                order.list
                  ?.map(
                    (item) =>
                      `${item.quantity}x item`
                  )
                  .join(", ") ||
                "No items",

              total: order.totalPrice,

              status:
                order.readyForPickup
                  ? "Is Ready"
                  : order.status,

              notified:
                order.readyForPickup ||
                false,

            };

          }
        )
      );

    setOrders(mappedOrders);

    setTotalPages(
      response.data.totalPages || 0
    );

    setTotalElements(
  response.data.totalElements || 0
);

  } catch (error) {

    console.error(
      "LOAD ORDERS ERROR",
      error
    );

  }

};

  useEffect(() => {
    loadOrders();
  }, [
    currentPage,
    itemsPerPage,
    search,
  ]);

const handleNotifyPickup = async (
  e,
  orderId
) => {

  e.stopPropagation();

  const currentOrder = orders.find(
    (order) => order.id === orderId
  );

  if (currentOrder?.notified) {
    return;
  }

  try {

    // 1. cancelOrder
    await orderService.cancelOrder(
  orderId,
  true
);

    // 2. setStatus -> isReady
    await orderService.updateStatus(
      orderId,
      "isReady"
    );

    // 3. update local state
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: "isReady",
            }
          : order
      )
    );

  } catch (error) {

    console.error(
      "NOTIFY PICKUP ERROR",
      error
    );

  }
};

 const openOrderModal = async (orderId) => {
   try {
     const response = await orderService.getOrder(orderId);
 
     const orderData = response.data;
 
     setSelectedOrder(orderData);
 
     /*
      * LOAD FOODS
      */
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
 
         } catch (e) {
           console.error(
             `FOOD ${item.foodId} ERROR`,
             e
           );
         }
       })
     );
 
     setFoodsMap(foods);
 
     /*
      * PAYMENT
      */
     if (orderData.paymentId) {
 
       try {
         const paymentResponse =
           await paymentService.getById(
             orderData.paymentId
           );
 
         const cardId =
           paymentResponse.data.cardId;
 
         const cardResponse =
           await cardService.getById(
             cardId
           );
 
         const cardNumber =
           cardResponse.data.number;
 
         const last4 =
           cardNumber.slice(-4);
 
         setPaymentInfo(
           `**** **** **** ${last4}`
         );
 
       } catch (e) {
         console.error(
           "PAYMENT LOAD ERROR",
           e
         );
 
         setPaymentInfo("Card");
       }
 
     } else {
       setPaymentInfo("Payment in cash");
     }
 
     /*
      * DELIVERY
      */
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
 
       } catch (e) {
 
         console.error(
           "RESTAURANT ERROR",
           e
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

  const closeOrderModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
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
          <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(27,48,34,0.05)] border border-stone-100 overflow-hidden">
            <div className="px-lg py-md border-b border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">

  <h2 className="text-headline-md font-headline-md text-primary">
    Recent Orders
  </h2>

  {/* FILTER BUTTONS */}
  <div className="flex flex-wrap gap-2 w-full sm:w-auto mb-2 sm:mb-0 lg:flex-1 sm:justify-end">

    {/* CUSTOMER */}
<button
  type="button"
  onClick={() =>
    setSelectedFilter((prev) =>
      prev === 1 ? null : 1
    )
  }
  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
    selectedFilter === 1
      ? "bg-emerald-900 text-white"
      : "border border-stone-200 text-stone-600 hover:bg-stone-50"
  }`}
>
  <span className="material-symbols-outlined text-[16px]">
    person
  </span>

  Customer
</button>

{/* DATE */}
<button
  type="button"
  onClick={() =>
    setSelectedFilter((prev) =>
      prev === 2 ? null : 2
    )
  }
  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
    selectedFilter === 2
      ? "bg-emerald-900 text-white"
      : "border border-stone-200 text-stone-600 hover:bg-stone-50"
  }`}
>
  <span className="material-symbols-outlined text-[16px]">
    calendar_today
  </span>

  Date
</button>

{/* STATUS */}
<button
  type="button"
  onClick={() =>
    setSelectedFilter((prev) =>
      prev === 3 ? null : 3
    )
  }
  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap ${
    selectedFilter === 3
      ? "bg-emerald-900 text-white"
      : "border border-stone-200 text-stone-600 hover:bg-stone-50"
  }`}
>
  <span className="material-symbols-outlined text-[16px]">
    filter_alt
  </span>

  Status
</button>

  </div>

  {/* SEARCH */}
  <div className="flex gap-2 w-full sm:w-auto lg:flex-1 sm:justify-end">

    <div className="relative flex-1 sm:w-64">

      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
        search
      </span>

      <input
        value={searchValue}
        onChange={(e) =>
          setSearchValue(
            e.target.value
          )
        }
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 focus:ring-secondary focus:border-secondary text-sm"
        placeholder="Search orders..."
        type="text"
      />

    </div>

    {/* FILTER REQUEST */}
    <button
      type="button"
      onClick={() => {

        // первая страница
        setCurrentPage(0);

        // фильтрация
        loadOrders(true);

      }}
      className="p-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-50"
    >
      <span className="material-symbols-outlined">
        filter_list
      </span>
    </button>

  </div>

</div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">

  <thead>

    <tr className="bg-stone-50/50 text-label-sm font-label-sm text-stone-500 uppercase tracking-widest border-b border-stone-100">

      <th className="px-lg py-4">
        Order #
      </th>

      <th className="px-lg py-4">
        Date/Time
      </th>

      <th className="px-lg py-4">
        Customer
      </th>

      <th className="px-lg py-4">
        Total Price
      </th>

      <th className="px-lg py-4">
        Status
      </th>

      <th className="px-lg py-4 text-right">
        Actions
      </th>

    </tr>

  </thead>

  <tbody className="divide-y divide-stone-50 font-body-md text-sm">

    {orders.map((order) => (

      <tr
        key={order.id}
        onClick={() =>
          openOrderModal(order.id)
        }
        className="hover:bg-stone-50/40 transition-colors cursor-pointer"
      >

        <td className="px-lg py-4 font-bold text-primary">
          #{order.number}
        </td>

        <td className="px-lg py-4 text-stone-500">
          {order.datetime}
        </td>

        <td className="px-lg py-4">

          <div className="flex items-center gap-2">

            <span>
              {order.customer}
            </span>

          </div>

        </td>

        <td className="px-lg py-4 font-bold">
  {order.total != null
    ? `$${Number(order.total).toFixed(2)}`
    : "—"}
</td>

        <td className="px-lg py-4">

          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${
              order.status ===
              "Is Ready"
                ? "bg-secondary-fixed text-secondary"
                : "bg-emerald-50 text-emerald-900"
            }`}
          >
            {order.status}
          </span>

        </td>

        <td className="px-lg py-4 text-right">

          <button
            type="button"
            onClick={(e) =>
              handleNotifyPickup(
                e,
                order.id
              )
            }
            disabled={
              order.status ===
              "Is Ready"
            }
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              order.status ===
              "Is Ready"
                ? "bg-stone-200 text-stone-500 cursor-not-allowed pointer-events-none"
                : "bg-secondary text-white hover:bg-secondary-container"
            }`}
          >
            Notify Pick-up
          </button>

        </td>

      </tr>

    ))}

  </tbody>

</table>
            </div>

<div className="px-lg py-lg bg-stone-50/30 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">

  <div className="flex items-center gap-4">

    <span className="text-sm text-stone-500">

  Showing{" "}

  {totalElements === 0
    ? 0
    : currentPage * 10 + 1}

  -

  {Math.min(
    (currentPage + 1) * 10,
    totalElements
  )}

  {" "}of{" "}

  {totalElements}

  {" "}entries

</span>

  </div>

  <div className="flex items-center gap-1">

    {/* PREV */}
    <button
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-200 text-stone-400 hover:bg-stone-50"
      type="button"
      onClick={() =>
        setCurrentPage((prev) =>
          Math.max(prev - 1, 0)
        )
      }
      disabled={currentPage === 0}
    >
      <span className="material-symbols-outlined">
        chevron_left
      </span>
    </button>

    {/* PAGES */}
    {Array.from(
      { length: totalPages },
      (_, index) => (

        <button
          key={index}
          type="button"
          onClick={() =>
            setCurrentPage(index)
          }
          className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold ${
            index === currentPage
              ? "bg-primary text-white"
              : "border border-transparent text-stone-600 hover:bg-stone-100"
          }`}
        >
          {index + 1}
        </button>

      )
    )}

    {/* NEXT */}
    <button
      className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50"
      type="button"
      onClick={() =>
        setCurrentPage((prev) =>
          Math.min(
            prev + 1,
            totalPages - 1
          )
        )
      }
      disabled={
        currentPage ===
        totalPages - 1
      }
    >
      <span className="material-symbols-outlined">
        chevron_right
      </span>
    </button>

  </div>

</div>
            
          </div>
        </div>
      </div>



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
         <span className="font-headline-md text-primary">
                Comments:
              </span>
         {selectedOrder?.shortDescription && (
                <p className="text-on-surface-variant font-body-md text-sm mb-sm">
                  {selectedOrder.shortDescription}
                </p>
              )}

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

<button
  type="button"
  onClick={() =>
    handleDelete(
      selectedOrder.id
    )
  }
  disabled={
    !selectedOrder.isDeleted
  }
  className={`
    flex-1 py-md font-epilogue font-bold
    rounded-lg transition-all flex
    items-center justify-center gap-sm
    ${
      selectedOrder.isDeleted
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
    data-icon="delete"
  >
    delete
  </span>

  Delete

</button>
      
    </div>
  </div>
)}
    
    </div>
  );
};

export default OrderManagement;
