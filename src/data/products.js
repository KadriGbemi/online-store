export default {
  name: "Products",
  props: {
    isLoading: Boolean,
    products: Array,
  },
  data: () => ({}),
  methods: {
    addToCart(product) {
      this.$emit("cartItems", product);
    },
  },
};
