export default {
  name: "CartDrawer",
  props: {
    cartItems: Array,
    drawer: Boolean,
  },
  methods: {
    displayCartDrawer() {
      this.$emit("showDrawer");
    },
    handleRemoveItemCart(id) {
      this.$emit("removeItemFromCart", id);
    },
  },
};
