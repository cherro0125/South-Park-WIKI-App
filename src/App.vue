<template>
  <v-app>
    <router-view></router-view>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
