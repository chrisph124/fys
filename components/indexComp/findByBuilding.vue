<template>
  <!-- <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"> -->
  <div>
    <h3 class="title is-3 has-text-centered">Tìm căn hộ theo tòa nhà</h3>
    <!-- <div class="column">
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
    </div> -->
    <div class="block has-text-centered">
      <a :class="{button: btn, 'is-black': isBlackBuy}" @click="changeRentLabel">Bán</a>
      <a :class="{button: btn, 'is-black': isBlackRent}" @click="changeBuyLabel">Thuê</a>
    </div>


      <ul class="column is-8 is-paddingless">
        <li v-for="(building, index) in buildings" :key="building.index">
          <span class="is-pulled-left"><a href="">{{building.name}}</a></span>
          <small class="is-pulled-right">{{building.blocks}}</small>
        </li>
      </ul>


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
      items: ['#1', '#2', '#3', '#4', '#5', '#6'],
      buildings: [
        {name: 'Masteri Thảo Điền', blocks: '274 căn'},
        {name: 'The Park Vinhomes Central Park', blocks: '81 căn'},
        {name: 'The Landmark Vinhomes Central Park', blocks: '70 căn'},
        {name: 'The Park Residence', blocks: '58 căn'},
        {name: 'Tropic Garden', blocks: '25 căn'},
        {name: 'Lexington Residence', blocks: '129 căn'},
        {name: 'Sunrise City', blocks: '72 căn'},
        {name: 'The Central Vinhomes Central Park', blocks: '67 căn'},
        {name: 'The Parc Spring', blocks: '30 căn'},
        {name: 'The Estella An Phú', blocks: '23 căn'}
      ]
    }
  },
  methods: {
    changeRentLabel () {
      this.isBlackBuy = true
      this.isBlackRent = false
    },
    changeBuyLabel () {
      this.isBlackBuy = false
      this.isBlackRent = true
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

.title {
  width: 30%;
  padding: 1% 0;
  margin: auto;
  color: black;
  border-bottom: 1px solid black
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


li {
  width: 40%;
  margin: 0 3rem 1rem 3rem;
}

li span a {
  color: black
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
