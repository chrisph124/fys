<template>
  <div>
    <advanced-search/>
    <div class="container-fluid">
      <div class="column is-12">
        <nav class="level">
        <div class="level-item has-text-centered" v-for="item in 14">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
              <div class="card-content">
                <div class="content">
                  <a>@bulmaio</a>.
                  <a>{{item}}</a>
                  <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </div>
  </div>
</template>

<script>
import advancedSearch from '~components/search/advanced-search.vue'

export default {
  components: { advancedSearch }
}
</script>


<style scoped>

.level {
  display: flex;
  list-style: none;
  flex-flow: row wrap;
}

.level-item {
  padding: 5px 5px 5px 0;
  color: white;
  text-align: center;
}

.image img {
  width: 256px
}

.card {
    flex-grow: 0;
    align-self: stretch
}

.level-item:last-child {
  padding-right: none
}
</style>
