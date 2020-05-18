<template
  ><div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(cell, index) in cellArray"
          :key="index"
        >
          <slot :name="index">
            <h2>{{ cell.description }}</h2>
            <!-- <card
            :title="cell.name"
            :text="cell.description"
            :url="cell.image"
            @cardClick="goToDetail(cell.id)"
          /> -->
          </slot>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  components: {
    card: Card,
  },
  data() {
    return {
      swiperOption: {
        // slidesPerView: 4,
        slidesPerColumnFill: 'row',
        // slidesPerColumn: 4,
        slidesPerGroup: 1,

        slidesPerView: 1,
        // slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    };
  },
  props: ['cellArray'],
};
</script>

<style scoped></style>
