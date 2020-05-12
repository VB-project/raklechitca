<template>
  <h1 :class="['title', `title__theme_${theme}`]">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.title {
  margin: 0px 0px 30px;
  font-size: 32px;
  max-width: 420px;
  font-family: 'Inter';
  font-weight: 600;
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
  margin-bottom: 0;
}

.title__theme_wide {
  margin: 0;
  font-weight: normal;
  max-width: 80%;
  text-align: center;
}
</style>
