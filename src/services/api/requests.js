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

