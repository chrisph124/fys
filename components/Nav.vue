<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/" id='logo'>
          <img src="~assets/img/fys-logo.png">
        </a>
      </div>
  
      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
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
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
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
          <a class="navbar-item" href="http://bulma.io/blog/">
            Blog
          </a>
          <a class="navbar-item " href="http://bulma.io/">
            FAQ
          </a>
          <a class="navbar-item " href="http://bulma.io/">
            Liên Hệ
          </a>
  
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="/documentation/overview/start/">
              Tài khoản của tôi
            </a>
            <div class="navbar-dropdown ">
              <a class="navbar-item " href="/documentation/overview/start/">
                Đăng nhập
              </a>
              <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Đăng ký
              </a>
            </div>
          </div>
  
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary">
                  <span>Đăng tin mua - bán , cho thuê</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.button,
.button:visited {
  padding: 5px 15px;
}

.navbar-item img {
  max-height: 2.5rem;
}

</style>
