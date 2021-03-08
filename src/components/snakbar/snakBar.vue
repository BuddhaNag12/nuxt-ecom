<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar" :timeout="timeout" right>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, magnam!
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: true,
      timeout:3000,
    };
  }
};
</script>