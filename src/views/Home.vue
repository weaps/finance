<template>
  <div class="home">
    <publice-header></publice-header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PubliceHeader from '@/common/header/header'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted() {
    window.console.log(location)
  },
  components: {
    HelloWorld,
    PubliceHeader
  }
}
</script>