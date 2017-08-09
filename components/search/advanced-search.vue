<template>
  <div>
    <nav class="navbar">
      <div class="navbar-start">
        <div class="navbar-item">
          <button class="button">
            <i class="fa fa-search"></i>
          </button>
          <input type="text" class="input" placeholder="Tìm kiếm">
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">Giá</div>
          <div class="navbar-dropdown">
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">Phòng ngủ</div>
          <div class="navbar-dropdown">
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">Kiểu nhà</div>
          <div class="navbar-dropdown">
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">Tìm kiếm nâng cao</div>
          <div class="navbar-dropdown">
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
            <div class="navbar-item">ok</div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.column {
  height: 400px
}

.navbar-end {
  padding: 0.5rem 1rem
}

.input {
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding-left: 0;
  max-width: 100%;
  width: 500px;
}

.button {
  border-radius: 0;
  border: none;
  color: #363636;
  padding-left: 0
}
</style>
