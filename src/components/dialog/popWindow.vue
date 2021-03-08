<template>
  <v-dialog v-model="dialog" max-width="290" eager persistent>
    <v-card max-width="350">
      <v-card-title class="headline" color="red">{{title}}</v-card-title>
      <v-card-text>{{values}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="setDialog">Ok!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:['dialog','title','values'],
    methods:{
        setDialog(){
            let val=false
            this.$emit('UpDateDialog',val)
        }
    }
}
</script>