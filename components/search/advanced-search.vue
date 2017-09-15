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
        <price/>
        <bedroom/>
        <type/>
        <advanced/>
      </div>
    </nav>
  </div>
</template>

<script>
import price from '~/components/search/advanced-search/price'
import bedroom from '~/components/search/advanced-search/bedroom'
import type from '~/components/search/advanced-search/type'
import advanced from '~/components/search/advanced-search/advanced'
export default {
  components: { price, bedroom, type, advanced },
  methods: {
    showActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>


<style scoped>
.column {
  height: 400px
}

.navbar {
  padding: 1rem 1rem 1rem 0.5rem
}

.navbar-start {
  margin-right: 3rem;
}

.navbar-end {
  margin-left: 0
}

.navbar-end .navbar-item,
.dropdown {
  margin-right: 1rem
}

.dropdown {
  border: 1px solid #00d1b2;
  border-radius: 5px;
  height: 40px;
  padding: 0 0.5rem
}

.button {
  border: none;
}

.navbar-item .button:focus {
  box-shadow: none
}

.navbar-item {
  border: 1px solid #00d1b2;
  border-radius: 5px;
  padding: 0
}

.navbar-link:hover {
  border-radius: 5px;
}

.navbar-dropdown {
  border-top: none;
  margin-top: 1px;
}

.input {
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  max-width: 100%;
  width: 500px;
}
</style>
