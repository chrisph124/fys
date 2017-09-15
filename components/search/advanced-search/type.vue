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
        <div>
            <span v-for="(item, index) of types" :key="item.index">
              <input type="checkbox" :id="item.id">
              <label :for="item.id">{{item.name}}</label>
            </span>
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
        { id: '01', name: 'Nhà phố' },
        { id: '02', name: 'Căn hộ' },
        { id: '03', name: 'Biệt thự' }
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
  width: 7rem;
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

input[type="checkbox"] {
  display: none
}

input[type="checkbox"]+label {
  display: block;
  position: relative;
  padding: 0 10px 0 25px;
  margin-top: 10px;
  color: black;
  font-size: 0.9rem;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"]+label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #00d1b2;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked+label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
