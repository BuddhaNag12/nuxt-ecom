<template>
  <div>
    <v-container fluid>
      <v-row >
        <v-col class="col-lg-6 col-sm-12">
          <v-card>
            <v-carousel
            light
              height="410px"
              cycle
              hide-delimiter-background
              progress
              progress-color="white"
              delimiter-icon="mdi-minus"
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="item in caro_data"
                :key="item.key"
                :src="item.img"
                contain
                reverse-transition="fade-transition"
                transition="fade-transition"
                class="red darken-1"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col class="col-lg-6 col-sm-12">
          <v-card flat>
            <v-card-text class="headline text-uppercase ">Shop<span class="red--text"> exclusive</span> </v-card-text>
            <v-img src="shopping/online.jpg" height="56vh">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4" class="pb-2">
          <v-card class="Hero-info">
            <v-icon color="orange" size="50" class="ma-2">mdi-truck-delivery</v-icon>
            <v-card-text>
              <h4>Free Delivery</h4>
              <h5>on order above 1000/-</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="pb-2">
          <v-card class="Hero-info">
            <v-icon color="red" size="50" class="ma-2">mdi-forum</v-icon>
            <v-card-text>
              <h4>Dedicated support</h4>
              <h5>Live chat on Discord</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="Hero-info">
            <v-icon color="blue" size="50" class="ma-2">mdi-cart-arrow-down</v-icon>
            <v-card-text>
              <h4>Secure</h4>
              <h5>Payment through shopify</h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["caro_data"],
  data: () => ({
    model: null,
    prevIcon: false,
    nextIcon: false,
    centerActive: false,
    opacity: 0.2
  })
};
</script>

<style scoped>
.Hero-info {
  border-bottom: 2px solid red !important;
}
</style>