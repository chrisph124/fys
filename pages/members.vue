<template>
  <div>
    <search/>
    <div class="column is-12">
      <h3 class="title is-3 has-text-centered">
        Đội ngũ nhân viên
      </h3>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import search from '~components/search/search.vue'
export default {
  components: { search }
}
</script>


<style scoped>
.column {
  padding: 50px 100px;
}

.has-text-centered {
  padding: 10px 25px;
}

.column>.box {
  border: 1px solid #00d1b2;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.column>.title {
  background-color: #00d1b2;
  color: white;
  padding: 0.4rem;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 0;
}

.box {
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 50px
}

.media {
  border-top: 1px solid rgba(0, 209, 178, 0.5)
}

.media:first-child {
  border-top: none
}
</style>
