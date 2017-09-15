<template>
    <div>
        <div class="columns is-marginless">
            <left-col/>
            <div class="col-right">
                <nav class="breadcrumb">
                    <ul>
                        <li>
                            <nuxt-link to="/blog">Blog</nuxt-link>
                        </li>
                        <li>
                            <a href="#">{{details.name}}</a>
                        </li>
                    </ul>
                </nav>
                <div class="content">
                    <div class="has-text-centered">
                        <h1>{{ details.title }}</h1>
                        <span>
                    <small>
                    <i class="fa fa-calendar"></i>
                     {{details.created_at | moment("DD/MM/YYYY")}}
                </small>
                </span>
                        <span>
                    <i class="fa fa-tags"></i>
                    <a href="#">{{details.cate_name}}</a>
                </span>
                        <span>
                    <i class="fa fa-user-o"></i>
                    <a href="#">{{details.first_name}} {{details.last_name}}</a>
                </span>
                        <span>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-send"></i></a>
                </span>
                    </div>
                    <img :src="details.url" class="logo"/>
                    <p>{{details.content}}</p>
                </div>
            </div>
            <!--<detail-col v-show="isShow" :details="detailsData"/>-->
        </div>
    </div>

</template>

<!--<script>
import axios from '~plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/users/' + params.id)
    .then((res) => {
      return { user: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'User not found' })
    })
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>-->

<script>
  import axios from '~/plugins/axios'
  import leftCol from '~/components/blogComp/blogLeftCol.vue'

  export default {
    components: {leftCol},
    async asyncData ({params}) {
      let dataDetail = await axios.get('/api/blogs/' + `${params.id}`)
      // console.log(dataDetail)
      return {
        details: dataDetail.data
      }
    },
    data () {
      return {
        details: ''
      }
    }
  }
</script>

<style scoped>
    .fa {
        display: inline;
        margin-right: 0.3rem
    }

    span, span a {
        margin-right: 0.5rem
    }
</style>
