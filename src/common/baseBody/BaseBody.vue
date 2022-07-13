<template>
  <CommonHeader @showSiderBar="show"/>
  <div class="better-scroll-wrapper" ref="wrapper">
    <div class="base-body">
      <slot></slot>
    </div>
  </div>
  <CommonFooter/>
  <SiderbarMenu @hideSiderBar="hide" :siderbarIsShow="siderbarIsShow"/>
</template>



<script lang="ts">
import CommonHeader from "@/common/commonHeader/CommonHeader.vue";
import CommonFooter from "@/common/commonFooter/CommonFooter.vue";
import BScroll from "better-scroll"
import SiderbarMenu from "@/common/siderbarMenu/SiderbarMenu.vue";

import { defineComponent } from 'vue';

export default defineComponent({
  components: {SiderbarMenu, CommonFooter, CommonHeader},
  name:"baseBody",
  props: {
    isGetData:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      siderbarIsShow:false
    }
  },
  methods:{
    show(){
      this.siderbarIsShow = true
    },
    hide(){
      this.siderbarIsShow = false
    }
  },
  updated(){
    if(this.isGetData){
      //@ts-ignore
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true
      })
    }
  }
});
</script>

<style scoped lang="stylus">
.better-scroll-wrapper
  overflow hidden
  position:absolute
  right 0
  left: 0
  top 50px
  bottom 50px
  width 100%
  .base-body
    top 50px
    bottom 50px
    width 100%
</style>
