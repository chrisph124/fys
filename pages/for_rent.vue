<template>
  <div>
    <advanced-search/>
    <div class="container-fluid">
      <div class="columns is-12">
        <div class="column">
          <div class="highlight">
            <h2 class="title">Subtitle</h2>
            <nav class="level">
              <div class="level-item" v-for="item in 18" :key="item">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image">
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
          <nav class="pagination is-centered">
            <a class="pagination-previous">Previous 5 pages</a>
            <a class="pagination-next">Next 5 pages</a>
            <ul class="pagination-list">
              <li>
                <a class="pagination-link is-current">1</a>
              </li>
              <li>
                <a class="pagination-link">2</a>
              </li>
              <li>
                <a class="pagination-link">3</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="column">
          <gmap/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import advancedSearch from '~components/search/advanced-search.vue'
import gmap from '~components/search/gmap.vue'

export default {
  components: { advancedSearch, gmap }
}
</script>

<style scoped>
.column {
  padding: 0.75rem 0
}

.title:not(:last-child),
.subtitle:not(:last-child) {
  margin: 0;
  padding: 1.75rem;
  padding-top: 0
}

.highlight {
  max-height: 780px;
  overflow: auto
}


.level {
  display: flex;
  flex-flow: row wrap;
  padding: 0 0 0 1rem
}

.level-item {
  margin: 0 0 1.75rem 0;
  color: white;
  width: 316px;
}

.card {
  border-radius: 3%
}

.image img {
  width: 316px;
  height: 160px;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%
}

.card-image {
  width: 316px;
}


.card-content {
  text-align: left;
  padding: 0.5rem
}


.pagination {
  margin: 1rem 1rem 0 1.5rem
}

.pagination-next {
  margin: 0
}
</style>
