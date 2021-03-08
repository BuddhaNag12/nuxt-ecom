<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                   <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="name"
                      label="Name"
                      id="name"
                      v-model="name"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                  <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="phone"
                      label="Phone"
                      id="phone"
                      v-model="phone"
                      type="number"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
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
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      Sign up
                       <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        name:'',
        phone:'',
        email: '',
        password: '',
        confirmPassword: ''

      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : 'Matched'
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      },
       user(){
      return this.$store.getters.user
    }
    },
    mounted(){
      if(this.user){
            this.$router.push('/profile')
      }
    },

    methods: {
      onSignup () {
    //     this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    //      this.$store.dispatch('addUser', {email: this.email, password: this.password,name:this.name,phone:this.phone})

        this.$fireAuth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
            alert("login success")
        }).catch((err)=>{
            setTimeout(()=>{
                this.err=''
            },3000)
            this.err=err
            console.log(err);
        })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>