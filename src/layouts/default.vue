<template >
  <div>
    <div v-if="isLoading" class="center">
    <div class="lds-ripple"><div></div><div></div></div>
    </div>
    <v-app v-else>
      <AppBar />
      <v-content>
        <v-container fluid class="text-center mx-auto" >
          <nuxt />
        </v-container>
          <snakBar />
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
export default {
  components: {
    AppBar: () => import("@/components/appBar"),
    Footer: () => import("@/components/Footer"),
    snakBar: () => import("@/components/snakbar/snakBar")
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
     this.isLoading = false;
  }
};
</script>

<style  scoped>
.center{

text-align: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(233, 76, 76);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>