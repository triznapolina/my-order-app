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
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post(`/auth/login`, data),
  refreshToken: (data) => api.post('/auth/refresh', data),
  getUserInfo: (token) => api.get(`/auth/user-info`, token),
  extractRole: (token) => api.get(`/auth/role?token=${encodeURIComponent(token)}`),
  extractId: (id) => api.get(`/auth/client/id?token=${encodeURIComponent(token)}`),
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

  updateFood: (foodId, food) => {
      return api.put(`/catalog/foods/${foodId}`, food);
    
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
    api.patch(`/orders/${id}/cancel`, null, {
      params: { type },
    }),

  updateStatus: (id, status) =>
    api.patch(`/orders/${id}/status`, null, {
      params: { status },
    }),

  updateTotal: (id) =>
    api.patch(`/orders/${id}/total`),

  getAllOrders: (filterRequest) =>
    api.post("/orders/filter", filterRequest),
};


export const orderItemService = {

  createItem: (data) => {
    return api.post('/order-items', data);
  },

  updateItem: (data) => {
    return api.put('/order-items', data);
  },

  deleteItem: (id) => api.delete(`/order-items/${id}`),

  getItem: (id) => {
    return axios.get('/order-items/${id}', getAuthConfig());
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

};

export default api;