<template>
  <div :class="{dropdown: 'dropdown', 'is-active': isActive}">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="showActive()">
        <span>Kiểu nhà</span>
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true" style="color: #00d1b2"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <div v-for="item in types" :key="item">
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
      types: [
        { name: 'Nhà phố' },
        { name: 'Căn hộ' },
        { name: 'Biệt thự' }
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
  padding: 0.5rem;
  width: 7rem
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
