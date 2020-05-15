<template>
  <h2 :class="['title', `title__theme_${theme}`]">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.title {
  margin: 0px 0px 30px;
  font-size: 32px;
  max-width: 420px;
  font-family: 'Inter';
  font-weight: 600;
  line-height: 2.25rem;
}

.title__theme_underline {
  text-decoration: underline;
}

.title__theme_bm {
  margin-bottom: 60px;
}

.title.title__theme_info {
  font-size: 4rem;
  padding-top: 90px;
  margin-bottom: 70px;
}

.title__theme_wide {
  margin: 0;
  font-weight: normal;
  max-width: 80%;
  text-align: center;
}
</style>
