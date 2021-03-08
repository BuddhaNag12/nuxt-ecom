<template>
  <v-footer height="auto" elevation="2" padless tile>
    <v-card flat tile color="#e43f5a" class="lighten-1 white--text text-center flex">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-3" dark icon :to='icon.route' nuxt>
          <v-icon size="20px"  >{{icon.icon}}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">TStore All right reserved</v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text text-center">
        &copy;{{new Date().getFullYear()}}-
        <strong>T Store</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-facebook ", route: "/" },
      { icon: "mdi-twitter",  route: "/" },
      {icon: "mdi-linkedin",  route:'/'},
      {icon:"mdi-instagram",  route:'/'}
    ]
  })
};
</script>

<style>
</style>