<template>
  <div class="story__container">
    <div class="story__card">
      <h2 class="story__title">
        Истории людей, победивших рак, но не свои привычки
      </h2>
      <p class="story__text">
        Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </p>
      <span class="sotry__pagination">< ></span>
    </div>
    <videoIframe :url="'https://www.youtube.com/embed/TVADtdg-z0c'" />
    <a
      href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
      class="story__link"
      >Все видео вы можете найте на нашем YouTube канале.</a
    >
  </div>
</template>

<script>
import VideoIframe from '@/components/VideoIframe';
export default {
  components: {
    videoIframe: VideoIframe,
  },
};
</script>

<style scoped></style>
