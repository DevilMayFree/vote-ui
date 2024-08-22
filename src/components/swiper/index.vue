<template>
  <div id="banner1">
    <swiper id="banner"
            :loop="true"
            :looped-slides="slides.length"
            slides-per-view="auto"
            :autoplay="autoPlayObj"
            :centered-slides="true"
            :initial-slide="2"
            :watch-slides-progress="true"
            :pagination="paginationObj"
            :navigation="true"
            :keyboard="true"
            :modules="modules"
            @progress="progressMethod"
            @set-transition="transitionMethod"
            class="mySwiper">

      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="'Slide ' + (index + 1)"/>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="js">
import $ from 'jquery';
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';

const modules = ref([Navigation, Pagination, Mousewheel, Keyboard]);

const paginationObj = ref({
  el: '.banner_page',
  clickable: true,
});

const autoPlayObj = ref({
  disableOnInteraction: false,
  delay: 2000,
})

const slides = ref([
  {image: 'https://swiperjs.com/demos/images/nature-1.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-2.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-3.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-4.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-5.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-6.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-7.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-8.jpg'},
  {image: 'https://swiperjs.com/demos/images/nature-9.jpg'}
]);

const progressMethod = (process) => {
  console.log('progressMethod')
  const slidesList = $(slides.value);

  for (let i = 0; i < slidesList.length; i++) {
    let slide = slidesList.eq(i);
    let slideProgress = slidesList[i].progress;

    let modify = 1;
    if (Math.abs(slideProgress) > 1) {
      modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
    }

    let translate = slideProgress * modify * 318 + 'px';
    let scale = 1 - Math.abs(slideProgress) / 9;
    let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
    /*slide.transform('translateX(' + translate + ') scale(' + scale + ')');
    slide.css('zIndex', zIndex);
    slide.css('opacity', 1);*/

    slide.css('transform', 'translateX(' + translate + ') scale(' + scale + ')');
    slide.css('zIndex', zIndex);
    slide.css('opacity', 1);

    if (Math.abs(slideProgress) > 3) {
      slide.css('opacity', 0);
    }
  }
}

const transitionMethod = (transition) => {
  // const slidesList = slides.value;
  const slidesList = $(slides.value);
  for (let i = 0; i < slidesList.length; i++) {
    let slide = slidesList.eq(i);
    slide.css('transform',transition)
    // slide.transition(transition);
  }
}

</script>