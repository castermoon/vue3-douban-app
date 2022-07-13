<template>
  <div class="sidebar-menu-mask" :class="{active:siderbarIsShow}" @click="hide"></div>
  <div class="sidebar-menu" :class="{active:siderbarIsShow}">
    <div class="menu-top"><i class="iconfont" @click="hide">&#xe708;</i></div>
    <div class="userInfo">
      <div class="icon-wrapper"><img class="icon" src="https://i.postimg.cc/yxMQQrWN/image.jpg"/></div>
      <span class="name">灰色之光</span>
    </div>
    <ul class="menu-list">
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>我的收藏</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>我的关注</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>浏览历史</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>青少年模式</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>设置</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>帮助与反馈</span>
      </li>
      <li class="menu-item">
        <i class="iconfont">&#xe708;</i><span>社区管理中心</span>
      </li>
    </ul>
    <ul class="menu-bottom">
      <li class="menu-bottom-item">
        <i class="iconfont">&#xe62e;</i>
        <div>订单</div>
      </li>
      <li class="menu-bottom-item">
        <i class="iconfont">&#xe62e;</i>
        <div>购物车</div>
      </li>
      <li class="menu-bottom-item">
        <i class="iconfont">&#xe62e;</i>
        <div>钱包</div>
      </li>
      <li class="menu-bottom-item">
        <i class="iconfont">&#xe62e;</i>
        <div>豆瓣时间</div>
      </li>
      <li class="menu-bottom-item">
        <i class="iconfont">&#xe62e;</i>
        <div>豆瓣阅读书架</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name:"SiderbarMenu",
  props: {
    siderbarIsShow:Boolean
  },
  data(){
    return {
    }
  },
  methods:{
    hide(){
      this.$emit('hideSiderBar')
    }
  },
  emits:["hideSiderBar"]
});


</script>

<style scoped lang="stylus">
.sidebar-menu-mask
  position fixed
  top 0
  right 0
  left 0
  bottom 0
  background rgba(0,0,0,0.5);
  display none
  &.active
    display block
.sidebar-menu
  width 300px
  background #FFFDFDFF
  position fixed
  top 0
  left -300px
  bottom 0
  right 0
  border-radius 0 18px 18px 0
  transition all 0.5s
  z-index 20
  &.active
    left 0
  .menu-top
    line-height 40px
    margin-left 10px
    font-size 20px
  .userInfo
    display flex
    height 40px
    .icon-wrapper
      margin-left 5px
      width 30px
      height 30px
      border-radius 50%
      border 1px solid #ccc
      overflow hidden
      display flex
      justify-content center
      align-items center
      .icon
        width 40px
        height 40px
    .name
      margin-left 10px
      font-size 16px
      line-height 35px
      font-weight bold
  .menu-list
    line-height 40px
    padding 10px
    .iconfont
      font-size 16px
      margin-right 15px
    .menu-item
      font-size 16px
  .menu-bottom
    position absolute
    display flex
    background #fff
    bottom 0
    left 0
    height 100px
    flex-wrap wrap
    .menu-bottom-item
      width 85px
      text-align center
      line-height 20px
</style>
