<template>
  <BaseBody :isGetData="isGetData">
    <CommonTitle title="正在热映"/>
    <MovieCarousel :movieList="isShowingMovieList" col="1"/>
    <CommonTitle title="最近热门电影"/>
    <MovieCarousel :movieList="hotMovieList" col="2"/>
    <CommonTitle title="最近热门电视剧"/>
    <MovieCarousel :movieList="hotTVList" col="2"/>
  </BaseBody>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonFooter from "@/common/commonFooter/CommonFooter.vue";
import CommonHeader from "@/common/commonHeader/CommonHeader.vue";
import BaseBody from "@/common/baseBody/BaseBody.vue";
import axios from "axios"
import Star from "@/common/star/Star.vue";
import CommonTitle from "@/common/commonTitle/CommonTitle.vue";
import MovieCarousel from "@/pages/home/components/movieCarousel/MovieCarousel.vue";

export default defineComponent({
  components: {MovieCarousel, CommonTitle, Star, BaseBody, CommonHeader, CommonFooter},
  data(){
    return{
      isShowingMovieList:[],
      hotMovieList:[],
      hotTVList:[],
      popularCommentList:[],
      isGetData:false
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
  methods:{
    getData(){
      axios.get("/api/home")
          .then((res:any) => {
            const data = res.data.data
            this.isShowingMovieList = data.isShowingMovieList
            this.hotMovieList = data.hotMovieList
            this.hotTVList = data.hotTVList
            this.popularCommentList = data.popularCommentList
            this.$nextTick(()=>{
              this.isGetData = true
            })
          })
    }
  },
  computed: {
    pages() {
      let pages: any[] = []
      this.isShowingMovieList.forEach((item,index)=>{
        let page = Math.floor(index / 4)
        if (!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  mounted(){
    this.getData()
  }
})
</script>

<style scoped lang="stylus">
@import "~@/assets/style/mixins.styl"

.carousel-item
  .item
    width 25%
    float: left;
    display inline-block
    text-align center
    overflow hidden
    padding-right 8px
    line-height 20px
    &:last-child
      padding-right 0
    .name
      padding 0 5px
      ellipsis()
      text-align center
      height 25px
      line-height 25px
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
