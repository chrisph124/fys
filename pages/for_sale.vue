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
                    <router-link to='#'>
                      <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image">
                      <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
                    </router-link>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <router-link to="#">
                      <div class="price">
                        2,000,000,000 vnd
                      </div>
                      <div class="basic-info">
                        <span>
                          <i class="fa fa-bed" aria-hidden="true"></i>3PN
                        </span>
                        <span>
                          <i class="fa fa-bath" aria-hidden="true"></i>2 PT
                        </span>
                        <span>
                          <i class="fa fa-arrows-alt" aria-hidden="true"></i>100m&#178;
                        </span>
                      </div>
                      <div>
                        <small>844 Hai Bà Trưng</small>
                      </div>
                      <div>
                        <small>Tràng Tiền, Hoàn Kiếm, Hà Nội</small>
                      </div>
                      <div>
                        <small>Căn hộ chung cư</small>
                      </div>
                    </router-link>
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
import advancedSearch from '~/components/search/advanced-search.vue'
import gmap from '~/components/search/gmap.vue'

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

.price {
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}

.level-item {
  margin: 0 0 1rem 0;
  color: white;
  width: 304px;
}

.card {
  border-radius: 3%
}

.image {
  width: 304px;
  height: 160px;
  text-align: center
}

figure.image i {
  opacity: 0;
  position: absolute;
  color: #00d1b2;
  top: 0;
  left: 0;
  width: 304px;
  line-height: 160px;
  background-color: rgba(0, 0, 0, 0.7);
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}

.card:hover i {
  opacity: 1;
}

.card-image,
.card-image img {
  width: 304px;
  height: 160px;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}

.card-content {
  text-align: left;
  padding: 0.5rem;
  border-bottom-left-radius: 3%;
  border-bottom-right-radius: 3%;
}

.card-content small {
  color: #4a4a4a
}

.basic-info {
  padding-top: 0.25rem
}

.basic-info span {
  margin-right: 1rem;
  color: black;
}

.basic-info .fa-bed {
  line-height: 25px;
}

.basic-info {
  font-size: 0.9rem
}


.basic-info .fa::before {
  padding-right: 0.25rem;
  line-height: 20px;
}

.pagination {
  margin: 0 1rem 0 1.5rem;
  height: 40px
}

.pagination-next {
  margin: 0
}
</style>
