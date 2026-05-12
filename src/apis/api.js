import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  config => {

    if (config.url.includes('/auth/token')) {

      delete config.headers.Authorization;

      return config;
    }

    const token =
      localStorage.getItem('token');

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  error => Promise.reject(error)
);

api.interceptors.response.use(

  response => response,

  async error => {

    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/token')
    ) {

      originalRequest._retry = true;

      try {

        const refreshToken =
          localStorage.getItem('refreshToken');

        if (!refreshToken) {

          showSessionExpiredModal();

          return Promise.reject(error);
        }

        const response =
          await authService.getNewToken({
            refreshToken
          });

        const newAccessToken =
          response.data.accessToken;

        localStorage.setItem(
          'token',
          newAccessToken
        );

        api.defaults.headers.common.Authorization =
          `Bearer ${newAccessToken}`;

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return api(originalRequest);

      } catch (refreshError) {

        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

        showSessionExpiredModal();

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

function showSessionExpiredModal() {

  if (
    document.getElementById(
      'session-expired-modal'
    )
  ) {
    return;
  }

  const modal =
    document.createElement('div');

  modal.id = 'session-expired-modal';

  modal.innerHTML = `
    <div
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      "
    >
      <div
        style="
          background: white;
          padding: 24px;
          border-radius: 12px;
          width: 320px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        "
      >
        <h3
          style="
            margin-bottom: 16px;
            font-size: 18px;
          "
        >
          Сессия завершена
        </h3>

        <p
          style="
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 1.4;
          "
        >
          Ваше время пребывания на страницах
          веб-приложения подошло к концу.
          Чтобы продлить сессию,
          необходимо авторизоваться.
        </p>

        <button
          id="go-login-btn"
          style="
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            background: black;
            color: white;
          "
        >
          Авторизоваться
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document
    .getElementById('go-login-btn')
    .addEventListener('click', () => {

      window.location.href = '/login';
    });
}

export const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post(`/auth/login`, data),
  refreshToken: (data) => api.post('/auth/refresh', data),
  getUserInfo: (token) => api.get(`/auth/user-info`, token),
  extractRole: (token) => api.get(`/auth/role?token=${encodeURIComponent(token)}`),
  extractId: (id) => api.get(`/auth/client/id?token=${encodeURIComponent(token)}`),
  getNewToken: (data) => { return api.post('/auth/token', data);},

};

export const userService = {
  updateClient: (data) => api.put('/clients', data),
  getInfoById: (id) => api.get(`/clients/${id}`),
  delete: (id) => api.delete(`/clients/${id}`),
  getAll: (page, size) => api.get('/clients', { params: { page, size } }),
  getClientByEmail: (email) => api.get('/clients/email', { params: { email } }),
  activate: (id, active = true) => api.patch(`/clients/${id}/activate`, null, { params: { active } }),
  deactivate: (id, active = false) => api.patch(`/clients/${id}/deactivate`, null, { params: { active } }),
  getClientAddress:(id) => api.get(`/clients/address/${id}`),
};


export const foodService = {
  createFood: (food, image) => {
    const formData = new FormData();

    formData.append(
      "food",
      new Blob([JSON.stringify(food)], { type: "application/json" })
    );

    if (image) {
      formData.append("image", image);
    }

    return api.post("/catalog/foods", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateFood: (foodId, food, image) => {

    const formData = new FormData();

    formData.append(
        "food",
        new Blob(
            [JSON.stringify(food)],
            { type: "application/json" }
        )
    );

    if (image) {
        formData.append("image", image);
    }

    return api.put(
        `/catalog/foods/${foodId}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
},

  deleteFood: (foodId) =>
    api.delete(`/catalog/foods/${foodId}`),

  deactivateFood: (id, active) =>
    api.patch(`/catalog/foods/${id}/deactivate`, null, {
      params: { active },
    }),

  activateFood: (id, active) =>
    api.patch(`/catalog/foods/${id}/activate`, null, {
      params: { active },
    }),

  getFoodById: (id) =>
    api.get(`/catalog/foods/${id}`),

  getAllFoods: (page, size) =>
  api.get('/catalog/foods/all', {
    params: { page, size },
  }),

  getByCategory: (categoryId) =>
    api.get(`/catalog/foods/category/${categoryId}`),

  searchByName: (name) =>
    api.get("/catalog/foods/search", {
      params: { name },
    }),

  getByPriceRange: (minRange, maxRange) =>
    api.get("/catalog/foods/price", {
      params: { minRange, maxRange },
    }),

  getByCategoryAndPriceRange: (
  categoryId,
  minRange,
  maxRange
) =>
  api.get(
    "/catalog/filter-by-category/price",
    {
      params: {
        categoryId,
        minRange,
        maxRange,
      },
    }
  ),  

  getImage: (id) =>
    api.get(`/catalog/images/${id}`, {
      responseType: "blob",
    }),
};

export const categoryService = {
  create: (data) => api.post('/food-category', data),
  update: (id, data) => api.put(`/food-category/${id}`, data),
  getById: (id) => api.get(`/food-category/${id}`),
  getAll: (page, size) =>
  api.get('/food-category/all', {
    params: { page, size },
  }),
  delete: (id) => api.delete(`/food-category/${id}`),
  getId: (data) => api.get('/food-category', data)
};

export const restaurantService = {
  create: (data) => api.post('/restaurants', data),
  update: (id, data) => api.put(`/restaurants/${id}`, data),
  getById: (id) => api.get(`/restaurants/${id}`),
  getAll: (page, size) =>
    api.get('/restaurants', {
      params: { page, size },
    }),
  getByAddress: (address) =>
    api.get('/restaurants/by-address', {
      params: { address },
    }),
  delete: (id) => api.delete(`/restaurants/${id}`),
};


export const orderService = {

  getByClientId: (clientId) => api.get(`/orders/client/${clientId}`),

  getOrder: (id) =>
    api.get(`/orders/${id}`),

  createOrder: (data) =>
    api.post("/orders", data),

   updateOrder: (orderId, data) =>
    api.put(`/orders/${orderId}`, data),

  deleteOrder: (id) =>
    api.delete(`/orders/${id}`),

  getOrdersByDate: (date) =>
    api.get("/orders/by-date", {
      params: { date },
    }),

  getOrdersByClient: (clientId) =>
    api.get(`/orders/client/${clientId}`),

  cancelOrder: (id, type) =>
  api.patch(`/orders/${id}/ready`, {}, {
    params: {
      type: Boolean(type),
    },
  }),

 getOrdersByStatus: (clientId,status) =>
  api.get(
    `/orders/status/${clientId}`,
    {
      params: {
        status: String(status),
      },
    }
  ),


  setIsDeleted: (id, status) =>
  api.patch(
    `/orders/${id}/deleted`,
    null,
    {
      params: {
        status,
      },
    }
  ),

  updateStatus: (id, status) =>
    api.patch(`/orders/${id}/status`, null, {
      params: { status },
    }),

  updateTotal: (id) =>
    api.patch(`/orders/${id}/total`),

  getAllOrders: (filterRequest) =>
    api.post("/orders/filter", filterRequest),

   filterOrders: (params) =>
    api.get("/orders/filter", {
      params,
    }),

  getNonCompletedByClient: (clientId) =>
  api.get(`/orders/client/non-completed/${clientId}`),
};


export const orderItemService = {

  createItem: (data) => {
    return api.post('/order-items', data);
  },

  updateItem: (data) => {
    return api.put('/order-items', data);
  },

  deleteItem: (orderId, foodId) => { api.delete(`/order-items/delete/${orderId}`,{ params: { foodId } } ); },

  getItem: (id) => {
     api.get(`/order-items/${id}`);
  },
};

export const cardService = {

  create: (clientId, data) => api.post(`/cards/${clientId}`, data),

  getByClientId: (clientId) => api.get(`/cards/client/${clientId}`),

  getById: (id) => api.get(`/cards/${id}`),

  delete: (id) => api.delete(`/cards/${id}`)

};


export const deliveryService = {

  create: (orderId, data) =>
    api.post(`/delivery/${orderId}`, data),

  getByOrderId: (orderId) =>
    api.get(`/delivery/${orderId}`),

};

export const paymentService = {

  approve: (cardId, orderId) =>
    api.post(`/payments/approve`, null, {
      params: {
        cardId,
        orderId,
      },
    }),

  getByOrderId: (orderId) =>
    api.get(`/payments/${orderId}`),  

   getById: (id) =>
    api.get(`/payments/by/${id}`),  

};

export default api;