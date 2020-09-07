<template>
  <v-app-bar
    app
    color="teal"
    dark
  >
    <h5> STOREAPI</h5>
    <v-autocomplete
      v-model="select"
      :loading="isLoading"
      :items="searchItems"
      :search-input.sync="searchInput"
      cache-items
      class="mx-4"
      dense
      min-width="50%"
      rounded
      hide-no-data
      hide-details
      label="Search by product name"
      solo-inverted
    />
    <v-tab>
      <v-badge
        v-if="cartItemsCount > 0"
        key="cart-items-available"
        color="green"
        :content="cartItemsCount"
      >
        <v-icon @click="displayCartDrawer">
          fas fa-cart-arrow-down
        </v-icon>
      </v-badge>
      <v-icon
        v-else
        key="cart-items-not-available"
        @click="displayCartDrawer"
      >
        fas fa-shopping-cart
      </v-icon>
    </v-tab>
  </v-app-bar>
</template>



<script src="../data/header.js"></script>

