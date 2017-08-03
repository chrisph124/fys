<template>
  <div>
    <advanced-search/>
    <div class="container-fluid">
      <div class="columns is-12">
        <div class="column">
          <div class="highlight">
            <nav class="level">
              <div class="level-item" v-for="item in 15">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image">
                    </figure>
                    <div class="card-content">
                      <div class="content">
                        <div>
                          <p>
                            <a href="#">Product Data Producer</a>
                          </p>
                        </div>
                        <div>
                          <small>844 McGlynn Viaduct</small>
                        </div>
                        <div>
                          <small>Pennsylvania</small>
                        </div>
                        <div>
                          <nav class="navbar">
                            <div class="navbar-start">
                              <div class="navbar-item">
                              <i class="fa fa-bed" aria-hidden="true"></i>
                              2
                            </div>
                            <div class="navbar-item">
                              <i class="fa fa-bath" aria-hidden="true"></i>
                              2
                            </div>
                            <div class="navbar-item">
                              <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                              100m&#178;
                            </div>                            
                            </div>
                            <div class="navbar-end">
                              <div class="navbar-item">
                              2 tỷ
                            </div>
                            </div>
                          </nav>
                        </div>
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
/* .container-fluid {
  margin-bottom: 2.5rem
} */

.highlight {
  max-height: 770px;
  overflow: auto
}

.level {
  display: flex;
  flex-flow: row wrap;
}

.level-item {
  margin: 0.25rem;
  color: white;
  text-align: center;
}

.card-image {
  width: 300px;
}

.image img {
  width: 300px;
  height: 200px

}

.level-item:not(.is-narrow) {
  flex-grow: 0
}

.pagination {
  padding: 0 1rem
}

.card-content {
  padding: 1rem;
  padding-bottom: 0
}

.content {
  text-align: left
}

.navbar-item {
  padding: 0;
  padding-right: 0.5rem
}

.navbar-end .navbar-item {
  padding-right: 0
}

i.fa {
  padding-right: 0.2rem
}
</style>
