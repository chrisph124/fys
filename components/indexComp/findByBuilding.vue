<template>
  <div>
    <h3 class="title is-3 has-text-centered">Tìm căn hộ theo tòa nhà</h3>
    <div class="block has-text-centered">
      <a :class="{button: btn, 'is-black': isBlackBuy}" @click="changeRentLabel">Bán</a>
      <a :class="{button: btn, 'is-black': isBlackRent}" @click="changeBuyLabel">Thuê</a>
    </div>
    <buy-comp/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      btn: 'button',
      isBlackBuy: true,
      isBlackRent: false
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
.title {
  width: 30%;
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
</style>
