<template>
  <!-- <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"> -->
  <div>
    <h3 class="title is-3 has-text-centered">Tìm căn hộ theo tòa nhà</h3>
    <div class="column">
      <div class="card" v-for="(item, index) in items" :key="item.index">
        <div class="card-image">
          <figure class="image is-3by2">
            <img src="http://lorempixel.com/320/240/city/5" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            <p>{{item}}</p>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </div>
    <div class="block has-text-centered">
      <button class="button is-black">
        <a href="/blog" style="color: white">Xem tất cả</a>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      btn: 'button',
      isBlackBuy: true,
      isBlackRent: false,
      items: ['#1', '#2', '#3', '#4', '#5', '#6']
    }
  }
}
</script>

 <style scoped>
.column {
  display: flex;
  margin: auto;
  max-width: 100%;
  margin-bottom: 2.5rem;
  flex-flow: row wrap;
  justify-content: center
}

.card {
  width: 320px;
  height: 240px;
  margin: 2rem
}

.card-image {
  position: relative;
  display: block
}

.card-content {
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .9));
}

.content, .content a, .content p {
  color: white
}

.content a {
  font-weight: bold;
}

.content p:not(:last-child) {
  margin-bottom: 0
}

.content strong {
  color: white
}

.is-3by2 {
  width: 320px;
  height: 240px;
}

h3.title {
  margin-bottom: 2.5rem
}

.button {
  border-radius: 0;
  border-color: black;
  border-top: none;
  padding: 1.2rem 2.5rem;
  line-height: 0;
  margin-bottom: 3rem
}
</style>
