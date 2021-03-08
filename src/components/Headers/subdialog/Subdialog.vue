<template>
  <v-card max-width="400px">
    <v-list>
      <v-list-item-title v-if="numberOfItems<=0">
        <v-card>
          <v-subheader class="justify-center">The cart is Empty</v-subheader>
          <v-subheader class="justify-center">Add items to fullfil it</v-subheader>
          <v-img src="/shopping/addtocart.png" height="300px"></v-img>
        </v-card>
      </v-list-item-title>
      <div v-else>
        <v-list-item-title>
          <v-subheader class="justify-center">Items in the cart</v-subheader>
        </v-list-item-title>
        <v-list-item v-for="(product,index) in getProductsInCart" :key="index">
          <v-avatar>
            <!-- <v-img :src="product.imageUrl" max-width="100px"></v-img> -->
          </v-avatar>
          <v-list-item-content>
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-list-item>Name</v-list-item>
                  <v-list-item-title v-text="product.name"></v-list-item-title>
                  <v-list-item-title>
                    <div class="cyan--text">Rs.{{product.price}}/-</div>
                  </v-list-item-title>
                </v-col>
                <v-col>
                  <v-list-item>Qty</v-list-item>
                  <v-text-field
                    type="text"
                    :value="product.sQuantity"
                    style="width:40px"
                    class="mx-4"
                    disabled
                  ></v-text-field>
                </v-col>
                <v-icon
                  @click="remove(index,product.id,product.sQuantity)"
                  color="red"
                  icon
                >mdi-delete-circle</v-icon>
              </v-row>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider></v-divider>
      <div class="subheading mx-2" v-if="hasProduct">Total: Rs. {{ totalPrice() }},</div>
    </v-list>
    <v-btn class="primary" tile block to="/cart">View Cart</v-btn>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["getProductsInCart", "numberOfItems", "hasProduct"],

  methods: {
    totalPrice() {
      return this.getProductsInCart.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    ...mapMutations(["REMOVE_PRODUCT", "Reset_cart"]),
    remove(index, id, sQuantity) {
     // let obj = { id, sQuantity };
      this.REMOVE_PRODUCT(index);
      // this.Reset_cart(obj);
    }
  }
};
</script>