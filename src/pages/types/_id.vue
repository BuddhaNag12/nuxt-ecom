<template>
    <div>
      <v-container fluid>
           <v-breadcrumbs :items="routes"></v-breadcrumbs>
          <v-sheet
          :color="this.$route.params.id=='woman'? '#FF9671' : '#FF6F91'"
          class="white--text font-italic font-weight-medium text-center display-2"
          elevation="2"
        >Exclusive for {{this.$route.params.id}}</v-sheet>
      </v-container>
    </div>
</template>

<script>
export default {
  

data(){
    return{
       routes: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
    ]
    }
  },

mounted(){
  this.routes.push({
    text:this.$route.params.id,
    disabled:true,
    to:''
  });
  this.$route.params.id=="man" || this.$route.params.id=="woman" ? true : this.$router.push('/')
}


}
</script>