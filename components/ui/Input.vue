<template>
  <div class="input">
    <input
      class="input__item"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    required: String,
    placeholder: String,
  },
};
</script>

<style scoped>
.input .input__item {
  display: block;
  width: 100%;
  border: 1px solid #e8e8e8;
  height: 52px;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: inherit;
}

.input {
  flex: 1 1 auto;
}
</style>
