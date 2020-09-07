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
        color="green"
        content="6"
      >
        <v-icon @click="displayCartDrawer">
          mdi-open-in-new
        </v-icon>
      </v-badge>
    </v-tab>
  </v-app-bar>
</template>



<script src="../data/header.js"></script>

