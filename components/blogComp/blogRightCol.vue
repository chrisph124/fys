<template>
  <div class='col-right'>
    <div class="box">
      <article class="media" v-for="data in datas" :key="data.id">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="http://bulma.io/images/placeholders/256x256.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content is-paddingless">
            <h6 class="subtitle" style="color: #00d1b2">Dự án</h6>
            <h3 class="title">
              <a href="#">{{data}} et-pariatur-soluta</a>
            </h3>
            <small>01/01/2017
              <a href="#" style="color: #D32F2F">Author</a>
            </small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas.
            </p>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-share"></i>
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fa fa-heart"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
  
        </div>
      </article>
  
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      datas: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style scoped>

.box {
  border-radius: 0;
  box-shadow: none;
  padding: 0
}

.has-text-centered {
  padding: 10px 25px;
}

.title {
  margin-bottom: 0
}

.content {
  padding: 1rem;
}

.content p {
  color: black;
  margin-bottom: 0.5rem
}

h3.title {
  margin-bottom: 0
}

.is-128x128 {
  width: 256px;
  height: 256px
}

.media {
  border-top: 1px solid rgba(0, 0, 0, 0.4)
}

.media:first-child {
  border-top: 0
}

.level a {
  color: #00d1b2
}

.pagination {
  margin-top: 2rem
}

</style>
