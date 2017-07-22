<template>
  <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child gold post box" v-for="blog in blogs" :key="blog.id">
          <!-- content here -->
          <p class="subtitle">
            <a href="#">
              {{ blog.name }}
            </a>
          </p>
          <p class="title">
            {{ blog.title | capitalize | truncate(10) }}
          </p>
          <p>
              {{ blog.content | truncate(500) }}
          </p>
        </article>
      </div>
    </div>
</template>

<script>
import axios from '~plugins/axios'
export default {
  props: ['blogs'],
  async asyncData () {
    let {data} = await axios.get('/api/blogs')
    return {
      blogs: data
    }
  }
}
</script>
