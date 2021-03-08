<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col class="col-sm-12 col-md-4 col-lg-3 col-xs-12" v-for="product in productData " :key="product.id">
          <v-skeleton-loader v-if="loading" class="mx-auto" max-width="300" type="card" transition="scale"></v-skeleton-loader>
        <v-hover>
          <template >
            <v-card class="ma-3 text-xs-center card" hover :to="/view/+product.id">
              <v-responsive class="pt-4">
                <v-avatar size="200">
                  <img :src="product.img" alt="avatar" />
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <h1 class="subheading display-1">{{product.name}}</h1>
                <h1 class="grey--text caption">RS.{{product.price}}</h1>
                <h2 class="caption">{{product.desc}}</h2>
              </v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["productData", "loading"]
};
</script>


<style scoped>
.card {
  border-bottom: 2px solid red;
}
</style>