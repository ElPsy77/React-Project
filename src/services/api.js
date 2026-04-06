import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com'
});

export const getProducts = (limit = 12) => api.get(`/products?limit=${limit}`);
export const getProductById = (id) => api.get(`/products/${id}`);
export const getUsers = (limit = 10) => api.get(`/users?limit=${limit}`);
export const getRandomQuote = () => api.get('/quotes/random');

export default api;
