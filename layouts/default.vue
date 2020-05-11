<template>
  <div>
    <main-header @btnClick="popupHandler" />
    <nuxt />
    <nxt-footer />

    <overlay v-if="popupShown" @overlayClick="popupHandler"></overlay>
    <pop-up v-if="popupShown" @closeClick="popupHandler" :theme="'dark'">
      <nxt-questionForm />
      <!-- <h1>Шаг 1 из 12</h1>
      <form @submit.prevent="submitQuestionForm" class="question-form">
        <nxt-textarea
          class="question-form__textarea"
          :placeholder="'Напишите тут'"
          :labelText="'Как Вас Зовут?'"
          :name="'message'"
          :required="'required'"
          v-model="message"
        />
        <div class="question-form__button-container">
          <nxt-button class="button" type="submit" :theme="'light'"
            >Назад</nxt-button
          >
          <nxt-button type="submit" :theme="'purple'">Далее</nxt-button>
        </div>
      </form> -->
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Footer from '@/components/Footer';
import QuestionForm from '@/components/QuestionForm';
export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
    'nxt-footer': Footer,
    'nxt-questionForm': QuestionForm,
  },
  methods: {
    popupHandler() {
      this.popupShown = !this.popupShown;
    },
  },
  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style>
html {
  font-family: Inter;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  min-width: 320px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
li {
  line-height: 1.5;
}
/*  СТИЛИ ФОРМЫ */
.question-form {
  margin-top: 40px;
}
.question-form__button-container {
  position: fixed;
  bottom: 40px;
}
</style>
