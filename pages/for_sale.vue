<template>
  <div>
    <advanced-search/>
    <div class="container-fluid">
      <div class="columns is-12">
        <div class="column left">
          <div class="navbar sort">
            <div class="navbar-menu">
              <div class="navbar-start">
                <div class="is-pulled-left">
                  <h2 class="subtitle">Tràng Tiền, Hoàn Kiếm, Hà Nội</h2>
                  <small>Tìm thấy: 500 kết quả</small>
                </div>
              </div>
              <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link" href="/for_sale">
                    Sắp xếp
                  </a>
                  <div class="navbar-dropdown ">
                    <a class="navbar-item " href="/for_sale/house">
                      Mới nhất
                    </a>
                    <a class="navbar-item " href="/for_sale/apartment">
                      Giá (cao - thấp)
                    </a>
                    <a class="navbar-item " href="/for_sale/villa">
                      Giá (thấp - cao)
                    </a>
                    <a class="navbar-item " href="/for_sale/villa">
                      Diện tích
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav class="level properties">
            <div class="level-item" v-for="item in 18" :key="item">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <!-- <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image"> -->
                    <i class="fa fa-info-circle fa-4x" aria-hidden="true"></i>
                  </figure>
                  <div class="card-content">
                    <div class="content">
                      <div>
                        <p>
                          <a href="#">2,000,000,000 &#8363;</a>
                        </p>
                      </div>
                      <div>
                        <small>844 Hai Bà Trưng</small>
                      </div>
                      <div>
                        <small>Tràng Tiền, Hoàn Kiếm, Hà Nội</small>
                      </div>
                      <div class="basic-info">
                        <span>
                          <i class="fa fa-bed" aria-hidden="true">3</i>
                        </span>
                        <span>
                          <i class="fa fa-bath" aria-hidden="true">2</i>
                        </span>
                        <span>
                          <i class="fa fa-arrows-alt" aria-hidden="true">100m&#178;</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
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
              <li>
                <a class="pagination-link">4</a>
              </li>
              <li>
                <a class="pagination-link">5</a>
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

.subtitle {
  color: black;
  margin-bottom: 0
}


.sort {
  padding: 0 0.5rem 0 1.5rem;
  height: 60px;
}

.sort a.navbar-link {
  padding-top: 0
}

.navbar-dropdown a.navbar-item {
  padding-right: 0.5rem
}

.properties:not(:last-child) {
  margin-bottom: 0.25rem
}

.properties {
  overflow: auto;
  height: 750px;
  display: flex;
  flex-flow: row wrap;
  padding: 0 0 0 1rem
}

a.navbar-item:hover {
  background-color: #00d1b2
}

.level-item {
  margin: 0 0 1rem 0;
  color: white;
  width: 316px;
}

.card {
  border-radius: 3%
}

.image, .image img {
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

.basic-info {
  padding-top: 0.25rem
}

.basic-info span{
  margin-right: 1rem;
}

.basic-info .fa p {
  font-family: 'Open Sans', sans-serif;
  color: #4a4a4a
}

.basic-info .fa::before {
  padding-right: 0.25rem
}

.pagination {
  margin: 0 1rem 0 1.5rem;
  height: 40px
}

.pagination-next {
  margin: 0
}
</style>
