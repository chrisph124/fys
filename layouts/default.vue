<template>
  <div>
    <my-nav/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyNav from '~components/Nav.vue'
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyNav, MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}


</style>
