<template>
  <div>
    <div class="columns is-marginless">
        <left-col/>
        <right-col v-show="!isShow"/>
        <detail-col v-show="isShow"/>
    </div>
  </div>
</template>


<script>
import leftCol from '~components/blogComp/blogLeftCol.vue'
import rightCol from '~components/blogComp/blogRightCol.vue'
import detailCol from '~components/blogComp/blogDetail.vue'
export default {
  components: { leftCol, rightCol, detailCol },
  data () {
    return {
      isShow: false
    }
  }

}
</script>
