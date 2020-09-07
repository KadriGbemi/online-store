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
        console.log("Item", id)
      this.$emit("removeItemFromCart", id);
    },
  },
};
