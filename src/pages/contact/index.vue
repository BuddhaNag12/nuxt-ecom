<template>
    <div>
        contact us page
    </div>
</template>

<script>
export default {
     head () {
    return {
      title: 'Contact',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { name: 'description', content: 'My custom description contact' },
          ],
    }
  }
}
</script>