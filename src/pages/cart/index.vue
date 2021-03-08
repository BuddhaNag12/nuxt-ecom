<template>
  <v-container>
    <v-row no-gutters class="justify-center">
      <v-col cols="6">
        <v-card v-if="numberOfItems>=1">
          <v-list>
            <v-subheader class="justify-center">Items in the cart</v-subheader>
            <v-list-item v-for="(product, index) in getProductsInCart" :key="index">
              <v-list-item-icon>
                <v-img :src="product.imageUrl" max-width="200px"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="product.name"></v-list-item-title>
                <v-btn @click="remove(index,product.id,product.sQuantity)" color="red" rounded icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
        <div v-else class="text-center">
          <h1 class="display-1">Cart is empty 😢</h1>
          <v-img src="/shopping/emptycart.png" max-height="100vh" contain></v-img>
        </div>
        <v-divider></v-divider>
        <div class="subheading" v-if="hasProduct()">Total: Rs. {{ totalPrice() }}, 00</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    numberOfItems: 0,
    products: []
  }),

  computed: {
    ...mapGetters(["getProductsInCart"])
  },

  mounted() {
    this.getProducts;
  },
  methods: {
    ...mapMutations(["REMOVE_PRODUCT", "Reset_cart"]),
    getProducts() {
      this.getProductsInCart.forEach(data => {
        this.products.push({
          name: data.name
        });
      });
    },
    hasProduct() {
      this.numberOfItems = this.getProductsInCart.length;
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index, id, sQuantity) {
      let obj = { id, sQuantity };
      this.REMOVE_PRODUCT(index);
     // this.Reset_cart(obj);
    }
  },

  head() {
    return {
      title: "Cart",
      meta: [{ name: "description", content: "description Cart" }]
    };
  }
};
</script>
