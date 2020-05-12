<template>
  <div :class="['about__container', `about__container_${theme}`]">
    <nxt-title>Расскажите свою историю</nxt-title>

    <!-- <nxt-textblock> -->
    <slot></slot>
    <!-- </nxt-textblock> -->
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
  props: ['theme'],
  data() {},
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

.about__container.about__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding: 70px 60px 100px 60px;
}
</style>
