<template>
  <div class="swiper-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="'Slide ' + (index + 1)"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
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
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slides: [
        {image: 'https://via.placeholder.com/600x400?text=Slide+1'},
        {image: 'https://via.placeholder.com/600x400?text=Slide+2'},
        {image: 'https://via.placeholder.com/600x400?text=Slide+3'},
        {image: 'https://via.placeholder.com/600x400?text=Slide+4'},
      ],
    };
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
