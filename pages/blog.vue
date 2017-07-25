<template>
  <div>
    <div class="columns is-marginless">
        <left-col/>
        <right-col v-show="!isShow" :blogs="blogs" />
        <detail-col v-show="isShow"/>
    </div>
  </div>
</template>


<script>
import axios from '~plugins/axios'
import leftCol from '~components/blogComp/blogLeftCol.vue'
import rightCol from '~components/blogComp/blogRightCol.vue'
import detailCol from '~components/blogComp/blogDetail.vue'
export default {
  components: { leftCol, rightCol, detailCol },
  async asyncData () {
    let {data} = await axios.get('/api/blogs')
    return {
      blogs: data
    }
  },
  data () {
    return {
      isShow: false,
      text1: 'Voluptate quam quasi vitae aut vitae. Mollitia possimus velit consectetur voluptates quo quam modi qui qui. Ab doloremque nobis ipsa quidem totam consequatur ea consequatur autem. Aliquid quis sunt voluptatem quidem eum nisi et voluptatem iure. Rerum distinctio sint error explicabo doloremque.'
    }
  }

}
</script>
