<template>
    <swiper class="swiper-item">
        <swiper-item v-for="item in topImages" :key="item.index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: "app",
  components: {
      Swiper,
      SwiperItem
  },
  props: {
      topImages: {
          type: Array,
          default() {
              return []
          }
      }
  },
  
  data() {
    return {

    }
  },
}
</script>

<style scoped>
    .swiper-item {
        height: 300px;
        overflow: hidden;
    }
</style>
