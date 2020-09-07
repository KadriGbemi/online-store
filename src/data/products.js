export default {
    name: "Products",
    props: {
      isLoading: Boolean,
      products: Array,
    },
    data: () => ({
      searchList: []
    }),
  mounted: function (){
  // this.searchList = this.props.products;
  },
    methods: {
        addToCart(product) {
            console.log("View added product", product);
          },
    },
  };
