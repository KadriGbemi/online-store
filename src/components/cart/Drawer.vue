<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    width="50%"
    temporary
  >
    <v-list-item>
      <h4 style="color: #4c4c50">
        Shopping Cart
      </h4>
      <v-spacer />
      <v-list-item-action>
        <v-icon
          color="teal lighten-1"
          @click="displayCartDrawer"
        >
          fas fa-times
        </v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="item in cartItems"
        :key="item.title"
        link
      >
        <v-list-item-content>
          <v-list-item-title style="color:#4c4c50">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon
            small
            color="#ff404c"
            @click="handleRemoveItemCart(item.id)"
          >
            fas fa-trash
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="../../data/drawer.js"></script>