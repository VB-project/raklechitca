<template>
  <div class="card" @click="$emit('cardClick')">
    <div class="card__image">
      <img class="card__image-item" :src="url" alt="" />
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
.card__image {
  background-color: #ededed;
}
.card__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  margin-top: 20px;
}

.card__image-item {
  width: 300px;
  height: 300px;
}

.card__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 0, 875rem;
  color: #666666;
  margin-top: 16px;
  padding-right: 15px;
}
</style>
