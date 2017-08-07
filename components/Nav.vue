<template>
  <div>
    <nav class="navbar columns is-marginless">
  
      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/" id='logo'>
            <img src="~assets/img/fys-logo.png">
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/for_sale">
              Bán
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/for_sale/house">
                Nhà
              </a>
              <a class="navbar-item " href="/for_sale/apartment">
                Căn hộ
              </a>
              <a class="navbar-item " href="/for_sale/villa">
                Biệt thự
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/for_rent">
              Cho thuê
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/for_rent/house">
                Nhà trọ
              </a>
              <a class="navbar-item " href="/for_rent/room">
                Phòng trọ
              </a>
              <a class="navbar-item " href="/for_rent/apartment">
                Căn hộ
              </a>
              <a class="navbar-item " href="/for_rent/villa">
                Biệt thự
              </a>
  
            </div>
          </div>
          <a class="navbar-item" href="/blog">
            Blog
          </a>
          <a class="navbar-item " href="/faq">
            FAQ
          </a>
          <a class="navbar-item " href="/contact">
            Liên Hệ
          </a>
          <a class="navbar-item" @click="toggleModal">
            Tài khoản của tôi
          </a>
          <my-account :class="{'is-active': actived}" @close="toggleModal" />
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control columns">
                <a class="button is-primary" href="/posts">
                  Đăng tin mua - bán , cho thuê
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <search/>
  </div>
</template>

<script>
import myAccount from '~components/registerComp/my-account.vue'
export default {
  components: { myAccount },
  data () {
    return {
      actived: false
    }
  },
  methods: {
    toggleModal () {
      this.actived = !this.actived
    }
  }
}
</script>


<style scoped>
.navbar {
  z-index: 999;
}

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
