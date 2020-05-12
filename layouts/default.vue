<template>
  <div>
    <main-header @btnClick="popupHandler" />
    <nuxt />
    <nxt-footer />

    <overlay v-if="popupShown" @overlayClick="popupHandler"></overlay>
    <pop-up v-if="popupShown" @closeClick="popupHandler" :theme="'dark'">
      <nxt-questionForm
        :key="questions[0].id"
        :title="questions[0].title"
        :question="questions[0].question"
      ></nxt-questionForm>
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
    aa() {
      console.log('sss');
    },
  },
  data() {
    return {
      popupShown: false,
      questions: [
        {
          id: '1',
          title: 'Шаг 1 из 12',
          question: 'Как вас зовут?',
        },
        {
          id: '1',
          title: 'Шаг 2 из 12',
          question: 'Было ли у вас онкологическое заболевание? ',
          description:
            'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        {
          id: '1',
          title: 'Шаг 3 из 12',
          question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
          description:
            'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
      ],
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
