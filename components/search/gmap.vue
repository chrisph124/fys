<template>
  <div>
    <gmap-map :center='center' :zoom='15' class='column is-12' :options='{scrollwheel: mapScroll, styles: styles}'>
      <gmap-marker :key='index' v-for='(m, index) in markers' :position='m.position' :clickable='true' :draggable='false' @click='center=m.position'></gmap-marker>
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
  head: {
    script: [
      { src: '~assets/js/map-icons.min.js' }
    ],
    css: [
      { src: '~assets/css/map-icons.min.js' }
    ]
  },
  data () {
    return {
      mapScroll: false,
      center: { lat: 21.028511, lng: 105.804817 },
      markers: [{
        position: { lat: 21.028511, lng: 105.804817 },
        icon: {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          size: {width: 46, height: 46, f: '10px', b: '10px'},
          scaledSize: {width: 23, height: 23, f: '10px', b: '10px'}
        }
      }, {
        position: { lat: 21.029132, lng: 105.806759 }
      }, {
        position: { lat: 21.016013, lng: 105.844668 }
      }],
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#6195a0'
            }
          ]
        },
        {
          'featureType': 'administrative.province',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            {
              'lightness': '0'
            },
            {
              'saturation': '0'
            },
            {
              'color': '#f5f5f2'
            },
            {
              'gamma': '1'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'all',
          'stylers': [
            {
              'lightness': '-3'
            },
            {
              'gamma': '1.00'
            }
          ]
        },
        {
          'featureType': 'landscape.natural.terrain',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#bae5ce'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#4DB6AC'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            },
            {
              'lightness': 45
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'lightness': '-3'
            },
            {
              'gamma': '1.00'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#fac9a9'
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels.text',
          'stylers': [
            {
              'color': '#4e4e4e'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#787878'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'transit.station.airport',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'hue': '#0a00ff'
            },
            {
              'saturation': '-77'
            },
            {
              'gamma': '0.57'
            },
            {
              'lightness': '0'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#43321e'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'hue': '#ff6c00'
            },
            {
              'lightness': '4'
            },
            {
              'gamma': '0.75'
            },
            {
              'saturation': '-68'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#eaf6f8'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#c7eced'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'lightness': '-49'
            },
            {
              'saturation': '-53'
            },
            {
              'gamma': '0.79'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.medical',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        }
      ]
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
