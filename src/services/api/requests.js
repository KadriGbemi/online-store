import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com/products";

export function getAllProducts() {
  return axios({
    headers: {
      "Content-Type": "application/json"
    },
  });
}

// export function getAllProducts() {
//     return axios({
//       headers: {
//         "Content-Type": "application/json"
//       },
//     });
//   }