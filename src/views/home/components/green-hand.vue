<template>
  <panel class="mt20" :title="'新手特权'" :right="{name: '查看更多任务', path: '/'}">asdfasd</panel>
</template>

<script>
  import Panel from '@/components/panel/panel'
  export default {
    name: "green-hand",
    data() {
      return {
        key: 'value'
      }
    },
    components: {
      Panel
    }
  }
</script>

<style lang="scss" scoped>

</style>