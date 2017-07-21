<template>
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
                <a @click="switchtoLogIn">Bạn đã có tài khoản?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
  export default {
    methods: {
      switchtoLogIn () {
        this.$emit('switchtoLogIn')
      }
    }
  }
</script>

<style scoped>

.hero-body {
  padding: 0
}

.container {
  padding: 0
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

a {
  color: black
}

a:hover {
  font-weight: bold
}
</style>
