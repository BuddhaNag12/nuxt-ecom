<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <transition name="slide-fade">
                <v-alert color="warning" v-if="error">{{error}}</v-alert>
              </transition>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                      autocomplete
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :loading="loading" fab elevation="1">
                      <v-icon color="primary">mdi-key</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
              <v-layout row>
                <v-flex sm12>
                  <h1 class="caption">Or sign in with</h1>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <h2 class="text-center pa-2">Google Or facebook</h2>
                  <v-divider></v-divider>
                    <v-btn @click="googleSignIn" icon>
                      <v-icon color="red">mdi-google</v-icon>
                    </v-btn>
                    <v-btn @click="facebookSignIn" icon>
                      <v-icon color="blue">mdi-facebook</v-icon>
                    </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // middleware:'routerValidate',
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  mounted() {
    if (this.user) {
      this.$router.push("/profile");
    }
  },

  methods: {
    ...mapActions(["signUserIn", "SignInWithGoogle", "SignInWithFacebook"]),
    onSignin() {
      this.signUserIn({ email: this.email, password: this.password });
    },
    googleSignIn() {
      this.SignInWithGoogle();
    },
    facebookSignIn() {
      this.SignInWithFacebook();
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>