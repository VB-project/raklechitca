<template>
  <div class="question-form">
    <h2 class="question-form__title">{{ currentQuestion.title }}</h2>
    <p class="question-form__question">
      <span class="question-form__question-main">{{
        currentQuestion.question
      }}</span>
      <span
        v-if="currentQuestion.description"
        class="question-form__question-description"
        >{{ currentQuestion.description }}</span
      >
    </p>
    <nxt-textarea
      class="question-form__textarea"
      :placeholder="placeholder"
      :required="'required'"
      v-model="answer"
    />
    <div class="question-form__button-container">
      <nxt-button
        class="button"
        :theme="'light'"
        :disabled="this.$store.state.quiz.currentQuestion === 1"
        @btnClick="prevQuestion"
        >Назад</nxt-button
      >
      <nxt-button
        :theme="'input'"
        :disabled="answer === ''"
        @btnClick="nextQuestion"
        >Далее</nxt-button
      >
    </div>
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
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion];
    },
  },
  methods: {
    async prevQuestion() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer || '';
    },
    async nextQuestion() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer || '';
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
};
</script>

<style scoped>
.question-form__title {
  font-size: 2rem;
}

.question-form__question {
  margin-top: 40px;
  font-weight: 500;
  font-size: 1.125rem;
}

.question-form__button-container {
  width: 36%;
  display: flex;
  justify-content: space-between;
}
</style>
