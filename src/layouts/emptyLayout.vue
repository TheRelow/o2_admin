<template>
  <v-app>
    <div :class="$style['layout']">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "emptyLayout"
}
</script>

<style module lang="scss">
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>