<template>
  <div>
    <div class="categories">
      <v-container>
        <v-breadcrumbs :items="routes"></v-breadcrumbs>
        <v-sheet
          color="success"
          class="white--text font-italic font-weight-medium text-center display-2"
          elevation="3"
        >Collections</v-sheet>
        <v-col cols="md12 sm12">
          <v-row justify="space-around">
            <v-hover
              v-slot:default="{ hover }"
              v-for="item in categories"
              :key="item.name"
              class="mx-2 mt-2"
            >
              <v-card link hover :to="'/categories/'+item.name">
                <v-avatar color="grey" size="200" tile>
                  <v-img :src="item.img" alt class="cat-img" gradient>
                    <v-expand-x-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out red lighten-1 v-card--reveal display-2 white--text"
                        style="height: 100%;"
                      >{{item.title}}</div>
                    </v-expand-x-transition>
                  </v-img>
                </v-avatar>
              </v-card>
            </v-hover>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      { name: "Footwear", title: "Foot Wear", img: "Footwear/shoes.jpg" },
      {
        name: "Trousers",
        title: "Formals & Trousers",
        img: "trousers/pents.jpg"
      },
      { name: "Shirts", title: "Shirts & Tshirts", img: "tshirts/shirt.jpg" },
      { name: "Winter", title: "Winter wear", img: "winterwear/winter.jpg" }
    ],
    routes: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "Category",
        disabled: false,
        to: "/categories"
      }
    ]
  }),
  head() {
    return {
      title: "Category",
      meta: [{ name: "description", content: "My custom description category" }]
    };
  }
};
</script>