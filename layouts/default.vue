<template>
  <div>
    <my-nav/>
    <nuxt id="nuxt"/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyNav from '~/components/Nav.vue'

export default {
  components: {
    MyFooter, MyNav
  }
}
</script>

<style>
body {
  overflow-x: initial
}
.container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

#nuxt {
  margin: 0 0 1rem 0
}
</style>
