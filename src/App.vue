<template>
  <v-app>
    <keep-alive>
      <Header
        v-if="searchData.length > 0"
        :product-names="searchData"
        :is-loading="loading"
      />
    </keep-alive>
    <v-main>
      <keep-alive>
        <Products
          v-if="products.length > 0"
          :is-loading="loading"
          :products="products"
        />
      </keep-alive>
    </v-main>
  </v-app>
</template>



<script src="./data/app.js"> </script>

