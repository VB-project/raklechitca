<template>
  <div class="question-form">
    <div v-if="!this.$store.state.quiz.isFinished">
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
      <div
        :class="[
          'question-form__button-container',
          {
            'question-form__button-container_fin':
              this.$store.state.quiz.currentQuestion === 12,
          },
        ]"
      >
        <nxt-button
          class="button"
          :theme="'light'"
          :disabled="this.$store.state.quiz.currentQuestion === 1"
          @btnClick="prevQuestion"
          >Назад</nxt-button
        >
        <nxt-button
          :theme="'input'"
          v-if="this.$store.state.quiz.currentQuestion < 12"
          :disabled="answer === ''"
          @btnClick="nextQuestion"
          >Далее</nxt-button
        >
        <nxt-button
          v-else
          :theme="'input'"
          :disabled="answer === ''"
          @btnClick="nextQuestion"
          >Отправить</nxt-button
        >
        <p
          class="question-form__legal"
          v-if="this.$store.state.quiz.currentQuestion === 12"
        >
          Нажимая на кнопку «отправить», вы даете согласие на
          <a @click="goToLegal" target="blank" class="question-form__legal-link"
            >обработку персональных данных</a
          >
        </p>
      </div>
    </div>

    <div class="question-form__finish" v-else>
      <h2 class="question-form__title_fin">Спасибо что приняли участие!</h2>
      <nxt-button @btnClick="showPopUp" :theme="'purple'">Закрыть</nxt-button>
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
    showPopUp() {
      this.$store.commit('popup/togglePopup');
      this.$store.commit('quiz/setIsFinishedFalse');
    },
    goToLegal() {
      this.$router.push('/legal');
      this.$store.commit('popup/togglePopup');
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
.question-form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
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

.question-form__finish {
  display: flex;
  flex-direction: column;
  height: 520px;
  align-items: center;
}

.question-form__title_fin {
  font-size: 2rem;
  padding-bottom: 430px;
}

.question-form__button-container_fin {
  width: 100%;
  display: flex;
}
.question-form__legal {
  margin-left: 30px;
  max-width: 40%;
  font-size: 0.875rem;
  align-self: center;
}

.question-form__legal-link {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .question-form__button-container_fin {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .question-form__legal {
    margin-top: 10px;
    max-width: none;
  }
}
</style>
