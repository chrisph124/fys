<template>
  <div :class="{dropdown: 'dropdown', 'is-active': isActive}">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" @click="showActive()">
        <span>Tìm kiếm nâng cao</span>
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true" style="color: #00d1b2"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <div class="navbar-item">
          <router-link class="button is-default" to='/for_sale'>Bán</router-link>
          <router-link class="button is-default" to='/for_rent'>Thuê</router-link>
        </div>
        <hr class="dropdown-divider">
        <div class="navbar-item">
          <small>Dạng tài sản</small>
          <div>
            <span v-for="item in propertiesForSale" :key="item.id">
              <input type="checkbox" :id="item.id">
              <label :for="item.id">{{item.name}}</label>
            </span>
          </div>
        </div>
        <hr class="dropdown-divider">
        <div class="navbar-item">
          <small>Tiện ích</small>
          <div>
            <span v-for="(item, index) of amenities" :key="item.index">
              <input type="checkbox" :id="item.id">
              <label :for="item.id">{{item.name}}</label>
            </span>
          </div>
        </div>
        <hr class="dropdown-divider">
        <div class="navbar-item">
          <small>Phòng ngủ</small>
          <div>
            <button 
            class="button is-default" 
            :class="{'is-primary': bed.status}" 
            v-for="(bed, index) of beds" 
            :key="index"
            @click="primaryFunc(true)">
              {{bed.name}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPrimary: false,
      isActive: false,
      beds: [
        { name: 'Tất cả', status: false },
        { name: '1+', status: false },
        { name: '2+', status: false },
        { name: '3+', status: false },
        { name: '4+', status: false }
      ],
      propertiesForSale: [
        { id: 'np', name: 'Nhà phố' },
        { id: 'ch', name: 'Căn hộ' },
        { id: 'bt', name: 'Biệt thự' },
        { id: 'dn', name: 'Đất nền' }
      ],
      propertiesForRent: [
        { id: 'pt', name: 'Phòng trọ' },
        { id: 'ch', name: 'Căn hộ' },
        { id: 'np', name: 'Nhà phố' },
        { id: 'bt', name: 'Biệt thự' }
      ],
      amenities: [
        { id: '01', name: 'Internet' },
        { id: '02', name: 'Máy lạnh' },
        { id: '03', name: 'Truyền hình cable' },
        { id: '04', name: 'Thang máy' },
        { id: '05', name: 'Cho phép thú cưng' },
        { id: '06', name: 'Bãi đỗ xe máy' },
        { id: '07', name: 'Bãi đỗ ôtô' },
        { id: '08', name: 'Camera an ninh' },
        { id: '09', name: 'Hồ bơi' },
        { id: '10', name: 'Ban công' }
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
    },
    showPrimary (item) {
      this.isPrimary = !this.isPrimary
    },
    isActive (eachItem) {
      return this.status === eachItem
    },
    primaryFunc (eachItem) {
      this.status = eachItem
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
  width: 21rem;
  text-align: center
}

.navbar-item > small {
  font-size: 1rem;
}

.dropdown .button:focus {
  box-shadow: none
}

.navbar-item {
  display: block;
  margin: auto;
}

.navbar-item div {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 0.5rem;
}

.navbar-item div span {
  flex-basis: 9rem;
  text-align: left;
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

.is-default {
  padding: 1rem;
  border: 1px solid #00d1b2;
  line-height: 0;
  border-right: none;
}

.is-default:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px
}

.is-default:last-child {
  border-right: 1px solid #00d1b2;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px
}

.is-default:hover {
  background-color: #00d1b2
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
