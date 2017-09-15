<template>
  <div>
    <search/>
    <div class="contaier-fluid is-marginless">
    <div class="grey">
      <info-icon/>
    </div>
    <div class="is-down">
      <real-estate/>
    </div>
    <div class="is-down grey">
      <info-blog :getND="dataND" :getDA="dataDA" :getMV="dataMV" />
    </div>
    <div class="is-down">
      <find-by-building/>
    </div>
    <div class="is-down grey">
      <find-by-district/>
    </div>
    <div class="is-down">
      <why-us/>
    </div>
  </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import search from '~/components/search/search.vue'
import infoIcon from '~/components/indexComp/info-icon-block.vue'
import realEstate from '~/components/indexComp/real-estate-block.vue'
import infoBlog from '~/components/indexComp/info-block.vue'
import findByBuilding from '~/components/indexComp/findByBuilding.vue'
import findByDistrict from '~/components/indexComp/findByDistrict.vue'
import whyUs from '~/components/indexComp/why-us.vue'
export default {
  components: { realEstate, infoBlog, findByBuilding, findByDistrict, infoIcon, whyUs, search },
  async asyncData () {
    let { data: data1 } = await axios.get('/api/blogfornd')
    let { data: data2 } = await axios.get('/api/blogforda')
    let { data: data3 } = await axios.get('/api/blogformv')
    return {
      dataND: data1,
      dataDA: data2,
      dataMV: data3
    }
  }
}
</script>
<style scoped>

</style>
