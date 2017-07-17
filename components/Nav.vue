<template>
  <div>
    <nav class="navbar">
  
      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/" id='logo'>
            <img src="~assets/img/fys-logo.png">
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Bán
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/documentation/overview/start/">
                Nhà
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Căn hộ
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">
                Biệt thự
              </a>
  
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Cho thuê
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/documentation/overview/start/">
                Nhà trọ
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Phòng trọ
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">
                Căn hộ
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
                Biệt thự
              </a>
  
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/blog">
              Blog
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/documentation/overview/start/">
                Dự án
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Nhà Đất
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/grid/columns/">
                Mẹo vặt
              </a>
            </div>
          </div>
          <a class="navbar-item " href="/faq">
            FAQ
          </a>
          <a class="navbar-item " href="/contact">
            Liên Hệ
          </a>
          <a class="navbar-item" @click="toggleModal()">
            Tài khoản của tôi
          </a>
          <log-in v-if="actived"/>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" href="/posts">
                  Đăng tin mua - bán , cho thuê
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import logIn from '~components/log-in.vue'
export default {
  components: { logIn },
  data () {
    return {
      actived: null
    }
  },
  methods: {
    toggleModal () {
      this.actived = true
      logIn.$emit('close', this.actived)
    }
  }
}
</script>


<style scoped>
.button,
.button:visited {
  padding: 5px 15px;
}

.navbar-item img {
  max-height: 2.5rem;
}

.navbar,
.navbar-dropdown,
.navbar-item.has-dropdown:hover .navbar-link {
  background-color: #212121;
  border-top: none
}

.navbar {
  height: 4rem;
  margin-bottom: 2.5rem;
}

.navbar-item,
.navbar-link {
  color: #FFF;
}

a.navbar-item:hover {
  color: #00d1b2;
  background-color: transparent
}

.navbar-dropdown {
  font-size: 1rem
}

a.navbar-item,
a.navbar-link,
a.navbar-link:hover {
  background-color: transparent;
  color: #FFF;
}

a.button {
  font-size: 1.2rem
}
</style>
