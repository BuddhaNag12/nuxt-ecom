<template>
  <h1>The About Page !</h1>
</template>

<script>
export default {



   head () {
    return {
      title: 'About',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid:'description', name: 'description', content: 'About'},
          ],
    }
  }
}
</script>

<style >

</style>