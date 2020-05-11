<template>
  <label class="textarea">
    {{ labelText }}
    <textarea
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </label>
</template>

<script>
export default {
  props: ['labelText', 'placeholder', 'name', 'required'],
};
</script>

<style scoped>
.textarea textarea {
  display: block;
  width: 100%;
  max-height: 100%;
  margin-top: 130px;
  resize: none;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  padding: 5px;
  font-size: 1.125rem;
  box-sizing: border-box;
  font-family: inherit;
}

.question-form__textarea {
  font-size: 1.125rem;
  font-weight: 500;
  color: #000;
}
</style>
