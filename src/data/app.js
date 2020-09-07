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
    cartItemsCount: 0,
    cartItems: [],
    loading: true,
    drawer: null,
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
    handleCartItems(product) {
      const findIndex = this.cartItems.findIndex(
        (item) => item.id === product.id
      );
      if (findIndex === -1) {
        this.cartItems = this.cartItems.concat(product);
      } else {
        this.cartItems[findIndex].qty += 1;
      }
      this.cartItemsCount = this.cartItems.length;
    },
    removeItemFromCart(id) {
      this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== id);
      this.cartItemsCount = this.cartItems.length;
    },
  },
};
