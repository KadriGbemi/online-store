export default {
  name: "Header",
  props: {
    isLoading: Boolean,
    searchItems: Array,
  },
  data: () => ({
    searchInput: null,
    select: null,
  }),
  watch: {
    searchInput(input) {
      input && input === this.select && this.$emit("selectProduct", input);
      input && input !== this.select && this.$emit("searchProducts", input);
    },
  },

  methods: {
    displayCartDrawer() {
      this.$emit("showDrawer");
    },
  },
};
