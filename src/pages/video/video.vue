<template>
  <BaseBody>
    <MovieList/>
  </BaseBody>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CommonFooter from "@/common/commonFooter/CommonFooter.vue";
import CommonHeader from "@/common/commonHeader/CommonHeader.vue";
import BaseBody from "@/common/baseBody/BaseBody.vue";
import MovieList from "@/common/movieList/MovieList.vue";

export default defineComponent({
  components: {BaseBody, CommonHeader, CommonFooter,MovieList},
})
</script>

<style scoped lang="stylus">

</style>
