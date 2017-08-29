<template>
  <div>
    <search/>
    <div class="column">
    <h3 class="title has-text-centered">
      Chính sách bảo mật
    </h3>
    <div class="has-text-centered">
      <p>
  
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import search from '~/components/search/search.vue'
export default {
  components: {search}
}
</script>


<style scoped>
.column {
  margin: 50px 100px;
  padding: 0;
  border: 1px solid #00d1b2;
  border-radius: 12px
}

.has-text-centered {
  padding: 10px 25px;
}

.title,
.subtitle {
  background-color: #00d1b2;
  color: white;
  padding: 0.4rem;
}

.title {
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
