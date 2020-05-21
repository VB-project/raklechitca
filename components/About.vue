<template>
  <div :class="['about__container', `about__container_${theme}`]">
    <nxt-title>Расскажите свою историю</nxt-title>
    <div class="about__content">
      <div class="about__content-description">
        <p class="about__content-description-text">
          Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </p>
      </div>
      <div class="about__option-box">
        <div class="about__options">
          <span class="about__option about__option_active">1-й вариант</span>
          <span class="about__option">2-й вариант</span>
        </div>
        <div class="about__option-text">
          <span class="about__option-text-item"
            >Заполнить подробную форму прямо на сайте и мы опубликуем вашу
            историю после проверки. Пожалуйста, заполняйте все пункты корректно,
            если вы испытаете какие-то сложности, воспользуйтесь 2-м
            вариантом.</span
          >
          <!-- <span class="about__option-text-item">Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.</span> -->
          <nxt-button
            class="about__button"
            @btnClick="showPopUp"
            :theme="'purple'"
            >Заполнить форму</nxt-button
          >
          <!-- <nxt-button class="about__button" :theme="'purple'">Оставить контакт</nxt-button> -->
        </div>
      </div>
    </div>
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
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
  },
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.about__container {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-right: -60px;
  margin-left: -60px;
  padding: 100px 60px;
}

.about__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.about__content-description {
  margin-right: 195px;
  width: 340px;
}

.about__option-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.about__option {
  margin-bottom: 10px;
}

.about__option_active {
  font-weight: bold;
}
.about__options {
  display: flex;
  flex-direction: column;
  min-width: 100px;
  margin-right: 40px;
}

.about__option-text {
  display: flex;
  flex-direction: column;
}

.about__option-text-item {
  margin-bottom: 78px;
}

.about__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .about__container {
    margin-left: -50px;
    margin-right: -50px;
  }
}

@media screen and (max-width: 768px) {
  .about__container {
    flex-direction: column;
    margin-right: -40px;
    margin-left: -40px;
    padding: 80px 80px;
    align-items: center;
  }
  .about__content {
    flex-direction: column;
    max-width: 50%;
  }
  .about__option-box {
    flex-direction: column;
  }
  .about__options {
    flex-direction: row;
  }
  .about__content-description {
    margin: 0;
    width: 100%;
    margin-bottom: 80px;
  }
  .about__option {
    margin-right: 30px;
  }
  .about__option:last-child {
    margin-right: 0px;
  }
  .about__option-text-item {
    margin-bottom: 50px;
  }
  .about__button {
    max-width: 60%;
  }
}
</style>
