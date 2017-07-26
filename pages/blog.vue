<template>
    <div>
        <div class="columns is-marginless">
            <left-col/>
            <right-col v-show="isShow" :blogs="blogs"/>
            <detail-col v-show="!isShow"/>
        </div>
    </div>
</template>


<script>
  import axios from '~plugins/axios'
  import leftCol from '~components/blogComp/blogLeftCol.vue'
  import rightCol from '~components/blogComp/blogRightCol.vue'
  import detailCol from '~components/blogComp/blogDetail.vue'
  export default {
    components: {leftCol, rightCol, detailCol},
    async asyncData () {
      let {data} = await axios.get ('/api/blogs/index')
      return {
        blogs: data
      }
    }
  }
</script>
