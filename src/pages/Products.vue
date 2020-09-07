<template>
  <v-container>
    <v-row>
      <v-col
        class="mb-2"
        cols="12"
      >
        <v-row>
          <v-card
            v-for="product in products"
            :key="product.id"
            :loading="isLoading"
            class="mx-auto my-2"
            :alt="product"
            max-width="274"
          >
            <v-img
              height="100"
              :src="product.url"
            />
            <v-card-text class="text--teal">
              <h2 class="title teal--text">
                {{ product.title }}
              </h2>
              {{ product.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="teal"
                text
                @click="addToCart(product)"
              >
                Add to Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="../data/products.js"></script>
