<template>
    <div>
        <search/>
        <div class="columns is-marginless">
            <left-col/>
            <right-col v-show="!isShow" :blogs="blogsData" :countall="countAlls" :allpage="allPages" :pagecurrent="pageCurrents" :url="urls"/>
            <!--<detail-col v-show="isShow" :details="detailsData"/>-->
        </div>
    </div>
</template>


<script>
  import axios from '~/plugins/axios'
  import search from '~/components/search/search.vue'
  import leftCol from '~/components/blogComp/blogLeftCol.vue'
  import rightCol from '~/components/blogComp/blogRightCol.vue'
  /* import detailCol from '~/components/blogComp/blogDetail.vue' */
  export default {
    components: {leftCol, rightCol, search},
    async asyncData ({params}) {
      let dataBlog = await axios.get(`/api/blogs/cate/` + `${params.id}` + `/?page=` + `${params.page}`)
      console.log('1222222')
        /* let {dataDetail} = await axios.get('/api/blogs/:id') */
      return {
        blogsData: dataBlog.data.blogs,
        countAlls: dataBlog.data.countAll,
        allPages: dataBlog.data.allpage,
        pageCurrents: dataBlog.data.pageCurrent,
        urls: `/blog/page/${params.id}/page/`
          /* detailsData: dataDetail */
      }
    },
    data () {
      return {
        // blogsData: '',
        // countAlls: '',
        // allPages: '',
        // pageCurrents: '',
        // urls: '/blog/page/',
          /* detailsData: '', */
        isShow: false
      }
    }
  }
</script>
