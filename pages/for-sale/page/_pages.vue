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
                  <a class="navbar-link" href="/for-sale">
                    Sắp xếp
                  </a>
                  <div class="navbar-dropdown ">
                    <a class="navbar-item " href="/for-sale/house">
                      Mới nhất
                    </a>
                    <a class="navbar-item " href="/for-sale/apartment">
                      Giá (cao - thấp)
                    </a>
                    <a class="navbar-item " href="/for-sale/villa">
                      Giá (thấp - cao)
                    </a>
                    <a class="navbar-item " href="/for-sale/villa">
                      Diện tích
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav class="level properties">
            <div class="level-item" v-for="post in posts" :key="post.post_id">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <nuxt-link :to="'/for-sale/'+post.post_id">
                      <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image">
                      <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>
                    </nuxt-link>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <nuxt-link :to="'/for-sale/'+post.post_id">
                      <div class="price">
                        {{post.price}} vnd
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
                        <small>{{post.address}}</small>
                      </div>
                      <div>
                        <small>{{post.ward}}, {{post.district}}</small>
                      </div>
                      <div>
                        <small>{{post.category}}</small>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav class="pagination is-centered">
            <ul class="pagination-list">
              <li v-if="pageCurrent > 1">
                <a class="pagination-link" :href="`/for-sale/page/${pageCurrent - 1}`">Prev</a>
              </li>
              <li v-for="i in (1, allPages)">
                <a v-if="pageCurrent == i" class="pagination-link is-current" :href="`/for-sale/page/${i}`">{{i}}</a>
                <a v-else class="pagination-link" :href="`/for-sale/page/${i}`">{{i}}</a>
              </li>
              <li v-if="pageCurrent < allPages">
                <a class="pagination-link" :href="`/for-sale/page/${pageCurrent + 1}`">Next</a>
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
import axios from '~/plugins/axios'
export default {
  components: { advancedSearch, gmap },
  async asyncData ({ params }) {
    // let dataPost = await axios.get('https://swapi.co/api/people/1/')
    let dataPost = await axios.get(`/api/posts/?page=${params.pages}`)
    let {posts, countAll, allPages, pageCurrent} = dataPost.data
    // console.log(dataPost.data)
    return {
      posts,
      countAll,
      allPages,
      pageCurrent
    }
  }
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
  font-size: 1rem;
  letter-spacing: 0.1rem;
}

.level-item {
  margin: 0 0 1rem 0;
  color: white;
  width: 250px;
}

.card {
  border-radius: 3%
}

.image {
  width: 250px;
  height: 150px;
  text-align: center
}

figure.image i {
  opacity: 0;
  position: absolute;
  color: #00d1b2;
  top: 0;
  left: 0;
  width: 250px;
  line-height: 150px;
  background-color: rgba(0, 0, 0, 0.7);
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}

.card:hover i {
  opacity: 1;
}

.card-image,
.card-image img {
  width: 250px;
  height: 150px;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}

.card-content {
  text-align: left;
  padding: 0.5rem;
  border-bottom-left-radius: 3%;
  border-bottom-right-radius: 3%;
  width: 250px
}

.card-content small {
  color: #4a4a4a;
  font-size: 0.725rem
}

.basic-info {
  padding-top: 0.25rem
}

.basic-info span {
  margin-right: 1rem;
  color: black;
}

.basic-info {
  font-size: 0.8rem
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
