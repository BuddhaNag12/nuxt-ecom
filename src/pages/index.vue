<template>
  <div>
    <carousel :caro_data="getProductsFromDb" />
    <v-container fluid>
      <h4 class="font-weight-light text-sm-center display-1">
        All new
        <span class="red--text">LATEST</span>
      </h4>
      <v-responsive class="mx-auto mb-4" width="120">
        <v-divider class="mb-2" color="red lighten-2"></v-divider>
      </v-responsive>
      <ProductCard :productData="getProductsFromDb" :loading="loading" />
    </v-container>
  
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {

  components: {
    carousel: () => import("@/components/cards/HeroSection"),
    ProductCard: () => import("@/components/cards/productCard"),
  },

  data: () => ({
    Allproducts: [
      { name: "test1", price: "20", id: "1", img: "Footwear/shoes.jpg" },
      { name: "test3", price: "30", id: "2",  img: "trousers/pents.jpg"},
      { name: "test4", price: "50", id: "3", img: "tshirts/shirt.jpg"},
      { name: "test5", price: "60", id: "4", img: "winterwear/winter.jpg"}
    ],
    err: ""
  }),

  computed: {
    ...mapGetters(["loadProducts", "getProductsInCart",'getProductsFromDb']),
    loading() {
      return this.$store.getters.loading;
    },

  },

};
</script>
