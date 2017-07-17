<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="tabs">
        <ul>
          <li class="is-active">
            <a>Đăng kí</a>
          </li>
          <li>
            <a>Đăng nhập</a>
          </li>
        </ul>
      </div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <div class="column">
              <div class="box">
                <label class="label">Name</label>
                <p class="control">
                  <input class="input" type="text" placeholder="John Smith">
                </p>
                <label class="label">Username</label>
                <p class="control">
                  <input class="input" type="text" placeholder="jsmith">
                </p>
                <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="text" placeholder="jsmith@example.org">
                </p>
                <hr>
                <label class="label">Password</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●">
                </p>
                <label class="label">Confirm Password</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●">
                </p>
                <hr>
                <p class="control">
                  <button class="button is-primary">Register</button>
                </p>
              </div>
              <p>
                <a href="login.html">Bạn đã có tài khoản?</a>
              </p>
              <hr>
              <fbgg/>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" @click="ihear"></button>
      </section>
    </div>
  </div>
</template>

<script>
import fbgg from '~components/fb-gg-login.vue'
export default {
  components: { fbgg },
  methods: {
    ihear () {
      this.$on('close', actived => {
        this.actived = false
      })
    }
  }
}
</script>

<style scoped>
a {
  color: black
}

a:hover {
  color: #00d1b2
}

.tabs:not(:last-child) {
  margin-bottom: 0
}

.tabs {
  width: 100%;
}

.tabs li {
  width: 100%
}

.tabs ul li a {
  padding: 1rem
}

.hero-body {
  padding: 0
}

.container {
  padding: 0
}

.modal-content {
  background-color: white;
  border-radius: 10px;
}

.label {
  color: black;
  text-align: left;
  padding: 0.5rem 0
}

.box {
  background-color: transparent;
  padding: 0;
  box-shadow: none
}

.box .control .input {
  padding: 1.2rem 0.5rem
}

.hero {
  padding: 1rem
}
</style>
