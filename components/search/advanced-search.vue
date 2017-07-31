<template>
  <div>
    <gmap-map :center="center" :zoom="17" class="column is-12" :options="{scrollwheel: mapScroll}">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position"></gmap-marker>
    </gmap-map>
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
          <div class="navbar-link">Phòng ngủ</div>
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
          <div class="navbar-link">Phòng ngủ</div>
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

<script>
import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
export default {
  data () {
    return {
      mapScroll: false,
      center: { lat: 21.028511, lng: 105.804817 },
      markers: [{
        position: { lat: 21.028511, lng: 105.804817 }
      }, {
        position: { lat: 21.029132, lng: 105.806759 }
      }]
    }
  }
}
</script>


<style scoped>
@media screen and (min-width: 1920px) {
  .input {
    width: 1000px
  }
}

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
}
</style>
