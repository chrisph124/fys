<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="column">
                    <div class="box">
                        <div v-show="activated">
                            <label class="label">Username</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="jsmith">
                            </p>
                            <label class="label">Password</label>
                            <p class="control">
                                <input class="input" type="password" placeholder="●●●●●●●">
                            </p>
                            <br>
                            <p>
                                <a @click="showForgottenForm">Quên mật khẩu?</a>
                            </p>
                            <br>
                            <p>
                                <a @click="switchToSignUp">Bạn chưa có tài khoản?</a>
                            </p>
                            <hr>
                            <fbgg/>
                        </div>
                        <div v-show="!activated">
                            <p class="control">
                                <input class="input" type="text" placeholder="Nhập email để lấy lại mật khẩu">
                            </p>
                            <br>
                            <p class="control">
                                <button class="button is-primary">Send</button>
                            </p>
                            <br>
                            <p>
                                <a @click="showLogInForm">Quay về trang đăng nhập</a>
                            </p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import forgotten from '~/components/registerComp/forgotten-form.vue'
import fbgg from '~/components/registerComp/fb-gg-signup.vue'
export default {
  components: { forgotten, fbgg },
  data () {
    return {
      activated: ''
    }
  },
  methods: {
    showForgottenForm () {
      this.activated = false
    },
    showLogInForm () {
      this.activated = true
    },
    switchToSignUp () {
      this.$emit('switchToSignUp')
    }
  }
}
</script>

<style scoped>
a {
    color: black
}

a:hover {
    font-weight: bold
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
