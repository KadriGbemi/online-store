import { getAllProducts } from "../services/api/requests";
import Header from "../components/Header.vue";
import Products from "../pages/Products.vue";

export default {
  name: "App",

  components: {
    Header,
Products
  },
  data: () => ({
    products: [],
    searchData: [],
    loading: true,
  }),
  mounted: function () {
    getAllProducts().then((res) => {
      this.loading = false;
      this.products = res.data;
      this.searchData = res.data.map(product=> product.title);
    });
  },
};
