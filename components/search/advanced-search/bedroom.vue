<template>
  <div :class="{dropdown: 'dropdown', 'is-active': isActive}">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="showActive()">
        <span>Phòng ngủ</span>
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true" style="color: #00d1b2"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <buttons v-for="(item, index) of buttons" :key='item' :item='item'/>
      </div>
    </div>
  </div>
</template>

<script>
import buttons from '~components/search/advanced-search/btnBedroom'
export default {
  components: { buttons },
  data () {
    return {
      isActive: false,
      buttons: ['Any', '1+', '2+', '3+', '4+', 'Studio+']
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
.dropdown-content {
  width: 24rem;
  padding: 0.5rem;
  margin-top: 1px
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
