<template>
  <div>
    <div>
      <div class="projIntro">
        <swiper
            :modules="modules"
            :loop="true"
            :slides-per-view="1"
            :space-between="50"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :navigation="navigation"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: false }"
            class="swiperBox"
            @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div>
              <nut-image :src="url1" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <nut-image :src="url2" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <nut-image :src="url3" />
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" @click.stop="prevEl(item, index)"/>
          <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="swiper-button-next" @click.stop="nextEl"/>
          <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          <!-- 如果需要滚动条 -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </swiper>
      </div>

    </div>
  </div>
</template>
<script setup lang="js">
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '@/assets/images/nature-1.jpg';
import img2 from '@/assets/images/nature-2.jpg';
import img3 from '@/assets/images/nature-3.jpg';

const modules = [Autoplay, Pagination, Navigation, Scrollbar, A11y, EffectCube]

const url1 = ref(img1);
const url2 = ref(img2);
const url3 = ref(img3);

const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});

const prevEl = (item, index) => {
  console.log('上一张' + index + item)
};
const nextEl = () => {
  console.log('下一张')
};

// 更改当前活动swiper
const onSlideChange = (swiper) => {
  console.log(swiper.activeIndex)
}


</script>
<style lang="scss" scoped>


</style>
