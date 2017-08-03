<template>
    <div>
        <search/>
        <div class="columns is-marginless">
            <left-col/>
            <right-col v-show="!isShow" :blogs="blogsData"/>
            <!--<detail-col v-show="isShow" :details="detailsData"/>-->
        </div>
    </div>
</template>


<script>
  import axios from '~plugins/axios'
  import search from '~components/search/search.vue'
  import leftCol from '~components/blogComp/blogLeftCol.vue'
  import rightCol from '~components/blogComp/blogRightCol.vue'
  /* import detailCol from '~components/blogComp/blogDetail.vue' */
  export default {
    components: {leftCol, rightCol, search},
    async asyncData ({params}) {
      let dataBlog = await axios.get('/api/blogs/cate/' + `${params.id}`)
        /* let {dataDetail} = await axios.get('/api/blogs/:id') */
      return {
        blogsData: dataBlog.data
          /* detailsData: dataDetail */
      }
    },
    data () {
      return {
        blogsData: '',
          /* detailsData: '', */
        isShow: false
      }
    }
  }
</script>
