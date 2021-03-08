<template>
  <nav>
    <v-app-bar  app elevation="1" color="#e43f5a" dark >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title >
        <v-btn  to="/" icon exact-active-class="none" nuxt><v-icon >local_mall</v-icon></v-btn> <span class="font-weight-bold">Be </span><span >Desi 😉</span>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-toolbar-items class="hidden-sm-and-down pa-2" v-for="item in items" :key="item.title">
        <v-btn text :to="item.route" nuxt exact-active-class="isActive" class="navLink">{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-layout class="ma-2 d-flex justify-end">
        <Menu :menuItems="menuItems" />
        <navDialog
          :closeOnContentClick="closeOnContentClick"
          :getProductsInCart="getProductsInCart"
        />
      </v-layout>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app left color=" #e43f5a">
      <v-list class="primary">
        <v-list-item>
          <v-list-item-content>
            <v-subheader class="white--text">More Options</v-subheader>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-icon @click.stop="drawer=!drawer" color="white">mdi-close</v-icon>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-btn :to="item.route" text block class="d-flex justify-center navBtn" nuxt>
              <v-icon  >{{item.icon}}</v-icon>
              {{item.title}}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "AppBar",

  components: {
    navDialog: () => import("@/components/Headers/dialog"),
    Menu: () => import("@/components/Headers/menu"),
  },

  data() {
    return {
      items: [
        { title: "Categories", icon: "mdi-currency-eth", route: "/categories" },
        { title: "Man", icon: "mdi-gender-male", route: "/types/man" },
        { title: "Woman", icon: "mdi-gender-male-female", route: "/types/woman" },
        { title: "About", icon: "mdi-information-outline", route: "/about" }
      ],
      messages:[{name:"hello"}],
      drawer: false,
      dialog: false,
      closeOnContentClick: false
    };
  },

  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    menuItems() {
      let menuItems = [
        { icon: "mdi-key", title: "Sign in", route: "/Auth/login" },
        { icon: "mdi-pen", title: "Sign up", route: "/Auth/signup" }
      ];
      //if user is authenticated then shows different icon
      if (this.authUser) {
        menuItems = [
          { icon: "mdi-account", title: "Profile", route: "/profile" }
        ];
      }
      return menuItems;
    },
    ...mapGetters(["getProductsInCart"])
  },


};
</script>

<style scoped>
.isActive{
  content: '';

}

.navLink:hover{
font-size: 16px;
  border-bottom: 2px solid #f5f5f5;
}
.navLink{
 transition: font-size 0.5s ease-in-out , border-bottom 0.5s ease-in-out;
}
</style>
