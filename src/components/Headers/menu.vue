<template>
  <v-menu offset-y transition="scroll-y-transition" close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon fab>
        <v-icon color="white">mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item v-for="mitems in menuItems" :key="mitems.title">
        <v-btn text :to="mitems.route" nuxt>
          <v-icon>{{mitems.icon}}</v-icon>
          {{mitems.title}}
        </v-btn>
      </v-list-item>
      <v-list-item v-if="authUser">
                  <v-btn  text @click.prevent="logout" :loading="loading">
                    <v-icon>mdi-logout</v-icon>Logout
                  </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: ["menuItems"],

  computed:{
    ...mapState(['authUser']),
    loading(){
      this.$store.getters.loading
    }
  },
methods:{
  logout(){
    this.$store.dispatch('logout')
  }
}
};
</script>