export default {
  name: "Header",
  props: {
    isLoading: Boolean,
    productNames: Array,
  },
  data: () => ({
    searchItems: [],
      searchInput: null,
    select: null,
    searchList: [],
  }),
mounted: function (){
// console.log("Search is", this.searchInput);
console.log(this.productNames)
    this.searchItems= this.productNames;
    this.searchList = this.productNames;
},
watch: {
    searchInput(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
        this.searchItems = this.searchList.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
    },
  },
};
