<template>
  <div class="instagram__container">
    <div class="instagram_card">
      <nxt-title class="instagram__title" :theme="'underline'"
        >Инстаграм</nxt-title
      >
      <p class="instagram__text">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="instagram__cards">
      <div
        v-for="item in itemArray.slice(0, 8)"
        :key="item.id"
        class="instagram__image-container"
      >
        <img class="instagram__image-item" :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
export default {
  components: {
    'nxt-title': Title,
  },
  props: {
    itemArray: {
      type: Array,
      default: {},
    },
  },
};
</script>

<style scoped>
.instagram__container {
  display: flex;
  margin-bottom: 100px;
  width: 100%;
}

.instagram_card {
  margin-right: 110px;
  max-width: 24%;
}

.instagram__cards {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 30px;
  row-gap: 30px;
  width: 100%;
}

.instagram__image-container {
  width: 100%;
  padding-top: 100%;
  background-color: black;
  position: relative;
}

.instagram__image-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__text {
    font-size: 16px;
  }

  .instagram__container {
    margin-bottom: 90px;
  }
}

@media screen and (max-width: 1024px) {
  .instagram__container {
    margin-bottom: 80px;
  }

  .instagram__text {
    font-size: 13px;
  }
}
@media screen and (max-width: 768px) {
  .instagram__container {
    flex-direction: column;
  }

  .instagram__cards {
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 60px;
  }

  .instagram__text {
    margin-right: 154px;
    margin-left: 154px;
  }

  .instagram_card {
    margin: 0;
  }
}
</style>
