<template>
  <v-app>
    <Header
      v-if="searchItems.length > 0"
      :search-items="searchItems"
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
        />
        <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          temporary
        >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script src="./data/app.js"></script>
