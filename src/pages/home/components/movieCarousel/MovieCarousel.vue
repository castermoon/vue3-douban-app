<template>
  <a-carousel :after-change="onChange">
    <div class="carousel-item " v-for="(page,index) of pages" :key="index">
      <div class="item " v-for="item of page" :key="item.id">
        <div class="icon"><img :src="item.cover"/></div>
        <div class="name">{{ item.name }}</div>
        <div class="star-wrapper"><Star :score="item.score"/></div>
        <span class="score">{{item.score}}</span>
      </div>
    </div>
  </a-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonFooter from "@/common/commonFooter/CommonFooter.vue";
import CommonHeader from "@/common/commonHeader/CommonHeader.vue";
import BaseBody from "@/common/baseBody/BaseBody.vue";
import Star from "@/common/star/Star.vue";
import CommonTitle from "@/common/commonTitle/CommonTitle.vue";

export default defineComponent({
  components: {CommonTitle, Star, BaseBody, CommonHeader, CommonFooter},
  props:{
    movieList: {
      type: Array,
      default(){
        return []
      }
    },
    col:{
      type:Number,
      default:1
    }
  },
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };
    return {
      onChange,
    };
  },
  computed: {
    pages() {
      let pages: any[] = []
      let count = this.col * 4
      this.movieList.forEach((item,index)=>{
        let page = Math.floor(index / count)
        if (!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
})
</script>

<style scoped lang="stylus">
@import "~@/assets/style/mixins.styl"

.carousel-item
  .item
    width 25%
    text-align center
    display inline-block
    vertical-align top
    overflow hidden
    padding-right 8px
    margin-bottom 10px
    &:last-child
      margin-bottom 0
    &:last-child
      padding-right 0
    .name
      padding 0 5px
      ellipsis()
      text-align center
      height 25px
    .star-wrapper
      height 20px
    .icon
      height 115px
      overflow hidden
      img
        width 100%
    .score
      font-size 14px
</style>
