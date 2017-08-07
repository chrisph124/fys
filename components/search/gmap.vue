<template>
  <div>
    <gmap-map :center="center" :zoom="15" class="column is-12" :options="{scrollwheel: mapScroll}">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position"></gmap-marker>
    </gmap-map>
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
div {
  max-height: 100%;
  height: 850px;
  margin: 0 0 2.5rem 0 
}
</style>
