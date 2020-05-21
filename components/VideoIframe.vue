<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video-iframe-item"
    >
    </iframe>
    <a :href="link" class="video-iframe__link"
      >{{ linlText
      }}<span class="video-iframe__link_underline">{{
        linkTextUnderline
      }}</span></a
    >
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    linlText: {
      type: String,
      required: true,
    },
    linkTextUnderline: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.video-iframe {
  width: 65%;
  padding-bottom: calc(9 * 65% / 16);
  position: relative;
}

.video-iframe-item {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: calc(100% - 30px);
}
.video-iframe__link {
  position: absolute;
  bottom: 0;
  color: #666666;
  text-decoration: none;
}

.video-iframe__link_underline {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .video-iframe__link {
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>
