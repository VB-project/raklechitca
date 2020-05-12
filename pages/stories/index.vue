<template>
  <div class="stories-page">
    <nxt-title>Истории неизлечимых привычек</nxt-title>
    <div class="stories-page__search-container">
      <nxt-input />
      <nxt-button theme="purple">Поиск</nxt-button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
export default {
  components: {
    'nxt-title': Title,
    'nxt-input': Input,
    'nxt-button': Button,
  },
};
</script>

<style lang="css" scoped>
.stories-page {
  margin: 100px 60px;
}
.stories-page__search-container {
  display: flex;
  flex-direction: row;
}
</style>
