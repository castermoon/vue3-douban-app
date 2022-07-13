<template>
  <div class="header" >
    <div class="menu" @click="menuBtnClick">
      <i class="iconfont">&#xeaf1;</i>
    </div>
    <div class="search">
      搜索
    </div>
    <div class="message">
      <i class="iconfont">&#xe624;</i>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonFooter',
  emits:["showSiderBar"],
  methods:{
    menuBtnClick(){
      this.$emit('showSiderBar')
    }
  }
});
</script>

<style scoped lang="stylus">
.header
  position fixed
  top 0
  height 50px
  width 100%
  line-height 50px
  display flex
  .menu
    text-align center
    flex 0 0 1.3rem
  .search
    flex 1
    text-align center
  .message
    text-align center
    flex 0 0 1rem
  .iconfont
    color green
    font-size 0.6rem


</style>
