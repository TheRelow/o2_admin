<template>
  <div id="app" class="page">
    <component :is="layout"></component>
  </div>
</template>

<script>
import mainLayout from '@/layouts/mainLayout'
import emptyLayout from '@/layouts/emptyLayout'

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    emptyLayout,
    mainLayout
  }
};
</script>
