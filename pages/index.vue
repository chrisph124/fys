<template>
    <div class="contaier-fluid is-marginless">
        <div class="is-down">
            <info-icon/>
        </div>
        <div class="is-down">
        <real-estate/>
        </div>
        <div class="is-down">
        <info-blog :blogs="blogs" />
        </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'
import infoIcon from '~components/indexComp/info-icon-block.vue'
import realEstate from '~components/indexComp/real-estate-block.vue'
import infoBlog from '~components/indexComp/info-block.vue'
export default {
  components: { infoIcon, realEstate, infoBlog },
  async asyncData () {
    let {data} = await axios.get('/api/blogs')
    return {
      blogs: data
    }
  }
}
</script>

<style scoped>
</style>
