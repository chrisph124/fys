<template>
  <div>
    <carousel-comp/>
    <div id="detail">Details</div>
    <related-comp/>
  </div>
</template>

<script>
import carouselComp from '~/components/detailHouseComp/carousel'
import relatedComp from '~/components/detailHouseComp/related'
export default {
  components: {carouselComp, relatedComp}
}
</script>

<style scoped>

</style>
