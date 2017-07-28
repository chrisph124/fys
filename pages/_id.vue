<template>
    <section class="container">
        <img :src="details.url" alt="Nuxt.js Logo" class="logo"/>
        <h1 class="title">
            Blog
        </h1>
        <h2 class="info">
            # {{ details.blog_id }}
        </h2>
        <nuxt-link class="button" to="/blog">

        </nuxt-link>
        <h1>{{ details.title }}</h1>
        <h3>{{ details.first_name}} {{ details.last_name }} </h3>
        <h3>{{details.create_at | moment("DD/MM/YYYY")}}</h3>
        <h4>{{details.cate_name}}</h4>
        <p>{{details.content}}</p>
    </section>
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
  import axios from '~plugins/axios'

  export default {
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
