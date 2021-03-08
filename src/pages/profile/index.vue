    <template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" >
          <h4 class="black--text text-sm-left font-weight-light">Your account</h4>
          <h1 class="text-centet pl-2" v-if="user">{{user.name}}</h1>
          <v-avatar color="indigo" size="36" v-if="user">
       <v-img :src="user.img" ></v-img>
    </v-avatar>
        </v-row>
        <v-row align="center" justify="center"  style="height: 300px;">
          <v-card v-for="n in options" :key="n.type" class="ma-3 pa-6" tile hover :to="n.path">
            <v-icon>{{n.icon}}</v-icon>
            <v-card-text>{{n.title}}</v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {

  // middleware:'routerValidate',
  data: () => ({
    options: [
      {
        type: "editProfile",
        icon: "mdi-account-edit",
        path: "/editProdile",
        title: "Edit Account Details"
      },
      {
        type: "viewOrders",
        icon: "mdi-airplane-takeoff",
        path: "profile/orders/",
        title: "View Order Details"
      }
    ]
  }),

  computed:{
    user(){
      return this.$store.getters.user
    },
  },
  mounted(){
    if(!this.user){
      this.$router.push('/Auth/login')
    }
  },



};
</script>