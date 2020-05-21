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
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
export default {
  components: {
    'nxt-title': Title,
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
}
.instagram__cards {
  display: grid;
  grid-template-columns: repeat(4, 195px);
  grid-template-rows: repeat(2, 195px);
  justify-content: space-between;
  column-gap: 30px;
  row-gap: 30px;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .instagram__text {
    font-size: 16px;
  }
  .instagram__cards {
    grid-template-columns: repeat(4, 171px);
    grid-template-rows: repeat(2, 171px);
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
  .instagram__cards {
    grid-template-columns: repeat(4, 136px);
    grid-template-rows: repeat(2, 136px);
  }
}
@media screen and (max-width: 768px) {
  .instagram__container {
    flex-direction: column;
  }

  .instagram__cards {
    grid-template-columns: repeat(4, 157px);
    grid-template-rows: repeat(2, 157px);
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
