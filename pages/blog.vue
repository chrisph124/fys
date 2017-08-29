<template>
    <transition name="page" mode="out-in">
        <div>
            <search/>
            <div class="columns is-marginless">
                <left-col/>
                <right-col v-show="!isShow" :blogs="blogsData" :countall="countAlls" :allpage="allPages" :pagecurrent="pageCurrents" :url="urls"/>
                <!-- <ul>
                     <li v-for="animal in blogsData">
                         {{ animal.title }}
                     </li>
                 </ul>
                 <a class="pagination-link is-current" :pagination="pagination" :callback="loadData" :options="paginationOptions">1</a>
                 --><!--<detail-col v-show="isShow" :details="detailsData"/>-->
            </div>
        </div>
    </transition>
</template>


<script>
  import axios from '~/plugins/axios'
  import search from '~/components/search/search.vue'
  import leftCol from '~/components/blogComp/blogLeftCol.vue'
  /* import pagination from 'vue-bootstrap-pagination' */
  import rightCol from '~/components/blogComp/blogRightCol.vue'
  /* import detailCol from '~/components/blogComp/blogDetail.vue' */
  export default {
    components: {leftCol, rightCol, search},
    async asyncData ({params}) {
      let dataBlog = await axios.get(`/api/blogs/?trang=${params.pages}`)
      // console.log(dataBlog.data)
        /* let {dataDetail} = await axios.get('/api/blogs/:id') */
      return {
        blogsData: dataBlog.data.blogs,
        countAlls: dataBlog.data.countAll,
        allPages: dataBlog.data.allpage,
        pageCurrents: dataBlog.data.pageCurrent,
        urls: '/blog/page/'
          /* detailsData: dataDetail */
      }
    },
    data () {
      return {
        blogsData: '',
        countAlls: '',
        allPages: '',
        pageCurrents: '',
        urls: '/blog/page/',
          /* detailsData: '', */
        isShow: false
      }
    }
      /* ,
       methods: {
       loadData () {
       const options = {
       params: {
       paginate: this.pagination.per_page,
       page: this.pagination.current_page
       /!* additional parameters *!/
       }
       }
       this.$http.get('/blog', options)
       .then(response => {
       this.items = response.data.data

       // Overwrite pagination object
       this.pagination = response.data.pagination
       })
       .catch(error => {
       // handle error
       console.log(error)
       })
       }
       } */
  }
</script>
