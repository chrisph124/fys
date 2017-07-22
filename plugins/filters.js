import Vue from 'vue'
Vue.filter('capitalize', val => val.toUpperCase())
Vue.filter('truncate', function (string, value) {
  return string.substring(0, value) + '...'
})
