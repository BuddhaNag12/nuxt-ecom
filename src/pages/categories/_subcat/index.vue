<template>
    <div>
        <v-breadcrumbs :items="routes" nuxt></v-breadcrumbs>
        <h1>subcat {{this.$route.params.subcat}}</h1>
    </div>
</template>

<script>
export default {
    data:()=>({
       routes: [
      {
        text: "Home",
        disabled: false,
        to: "/"
      },
      {
        text: "Category",
        disabled: false,
        href: "/categories"
      },
      
    ],
    }),
 mounted(){
    this.routes.push({
      text: this.$route.params.subcat,
      disabled: true,
      href: ""
    });
 }
}
</script>