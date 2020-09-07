import axios from "axios";

axios.defaults.baseURL = "https://my-json-server.typicode.com/KadriGbemi/store-mock-api/products";

async function handleAPIRequest(options) {
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    return undefined;
  }
}

export function getAllProducts() {
  return handleAPIRequest({
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateProduct(productId) {
  return handleAPIRequest({
    method: "PUT",
    url: productId,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function deleteProduct(productId) {
  return handleAPIRequest({
    method: "DELETE",
    url: productId,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
