<template>
  <div :class="['about__container', `about__container_${theme}`]">
    <nxt-title>Расскажите свою историю</nxt-title>
    <slot></slot>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Textblock from '@/components/TextBlock';

export default {
  components: {
    'nxt-title': Title,
    'nxt-textblock': Textblock,
  },
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.about__container {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-right: -60px;
  margin-left: -60px;
  padding: 100px 60px;
}

.about__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
