<template>
<the-navbar></the-navbar>
  <router-view/>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    TheNavbar
  }
}
</script>

<style lang="scss">
@import 'assets/scss/style';
#app {
  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #414141;
  font-size: 12px;
}

body{
  background: #F4F5F5 !important;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
