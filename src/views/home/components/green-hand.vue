<template>
  <panel class="mt20 flex" :title="'新手特权'" :right="{name: '查看更多任务', path: '/'}">
    <div class="panel-body flex-2">
      <div class="flex border-r">asdfasdfasd</div>
      <div class="flex">asdfasdf</div>
    </div>
  </panel>
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