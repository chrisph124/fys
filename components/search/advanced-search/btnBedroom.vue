<template>
    <button class="button is-default" :class="{'is-primary': isPrimary}" @click="showPrimary(item)">
      {{item}}
    </button>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      isPrimary: false
    }
  },
  methods: {
    showPrimary (item) {
      this.isPrimary = !this.isPrimary
    }
  }
}
</script>

<style scoped>
.is-default {
  padding: 1rem;
  border: 1px solid #00d1b2;
  line-height: 0
}

.is-default:not(:last-child) {
  border-right: none
}

.is-default:first-child {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px
}

.is-default:last-child {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px
}

.is-default:hover {
  background-color: #00d1b2
}
</style>
