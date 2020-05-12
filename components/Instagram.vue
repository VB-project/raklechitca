<template>
  <div class="instagram__container">
    <div class="instagram_card">
      <nxt-title :theme="'underline'">Инстаграм</nxt-title>
      <p class="instagram__text">
        Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
        Все истории, где нет нецензурных выражений и запрещенного контента
        попадают сюда. Следите за правильным написанием хештега, чтобы мы не
        пропустили вашу историю.
      </p>
    </div>
    <div class="instagram__cards">
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
      <img
        src="https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg"
        alt=""
        width="195px"
        height="195px"
      />
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
}
</style>
