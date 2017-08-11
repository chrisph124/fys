<template>
  <div :class="{dropdown: 'dropdown', 'is-active': isActive}">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="showActive()">
        <span>Giá</span>
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true" style="color: #00d1b2"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <div class="select">
          <select>
            <option>thấp nhất</option>
            <option v-for="(item, index) in price" :key="item" :value="index">{{item}}</option>
          </select>
        </div>
        <div class="select is-pulled-right">
          <select>
            <option>cao nhất</option>
            <option v-for="(item, index) in price" :key="item" :value="index">{{item}}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: ['1 tỷ', '1,5 tỷ', '2 tỷ', '2,5 tỷ', '3 tỷ', '3,5 tỷ', '4 tỷ', '4,5 tỷ', '5 tỷ', '6 tỷ', '7 tỷ', '8 tỷ', '10 tỷ', '15 tỷ', '20 tỷ', '25 tỷ', '30 tỷ'],
      isActive: false
    }
  },
  methods: {
    showActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>


<style scoped>
.dropdown .button:focus {
  box-shadow: none
}

.dropdown-content {
  margin-top: 1px;
  width: 17rem;
  padding: 0.5rem
}

.select select {
  border-color: #00d1b2
}

.button {
  border-radius: 0;
  border: none;
  color: #363636;
  padding: 0
}
</style>
