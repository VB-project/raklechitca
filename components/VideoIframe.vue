<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <a :href="link" class="video-iframe__link"
      >{{ linlText }}<u>{{ linkTextUnderline }}</u></a
    >
  </div>
</template>

<script>
export default {
  props: ['url', 'link', 'linlText', 'linkTextUnderline'],
};
</script>

<style scoped>
.video-iframe {
  width: 65%;
  padding-bottom: calc(9 * 65% / 16);
  position: relative;
}

a {
  color: #666666;
  text-decoration: none;
  position: absolute;
  bottom: 0;
}

iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: calc(100% - 30px);
}

@media screen and (max-width: 768px) {
  .video-iframe {
    width: 100%;
    padding-bottom: calc(9 * 100% / 16 + 30);
  }
}
</style>
