export default {
    name: "Products",
    props: {
      isLoading: Boolean,
      products: Array,
    },
    data: () => ({
    }),
    methods: {
        addToCart(product) {
            console.log("View added product", product);
          },
    },
  };
