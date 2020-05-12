<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitQuestionForm" class="question-form">
      <nxt-textarea
        class="question-form__textarea"
        :placeholder="placeholder"
        :labelText="question"
        :message="'message'"
        :required="'required'"
        v-model="message"
      />
      <div class="question-form__button-container">
        <nxt-button class="button" type="submit" :theme="'light'"
          >Назад</nxt-button
        >
        <nxt-button type="submit" :theme="'purple'">Далее</nxt-button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
export default {
  components: {
    'nxt-button': Button,
    'nxt-textarea': TextArea,
  },
  methods: {
    submitQuestionForm() {
      console.log(`message: ${this.message}`);
    },
  },
  props: {
    title: String,
    question: String,
    quote: String,
    placeholder: {
      type: String,
      default: 'Напишите тут',
    },
  },
  data() {
    return {
      message: '',
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

<style scoped>
.question-form__button-container {
  width: calc(36% + 30px);
  display: flex;
  justify-content: space-between;
}
</style>
