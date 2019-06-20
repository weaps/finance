<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <div class="">
        <button class="btn btn-default btn-small">ss</button>
        <button class="btn btn-primary">ss</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
@mixin flex($direction:colum, $inline:block)
  display: if($inline==block,flex,inline-flex)
  flex-direction: $direction
  flex-wrap: wrap
// @include flex(colum, block)
.flex-con
  @include flex
</style>
