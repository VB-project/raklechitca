<template>
  <div class="habits__container">
    <nxt-title :theme="'bm'">Истории неизлечимых привычек</nxt-title>
    <div class="habits__grid">
      <slot></slot>
    </div>
    <nxt-button @btnClick="goToStories" :theme="'width'"
      >Больше статей</nxt-button
    >
  </div>
</template>

<script>
import Title from '@/components/Title';
import Button from '@/components/ui/Button';
export default {
  components: {
    'nxt-title': Title,
    'nxt-button': Button,
  },
  methods: {
    goToStories() {
      this.$router.push('/stories/');
    },
  },
};
</script>

<style scoped>
.habits__grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 40px;
  row-gap: 60px;
}
</style>
