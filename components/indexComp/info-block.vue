<template>
  <div>
    <h3 class="title is-3 has-text-centered">Thông tin trị trường</h3>
    
    <div class="has-text-centered">
      <a :class="{ button: 'button', 'is-black': isBlackND, btn: 'btn' }" @click="changeNDLabel">Nhà đất</a>
      <a :class="{ button: 'button', 'is-black': isBlackDA, btn: 'btn' }" @click="changeDALabel">Dự án</a>
      <a :class="{ button: 'button', 'is-black': isBlackMV, btn: 'btn' }" @click="changeMVLabel">Mẹo vặt</a>
    </div>

    <div class='tile is-ancestor is-8'>
        <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child" v-for="(data, index) in blogsInfo1" :key="data.id">
              <figure class="image is-3by2">
                <img src="http://bulma.io/images/placeholders/480x320.png">
              </figure>
              <p class="title is-5" style="width: 100%">
                <a :href="data.title">{{data.title}}</a>
              </p>
              <span>
                <small>{{data.create_at | moment("DD/MM/YYYY")}}</small>
              </span>
              <p>
                <small>{{data.content | truncate(150) }}</small>
              </p>
            </article>
          </div>
  
          <div class="tile is-parent is-vertical is-marginless">
            <article class="tile is-child nofication is-primary" v-for="(data, index) in blogsInfo2" :key="data.id">
              <figure class="image is-128x128 is-pulled-left">
                <img src="http://bulma.io/images/placeholders/128x128.png">
              </figure>
              <p class="title is-6" style="width: 100%">
                <a href="#">{{data.title}}</a>
              </p>
              <span>
                <small>{{data.create_at | moment("DD/MM/YYYY")}}</small>
              </span>
            </article>
          </div>
        </div>
        <div class="has-text-centered block">
          <button class="button is-black btn">
            <a href="/blog" style="color: white">Xem tất cả</a>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['getND', 'getDA', 'getMV'],
  data () {
    return {
      isBlackND: true,
      isBlackDA: false,
      isBlackMV: false,
      blogsInfo1: this.getND.slice(0, 1),
      blogsInfo2: this.getND.slice(1)
    }
  },
  methods: {
    changeNDLabel () {
      this.isBlackND = true
      this.isBlackDA = false
      this.isBlackMV = false
      this.blogsInfo1 = this.getND.slice(0, 1)
      this.blogsInfo2 = this.getND.slice(1)
    },
    changeDALabel () {
      this.isBlackND = false
      this.isBlackDA = true
      this.isBlackMV = false
      this.blogsInfo1 = this.getDA.slice(0, 1)
      this.blogsInfo2 = this.getDA.slice(1)
    },
    changeMVLabel () {
      this.isBlackND = false
      this.isBlackDA = false
      this.isBlackMV = true
      this.blogsInfo1 = this.getMV.slice(0, 1)
      this.blogsInfo2 = this.getMV.slice(1)
    }
  }
}
</script>


<style scoped>
.is-3 {
  width: 40%;
  padding: 1% 0;
  margin: auto;
  color: black;
  border-bottom: 1px solid black
}

.btn {
  border-radius: 0;
  border-color: black;
  border-top: none;
  padding: 1.2rem 2.5rem;
  margin-bottom: 2.5rem;
  line-height: 0
}

.btn:first-child {
  border-right: none
}

.btn:last-child {
  border-left: none
}

.is-ancestor {
  margin: auto;
  margin-bottom: 2.5rem
}

.title:not(:last-child) {
  margin-bottom: 0
}

figure.is-pulled-left {
  margin-right: 0.5rem
}
</style>
