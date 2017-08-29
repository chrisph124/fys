<template>
  <div :class="{dropdown: 'dropdown', 'is-active': isDrop}">
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
        <buttons 
        v-for="(button, index) of buttons"
        :key='index'
        :item='button'
        :is-status='button.status'
        @activate="activateButton(button)"/>
      </div>
    </div>
  </div>
</template>

<script>
import buttons from '~/components/search/advanced-search/btnBedroom'
export default {
  components: { buttons },
  data () {
    return {
      isDrop: false,
      buttons: [
        {name: 'Tất cả', status: false},
        {name: '2+', status: false},
        {name: '3+', status: false},
        {name: '4+', status: false},
        {name: '5+', status: false},
        {name: 'Studio', status: false}
      ]
    }
  },
  methods: {
    showActive () {
      this.isDrop = !this.isDrop
    },
    activateButton (activatedButton) {
      for (let button of this.buttons) {
        button.status = button === activatedButton
      }
    }
  }
}
</script>

<style scoped>
.dropdown-content {
  width: 25rem;
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
