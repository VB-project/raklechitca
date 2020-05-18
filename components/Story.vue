<template>
  <div class="story__container">
    <div class="story__card">
      <div class="story__card-container">
        <nxt-title
          >Истории людей, победивших рак, но не свои привычки</nxt-title
        >
        <p class="story__text">
          <carousel :itemArray="users"></carousel>
        </p>
      </div>
    </div>
    <nxt-videoIframe
      :url="'https://www.youtube.com/embed/coOppM34GtI'"
      :link="
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F'
      "
      :linlText="'Все видео вы можете найте на нашем '"
      :linkTextUnderline="'YouTube канале.'"
    />
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe';
import Title from '@/components/Title';
import Slider from '@/components/Slider';
import Carousel from '@/components/Carousel';
export default {
  components: {
    'nxt-videoIframe': VideoIframe,
    'nxt-title': Title,
    slider: Slider,
    carousel: Carousel,
  },
  props: {
    users: {},
  },
};
</script>

<style scoped>
.story__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.story__card {
  max-width: 413px;
}
.story__card-container {
  height: 100%;
}
.story__text {
  display: flex;
  height: 70%;
  max-width: 340px;
  color: #666666;
}
.videoIframe-container {
  width: 100%;
  height: 100%;
  position: relative;
  right: 0px;
}
</style>
