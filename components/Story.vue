<template>
  <div class="story__container">
    <div class="story__card">
      <div class="story card-container">
        <nxt-title
          >Истории людей, победивших рак, но не свои привычки</nxt-title
        >
        <p class="story__text">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
        <span class="sotry__pagination">< ></span>
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
export default {
  components: {
    'nxt-videoIframe': VideoIframe,
    'nxt-title': Title,
  },
};
</script>

<style scoped>
.story__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.story__card {
  max-width: 413px;
}
.story__text {
  max-width: 340px;
  color: #666666;
  padding-bottom: 150px;
}
.videoIframe-container {
  width: 100%;
  height: 100%;
  position: relative;
  right: 0px;

  /* width: 100%; */
  /* padding-bottom: calc(9 * 60% / 16); */
  /* position: relative; */
}
</style>
