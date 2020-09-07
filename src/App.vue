<template>
  <v-app>
    <Header
      v-if="searchItems.length > 0"
      :search-items="searchItems"
      :cart-items-count="cartItemsCount"
      :is-loading="loading"
      @searchProducts="handleSearchProducts"
      @selectProduct="handleSelectProduct"
      @showDrawer="handleCartDrawerDisplay"
    />
    <v-main>
      <v-sheet
        class="overflow-hidden"
        style="position: relative;"
      >
        <Products
          v-if="productItems.length > 0"
          :is-loading="loading"
          :products="productItems"
          @cartItems="handleCartItems"
        />
        <CartDrawer
          v-if="cartItems.length > 0 && drawer"
          :cart-items="cartItems"
          :drawer="drawer"
          @showDrawer="handleCartDrawerDisplay"
          @removeItemFromCart="removeItemFromCart"
        />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script src="./data/app.js"></script>
