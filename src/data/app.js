import { getAllProducts } from "../services/api/requests";
import Header from "../components/Header.vue";
import CartDrawer from "../components/cart/Drawer.vue";
import Products from "../pages/Products.vue";

export default {
  name: "App",
  components: {
    Header,
    Products,
    CartDrawer,
  },
  data: () => ({
    productItems: [],
    productList: [],
    searchItems: [],
    searchList: [],
    loading: true,
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" },
    ],
  }),
  mounted: function () {
    getAllProducts().then((res) => {
      this.loading = false;
      this.productItems = res.data;
      this.productList = res.data;
      this.searchList = res.data.map((product) => product.title);
      this.searchItems = res.data.map((product) => product.title);
    });
  },
  methods: {
    handleSearchProducts(input) {
      this.productItems = this.productList.filter((item) => {
        return (
          (item.title || "")
            .toLowerCase()
            .indexOf((input || "").toLowerCase()) > -1
        );
      });
    },
    handleCartDrawerDisplay() {
      this.drawer = !this.drawer;
    },
    handleSelectProduct(input) {
      this.productItems = this.productList.filter((item) => {
        return item.title === input;
      });
    },
  },
};
