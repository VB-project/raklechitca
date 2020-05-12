<template>
  <label class="input">
    {{ labelText }}
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: ['labelText', 'type', 'placeholder', 'name', 'required'],
};
</script>

<style scoped>
.input input {
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
