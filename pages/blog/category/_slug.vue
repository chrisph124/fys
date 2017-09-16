<template>
  <div>
    <search/>
    <div class="columns is-marginless">
      <left-col :categories="categories" />
      <right-col v-show="!isShow" :blogs="blogsData" :countall="countAlls" :allpage="allPages" :pagecurrent="pageCurrents" :url="urls" />
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
  components: { leftCol, rightCol, search },
  async asyncData ({ params }) {
    let dataBlog = await axios.get(`/api/blogs/` + `${params.slug}` + `/?page=` + `${params.page}`)
    let categories = await axios.get(`/api/get-cate-sidebar`)
    return {
      categories: categories.data,
      blogsData: dataBlog.data.blogs,
      countAlls: dataBlog.data.countAll,
      allPages: dataBlog.data.allpage,
      pageCurrents: dataBlog.data.pageCurrent,
      urls: `/blog/page/${params.id}/page/`
    }
  },
  data () {
    return {

      isShow: false
    }
  }
}
</script>
