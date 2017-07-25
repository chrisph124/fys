<template>
  <div>
    <h3 class="title is-3 has-text-centered">Thông tin trị trường</h3>
    <div class="block has-text-centered">
      <a :class="{button: btn, 'is-black': isBlackND}" @click="changeNDLabel">Nhà đất</a>
      <a :class="{button: btn, 'is-black': isBlackDA}" @click="changeDALabel">Dự án</a>
      <a :class="{button: btn, 'is-black': isBlackMV}" @click="changeMVLabel">Mẹo vặt</a>
    </div>
    <div class="tile is-ancestor is-8">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child">
              <figure class="image is-3by2">
                <img src="http://bulma.io/images/placeholders/480x320.png">
              </figure>
              <p class="title is-4" style="width: 100%"><a href="#">Global Research Strategist</a></p>
              <span>2017-07-25</span>
              <p>Asperiores perferendis eius incidunt dolorem nihil ipsam nihil consequatur. Earum quo minima. Iure ut atque. Voluptates eligendi enim aperiam nihil ipsam rem molestias explicabo et.</p>
            </article>
          </div>

          <div class="tile is-parent is-vertical is-marginless" v-for="data in blogs1" :key="data.id">
            <article class="tile is-child nofication is-primary">
              <figure class="image is-128x128 is-pulled-left">
                <img src="http://bulma.io/images/placeholders/128x128.png">
              </figure>
              <p class="title is-5">{{data.title}}t</p>
            </article>
          </div>
          
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['blogs'],
  data () {
    return {
      btn: 'button',
      isBlackND: true,
      isBlackDA: false,
      isBlackMV: false,
      blogs1: this.blogs
    }
  },
  methods: {
    changeNDLabel () {
      this.isBlackND = true
      this.isBlackDA = false
      this.isBlackMV = false
    },
    changeDALabel () {
      this.isBlackND = false
      this.isBlackDA = true
      this.isBlackMV = false
    },
    changeMVLabel () {
      this.isBlackND = false
      this.isBlackDA = false
      this.isBlackMV = true
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


.button {
  border-radius: 0;
  border-color: black;
  border-top: none;
  padding: 1.2rem 2.5rem;
  margin-bottom: 3rem
}

.button:first-child {
  border-right: none
}

.button:last-child {
  border-left: none
}

.is-ancestor {
  margin: auto
}

.title:not(:last-child) {
  margin-bottom: 0
}

figure.is-pulled-left {
  margin-right: 0.5rem
}
</style>
