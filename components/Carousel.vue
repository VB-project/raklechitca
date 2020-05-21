<template>
  <div class="carousel">
    <div class="carousel__wrapper">
      <div class="carousel__item" itemArray>
        <slot>
          {{ itemArray[currentSlideIndex].description }}
        </slot>
      </div>
    </div>
    <div class="carousel__navigation">
      <nxt-button class="carousel__navigation-prev" @btnClick="prevSlide"
        >&lt;</nxt-button
      >
      <nxt-button class="carousel__navigation-next" @btnClick="nextSlide"
        >&gt;</nxt-button
      >
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
export default {
  components: {
    'nxt-button': Button,
  },
  props: {
    itemArray: {
      type: Array,
      default: [],
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlideIndex < this.itemArray.length - 1)
        this.currentSlideIndex++;
      console.log(this.currentSlideIndex);
      console.log(this.itemArray.length - 1);
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        console.log(this.currentSlideIndex);
      }
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: relative;
}
@media screen and (max-width: 768px) {
  .carousel__navigation-prev {
    position: absolute;
    top: 130px;
    left: -50px;
  }
  .carousel__navigation-next {
    position: absolute;
    top: 130px;
    right: -125px;
  }
  .carousel__item {
    margin-bottom: 60px;
    align-self: center;
  }
}
</style>
