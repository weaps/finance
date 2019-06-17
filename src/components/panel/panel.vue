<template>
  <div class="panel">
    <header class="panel-header" :class="panelHeaderStyle" v-text="title"></header>
    <slot class="panel-body"></slot>
  </div>
</template>

<script>
  export default {
    name: "panel",
    props: {
      panelHeaderStyle: {
        type: String,
        default() {
          return ''
        }
      },
      title: {
        type: String,
        default() {
          return '标题'
        }
      }
    }
  }
</script>

<style scoped>

</style>