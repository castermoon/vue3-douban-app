<template>
  <ul class="footer-nav">
    <router-link to="/" tag="li" class="nav-item" :class="{active:this.$route.name ==='Home'}">
      <i class="iconfont">&#xe62e;</i>
      <div>首页</div>
    </router-link>
    <router-link to="/video" tag="li" class="nav-item" :class="{active:this.$route.name ==='Video'}">
      <i class="iconfont">&#xe604;</i>
      <div>书影音</div>
    </router-link>
    <router-link to="/groups" tag="li" class="nav-item" :class="{active:this.$route.name ==='Groups'}">
      <i class="iconfont">&#xe69a;</i>
      <div>小组</div>
    </router-link>
    <router-link to="/shop" tag="li" class="nav-item" :class="{active:this.$route.name ==='Shop'}">
      <i class="iconfont">&#xe608;</i>
      <div>市集</div>
    </router-link>
    <router-link to="/personal" tag="li" class="nav-item" :class="{active:this.$route.name ==='Personal'}">
      <i class="iconfont">&#xe600;</i>
      <div>我</div>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonFooter',
});
</script>

<style scoped lang="stylus">
.footer-nav
  height 50px
  width 100%
  display flex
  position fixed
  bottom 0
  left 0
  border-top 1px solid #ccc
  z-index 10
  .nav-item
    flex 1
    text-align center
    display flex
    flex-direction column
    color #000
    &.active
      color green
    .iconfont
      margin 10px 0 5px 0
</style>
