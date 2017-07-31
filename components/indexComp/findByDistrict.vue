<template>
  <div>
    <h3 class="title is-3 has-text-centered">Các khu vực Quận, huyện</h3>
      <div class="column">
        <nav class="navbar">
        <a href="#" class="navbar-item" v-for="item in items" :key="item.id">{{item}}</a>
      </nav>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình', 'Quận Ba Đình']
    }
  }
}
</script>

 <style scoped>
.title {
  width: 30%;
  padding: 1% 0;
  margin: auto;
  color: black;
}

.column {
  margin: auto;
  margin-bottom: 3rem
}

.navbar {
  max-width: 70%;
  height: inherit !important;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: transparent
}

.navbar-item {
  margin: 0.5rem;
  text-align: center;
  order: 29
}
</style>
