<template>
  <div class="card">
    <div class="card__images">
      <img :src="url" class="card__image" alt="" />
    </div>
    <div class="card__title">{{ title }}</div>
    <div class="card__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ['url', 'title', 'text'],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.card__title {
  font-weight: 600;
}
.card__text {
  color: #666666;
}
@media screen and (min-width: 768px) {
  .card {
    width: 216px;
  }
  .card__image {
    width: 216px;
    height: 216px;
  }
  .card__title {
    font-size: 18px;
    line-height: 22px;
    margin-top: 16px;
  }
  .card__text {
    font-size: 13px;
    line-height: 16px;
    margin-top: 16px;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    width: 208px;
  }
  .card__image {
    width: 208px;
    height: 208px;
  }
}
@media screen and (min-width: 1280px) {
  .card {
    width: 265px;
  }
  .card__image {
    width: 265px;
    height: 265px;
  }
  .card__title {
    font-size: 22px;
    line-height: 22px;
    margin-top: 20px;
  }
  .card__text {
    font-size: 14px;
    line-height: 18px;
    margin-top: 14px;
  }
}
@media screen and (min-width: 1440px) {
  .card {
    width: 300px;
  }
  .card__image {
    width: 300px;
    height: 300px;
  }
}
</style>
