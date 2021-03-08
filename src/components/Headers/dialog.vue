<template>
  <div >
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="400px"
      :close-on-content-click="closeOnContentClick"
    >
      <template v-slot:activator="{ on }" >
        <v-badge color="accent" overlap left :value="hasProduct" >
          <template v-slot:badge >
            <span v-if="hasProduct">{{ numberOfItems }}</span>
          </template>
          <v-btn color="#00005c"  v-on="on" icon fab elevation="2">
            <v-icon color="white">mdi-cart</v-icon>
          </v-btn>
        </v-badge>
      </template>
      <subDialog
        :getProductsInCart="getProductsInCart"
        :numberOfItems="numberOfItems"
        :hasProduct="hasProduct"
      />
    </v-dialog>
  </div>
</template>

<script>
import subDialog from "./subdialog/Subdialog";
export default {
  props: ["closeOnContentClick", "getProductsInCart"],
  components: {
    subDialog
  },
  data: () => ({
    dialog: false,
    numberOfItems: 0,
    ProductQuantity: 0,
    previousProducts: []
  }),

  // watch: {
  //   numberOfItems: function() {
  //     this.dialog = true;
  //   }
  // },
  computed: {
    hasProduct() {
      this.numberOfItems = this.getProductsInCart.length;
      return this.getProductsInCart.length > 0;
    }
  }
};
</script>