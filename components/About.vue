<template>
  <div class="about__container">
    <h2 class="about__title">Расскажите свою историю</h2>
    <p class="about__description">
      Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
      поделиться своей историей неизлечимых привычек, навязчивых идей и
      болезненных привязанностей.
    </p>
    <div class="about__link-container">
      <a href="#" class="about__link">1-й вариант</a>
      <a href="#" class="about__link about__link_color_grey">2-й вариант</a>
    </div>
    <p class="about__text">
      Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
      после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
      испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
    </p>
    <button class="btn about__form-button">Заполнить форму</button>
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
.about__link-container {
  display: flex;
}
.about__link {
  color: #000000;
}
.about__link_color_grey {
  color: #a2a2a2 !important;
}
.about__form-button {
  color: #ffffff;
  background-color: #613a93;
  outline: none;
  border: none;
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
  .about__link-container {
    flex-direction: row;
    margin-top: 80px;
    width: 380px;
  }
  .about__link {
    margin-right: 30px;
    font-size: 15px;
    line-height: 19px;
  }
  .about__text {
    margin-top: 30px;
    font-size: 15px;
    line-height: 19px;
    color: #666666;
    width: 380px;
  }
  .about__form-button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
    margin-top: 50px;
    margin-bottom: 80px;
  }
}
@media screen and (min-width: 1024px) {
  .about__container {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: unset;
  }
  .about__title {
    margin-top: 80px;
    margin-left: 50px;
    margin-right: calc(100% - 338px);
    width: 288px;
    text-align: left;
  }
  .about__description {
    margin-left: 50px;
    margin-top: 20px;
    width: 260px;
  }
  .about__link-container {
    margin-top: 20px;
    margin-left: 99px;
    margin-right: 30px;
    flex-direction: column;
    width: unset;
  }
  .about__link {
    margin-right: 0;
  }
  .about__link:first-of-type {
    margin-bottom: 8px;
  }
  .about__text {
    margin-top: 20px;
    margin-right: 50px;
    margin-left: auto;
    width: 445px;
  }
  .about__form-button {
    margin-left: auto;
    margin-right: 267px;
    width: 230px;
    height: 46px;
    margin-bottom: 80px;
  }
}
@media screen and (min-width: 1280px) {
  .about__title {
    margin-top: 90px;
    font-size: 28px;
    line-height: 32px;
    width: 367px;
  }
  .about__description {
    font-size: 16px;
    line-height: 20px;
    margin-top: 30px;
    width: 305px;
  }
  .about__link-container {
    margin-top: 30px;
    margin-left: 160px;
    margin-right: 40px;
  }
  .about__link {
    font-size: 18px;
    line-height: 22px;
  }
  .about__link:first-of-type {
    margin-bottom: 10px;
  }
  .about__text {
    margin-top: 30px;
    width: 570px;
    font-size: 18px;
    line-height: 22px;
  }
  .about__form-button {
    margin-bottom: 90px;
    margin-right: 390px;
    font-size: 16px;
    line-height: 19px;
  }
}
@media screen and (min-width: 1440px) {
  .about__title {
    margin-left: 60px;
    margin-top: 100px;
    font-size: 32px;
    line-height: 36px;
  }
  .about__description {
    margin-left: 60px;
    margin-top: 32px;
    width: 340px;
    font-size: 18px;
    line-height: 22px;
  }
  .about__link-container {
    margin-top: 32px;
    margin-left: 195px;
    margin-right: 40px;
  }
  .about__link {
    font-size: 18px;
    line-height: 22px;
  }
  .about__text {
    width: 635px;
    font-size: 18px;
    line-height: 22px;
    margin-top: 32px;
    margin-right: 60px;
  }
  .about__form-button {
    width: 280px;
    height: 52px;
    font-size: 16px;
    line-height: 19px;
    margin-right: 420px;
  }
}
</style>
