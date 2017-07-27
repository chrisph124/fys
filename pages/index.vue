<template>
    <div class="contaier-fluid is-marginless">
        <div class="is-down">
            <info-icon/>
        </div>
        <div class="is-down">
        <real-estate/>
        </div>
        <div class="is-down">
        <info-blog :getND="dataND" :getDA="dataDA" :getMV="dataMV"  />
        </div>
        <div class="is-down">
        <why-us/>
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import infoIcon from '~components/indexComp/info-icon-block.vue'
import realEstate from '~components/indexComp/real-estate-block.vue'
import infoBlog from '~components/indexComp/info-block.vue'
import whyUs from '~components/indexComp/why-us.vue'
export default {
  components: { infoIcon, realEstate, infoBlog, whyUs },
  async asyncData () {
    let data1 = await axios.get('/api/blogfornd')
    let data2 = await axios.get('/api/blogforda')
    let data3 = await axios.get('/api/blogformv')
    return {
      dataND: data1.data,
      dataDA: data2.data,
      dataMV: data3.data
    }
  }
}
</script>

<style scoped>
</style>
