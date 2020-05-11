<template>
  <div>
    <h1>Шаг 1 из 12</h1>
    <form @submit.prevent="submitQuestionForm" class="question-form">
      <nxt-textarea
        class="question-form__textarea"
        :placeholder="'Напишите тут'"
        :labelText="'Как Вас Зовут?'"
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
  data() {
    return {
      message: '',
    };
  },
};
</script>

<style scoped></style>
