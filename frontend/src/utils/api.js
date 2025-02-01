import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000/api'});

export const fetchProducts = () => API.get('/products');

export const placeOrder = (orderData) => API.post('/orders/place', orderData);

export const submitReview = (reviewData) => API.post('/reviews/submit', reviewData);

export default API;