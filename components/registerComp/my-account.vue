<template>
  <div class="modal">
    <div class="modal-background" @click="toggleModal"></div>
    <div class="modal-content">
      <div class="tabs">
        <ul>
          <li :class="{'is-active': activated}">
            <a @click="toggleSignUpForm">Đăng kí</a>
          </li>
          <li :class="{'is-active': activated2}">
            <a @click="toggleLogInForm">Đăng nhập</a>
          </li>
        </ul>
      </div>
       <signup-form v-show="activated" @switchtoLogIn="toggleLogInForm"/> 
      <login-form v-show="activated2" @switchToSignUp="toggleSignUpForm"/>
      <button class="modal-close is-large" @click="toggleModal"></button>
    </div>
  </div>
</template>

<script>
import signupForm from '~components/registerComp/signup-form.vue'
import loginForm from '~components/registerComp/login-form.vue'
export default {
  components: { signupForm, loginForm },
  data () {
    return {
      activated: true,
      activated2: false
    }
  },
  methods: {
    toggleModal () {
      this.$emit('close')
    },
    toggleSignUpForm () {
      this.activated = true
      this.activated2 = false
    },
    toggleLogInForm () {
      this.activated = false
      this.activated2 = true
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 1000
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

.modal-content {
  background-color: white;
  border-radius: 10px;
}

.modal-close {
  border: 1px solid white;
}

.modal-close:hover {
  background-color: #ff3860;
}

</style>
