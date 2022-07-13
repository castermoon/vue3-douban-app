<template>
  <BaseBody>
    shop
  </BaseBody>
</template>

<script lang="ts">
import CommonFooter from "@/common/commonFooter/CommonFooter.vue";
import CommonHeader from "@/common/commonHeader/CommonHeader.vue";
import BaseBody from "@/common/baseBody/BaseBody.vue";
import {defineComponent} from "vue";



export default defineComponent({
  components: {BaseBody, CommonHeader, CommonFooter},

})


</script>

<style scoped lang="stylus">

</style>
