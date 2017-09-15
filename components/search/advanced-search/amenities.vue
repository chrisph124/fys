<template>
    <div :class="{dropdown: 'dropdown', 'is-active': isActive}">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="showActive()">
          <span>Tiện ích</span>
          <span class="icon is-small">
            <i class="fa fa-angle-down" aria-hidden="true" style="color: #00d1b2"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <div v-for="(item, index) in amenities" :key="index">
            <label class="checkbox" :for="item.name">
              <input type="checkbox" :id="item.name"> {{item.name}}
            </label>
          </div>
          <hr class="dropdown-divider">
          <div v-for="(item, index) in amenitiesForSale" :key="index">
            <label class="checkbox" :for="item.name">
              <input type="checkbox" :id="item.name"> {{item.name}}
            </label>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      amenities: [
        { name: 'Internet' },
        { name: 'Máy lạnh' },
        { name: 'Truyền hình cable' },
        { name: 'Thang máy' },
        { name: 'Cho phép thú cưng' },
        { name: 'Bãi đỗ xe máy' },
        { name: 'Bãi đỗ ôtô' },
        { name: 'Camera an ninh' },
        { name: 'Hồ bơi' },
        { name: 'Ban công' }
      ],
      amenitiesForSale: [
        { name: 'Gym' },
        { name: 'Phòng xông hơi' }
      ],
      amenitiesForRent: [
        { name: 'Giờ giấc tự do' },
        { name: 'Lối đi riêng' },
        { name: 'Nấu ăn tự do' }
      ]
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
.checkbox {
  padding: 0.3rem;
  padding-top: 1rem;
  line-height: 0
}

.dropdown-content {
  margin-top: 1px;
  padding: 0.5rem
}

.dropdown .button:focus {
  box-shadow: none
}

.button {
  border-radius: 0;
  border: none;
  color: #363636;
  padding: 0
}

.button span {
  color: #4a4a4a
}
</style>
