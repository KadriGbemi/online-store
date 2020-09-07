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

            <!-- <v-card-title>{{ product.title }}</v-card-title>

            <v-card-text>
              <div>{{ product.description }}</div>
              <v-spacer />
            </v-card-text> -->
            <v-card-text>
              <h2 class="title primary--text">
                {{ product.title }}
              </h2>
              {{ product.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer />

              <v-btn
                color="deep-purple lighten-2"
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
