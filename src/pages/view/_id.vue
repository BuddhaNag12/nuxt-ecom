<template>
  <v-container fluid>
    <v-layout v-if="loading" row>
      <v-flex xs12 sm12 lg6>
        <v-skeleton-loader max-width="500" type="card"></v-skeleton-loader>
      </v-flex>
      <v-flex xs12 sm12 lg6>
        <v-skeleton-loader max-width="500" type="card"></v-skeleton-loader>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="products">
      <v-flex xs12 lg6 class="pa-2">
        <popwindow
          :dialog="dialog"
          :values="popVal"
          :title="popTitle"
          @UpDateDialog="updateDialog"
        />
        <v-breadcrumbs :items="routes"></v-breadcrumbs>
        <v-card>
          <v-avatar size="300" class="grey lighten-2">
            <img :src="'/'+products.img" alt="avatar" />
          </v-avatar>
        </v-card>
      </v-flex>
      <v-flex lg6 class="mx-auto pa-2">
        <v-card>
          <v-card-actions>
            <div class="text-lg-left pa-2 text-sm-center">
              <v-btn text to="/" class="font-weight-light back-btn" tile>
                <v-icon left dark>mdi-arrow-left</v-icon>Back to shop
              </v-btn>
            </div>
          </v-card-actions>
          <v-card-text>
            <div class="font-weight-bold blue-grey--text text-uppercase display-2">{{products.name}}</div>
            <div class="body-2 black--text text-sm-center">Rs.{{products.price}}/-</div>
          </v-card-text>
          <v-card-text>
            <v-container id="dropDown" fluid>
              <v-row>
                <v-col cols="12" sm="4">
                  <p>Pack</p>
                  <v-overflow-btn
                    class="my-2"
                    label="size"
                    target="#dropDown"
                    :items="products.size"
                    v-model="size"
                    chips
                    solo
                  ></v-overflow-btn>
                </v-col>
                <v-col cols="12" sm="4">
                  <div v-if="products.quantity>0">
                    <p>Quantity</p>
                    <v-text-field placeholder="Enter quantity" v-model="sQuantity" type="number" solo></v-text-field>
                  </div>
                  <div v-else>
                    <span>Sold out</span>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <div>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>Pack</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="text-left"
                      v-if="products.quantity>0"
                    >{{ products.quantity }} Pices left</td>
                    <td class="text-left" v-else>Sold out</td>
                    <td class="text-left">{{ products.desc }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <v-card-actions>
            <v-btn
              dark
              class="ma-2"
              color="blue"
              tile
              :disabled="disabled"
              @click="addProductToCart(products,sQuantity)"
            >Add to cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" outlined color="success" tile text>Buy now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

 <script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    popwindow: () => import("@/components/dialog/popWindow")
  },
  data: () => ({
    sQuantity: null,
    size: "",
    disabled: false,
    dialog: false,
    popTitle: "",
    popVal: "",
    routes: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
       {
        text: "Product",
        disabled: true,
        to: ""
      }
    ]
  }),

  computed: {
    ...mapGetters(["loadedProduct", "getProductsInCart", "loading"]),
    products() {
      return this.loadedProduct(this.$route.params.id);
    }
  
  },

  methods: {
    // Make an mutation add to cart for quantity
    ...mapMutations(["AddToCart", "setCart"]),
    updateDialog(val) {
      this.dialog = val;
    },
    addProductToCart(products, sQuantity) {
      console.log(this.size);
      let NewProduct = { ...products, sQuantity };
      if (!sQuantity || sQuantity <= 0) {
        this.dialog = true;
        this.popTitle = `Info!`;
        this.popVal = `You need to enter minimum 1 quantity`;
      } else if (sQuantity > products.quantity) {
        this.dialog = true;
        this.popTitle = `Info!`;
        this.popVal = `out of quantity stock enter minimum ${products.quantity} `;
      } else {
        this.popVal="Item added successfully"
         this.dialog = true;
        this.AddToCart(NewProduct);
      
      }
    }
  },
  head() {
    return {
      title: "Product | "+ (this.products ? this.products.name :''),
      meta: [
        {
          name: "description",
          content: "Product description " + (this.products ? this.products.desc : '')
        }
      ]
    };
  }
};
</script>
