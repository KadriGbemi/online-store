import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com/products/';

export function getAllProducts() {
  return axios({
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function updateProduct(productId) {
  return axios({
    method: 'PUT',
    url: productId,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function deleteProduct(productId) {
    return axios({
      method: 'DELETE',
      url: productId,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
