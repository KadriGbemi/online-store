<template>
  <v-app-bar
    app
    color="teal"
    dark
  >
    <h2> STOREAPI</h2>
    <!--
    <v-autocomplete
      v-model="select"
      :search-input.sync="searchInput"
      :items="searchItems"
      cache-items
      class="mx-4"
      rounded
      hide-no-data
      hide-details
      label="Search available products"
      solo-inverted
    /> -->
    <v-autocomplete
      v-model="select"
      :loading="isLoading"
      :items="searchItems"
      :search-input.sync="searchInput"
      cache-items
      class="mx-4"
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
        <v-icon>mdi-open-in-new</v-icon>
      </v-badge>
    </v-tab>
  </v-app-bar>
</template>



<script src="../data/header.js"></script>

