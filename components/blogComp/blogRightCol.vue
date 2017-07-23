<template>
  <div class='col-right'>
    <div class="box">
      <article class="media" v-for="data in datas" :key="data.id">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="data.img" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content is-paddingless">
            <h6 class="subtitle" style="color: #00d1b2">{{data.category}}</h6>
            <h3 class="title">
              <a :href="data.title" @click="detailPost">{{data.title}}</a>
            </h3>
            <small>{{data.date}}
              <a href="#" style="color: #D32F2F">{{data.name}}</a>
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
      datas: [
        { category: 'dự án', title: 'Central Usability Assistant', name: 'Queenie Moore', date: '2017-06-28', img: 'http://lorempixel.com/256/256/city/6' },
        { category: 'nhà đất', title: 'Dynamic Markets Architect', name: 'Tony Robel', date: '2016-08-15', img: 'http://lorempixel.com/256/256/city/7' },
        { category: 'mẹo vặt', title: 'Senior Paradigm Agent', name: 'Armand Pouros', date: '2016-12-23', img: 'http://lorempixel.com/256/256/city/8' },
        { category: 'mẹo vặt', title: 'Product Optimization Designer', name: 'Eldridge Labadie', date: '2017-07-22', img: 'http://lorempixel.com/256/256/city/9' },
        { category: 'dự án', title: 'Direct Assurance Director', name: 'Adelia Gulgowski', date: '2016-10-23', img: 'http://lorempixel.com/256/256/city/10' },
        { category: 'nhà đất', title: 'Product Implementation Agent', name: 'Aron Hammes', date: '2017-05-01', img: 'http://lorempixel.com/256/256/city/1' }
      ]
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
