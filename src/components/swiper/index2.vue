<template>
  <div class="swiper-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
      </swiper-slide>
      <!-- 如果需要分页和导航按钮，可以取消注释 -->
      <!-- <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        slideToClickedSlide: true,
        // 其他 Swiper 配置选项
      },
      slides: [
        {image: 'https://via.placeholder.com/400x300?text=Slide+1'},
        {image: 'https://via.placeholder.com/400x300?text=Slide+2'},
        {image: 'https://via.placeholder.com/400x300?text=Slide+3'},
        {image: 'https://via.placeholder.com/400x300?text=Slide+4'},
      ],
    };
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-slide {
  width: 300px; /* 你可以根据需要调整宽度 */
  height: 100%;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 添加圆角和阴影 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.swiper-slide-next, .swiper-slide-prev {
  transform: scale(0.9); /* 缩小左右两边的 slide */
}
</style>
