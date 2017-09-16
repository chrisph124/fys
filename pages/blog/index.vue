<template>
  <transition name="page" mode="out-in">
    <div>
      <search/>
      <div class="columns is-marginless">
        <left-col :categories="categories" />
        <right-col v-show="!isShow" :blogs="blogsData" :countall="countAlls" :allpage="allPages" :pagecurrent="pageCurrents" :url="urls" />

      </div>
    </div>
  </transition>
</template>

<script>
import axios from '~/plugins/axios'
import search from '~/components/search/search.vue'
import leftCol from '~/components/blogComp/blogLeftCol.vue'
import rightCol from '~/components/blogComp/blogRightCol.vue'
export default {
  components: { leftCol, rightCol, search },
  async asyncData ({ params }) {
    let dataBlog = await axios.get(`/api/blogs/?trang=${params.pages}`)
    let categories = await axios.get(`/api/get-cate-sidebar`)
    return {
      categories: categories.data,
      blogsData: dataBlog.data.blogs,
      countAlls: dataBlog.data.countAll,
      allPages: dataBlog.data.allpage,
      pageCurrents: dataBlog.data.pageCurrent,
      urls: '/blog/page/'
    }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>
