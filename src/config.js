const BASE_URL = 'http://3.34.52.65:8000';

const API = {
  signin: `${BASE_URL}/users/signin`,
  signup: `${BASE_URL}/users/signup`,
  signUsername: `${BASE_URL}/users/username`,
  signEmail: `${BASE_URL}/users/email`,
  product: `${BASE_URL}/product`,
  cart: `${BASE_URL}/cart`,
  orders: `${BASE_URL}/orders`,
};

export default API;
