<template>
  <div class="card">
    <div class="card__image">
      <img :src="url" alt="" />
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ['url', 'title', 'text'],
};
</script>

<style scoped>
.Card {
  display: grid;
}
</style>
