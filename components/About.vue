<template>
  <div class="about__container">
    <h2 class="about__title">Расскажите свою историю</h2>
    <p class="about__description">
      Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
      поделиться своей историей неизлечимых привычек, навязчивых идей и
      болезненных привязанностей.
    </p>
    <div class="about__link-container">
      <a href="#" class="about__link1">1-й вариант</a> <span>Рак Лечится</span>
      <a href="#" class="about__link2">1-й вариант</a> <span>Рак Лечится</span>
      <p class="about__text">
        Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
        испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
      </p>
    </div>
    <button class="btn about__form-button"></button>
  </div>
</template>

<script>
export default {};
</script>
.about__container{ }
<style scoped>
.about__container {
  background-color: #f7f7f7;
  display: flex;
}
.about__title {
  font-weight: 600;
}
.about__description {
  color: #666666;
}
@media screen and (min-width: 768px) {
  .about__container {
    flex-direction: column;
    align-items: center;
  }
  .about__title {
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-top: 80px;
  }
  .about__description {
    font-size: 13px;
    line-height: 16px;
    margin-top: 26px;
    width: 380px;
  }
}
</style>
