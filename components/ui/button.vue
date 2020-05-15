<template>
  <button
    :class="[
      'button',
      `button__theme-${theme}`,
      { button__disabled: disabled },
    ]"
    @click="$emit('btnClick')"
    :disabled="disabled"
  >
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
    type: String,
    disabled: Boolean,
    className: String,
  },
};
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  max-width: 100%;
  flex: 0 0 auto;
  border: none;
}
.button__theme-light {
  background-color: white;
  color: #c0c0c0;
  padding: 0;
  font-size: 1.125rem;
  margin-left: 20px;
}
.button__theme-light:hover {
  opacity: 0.9;
  background-color: white;
  color: black;
}
.button__theme-purple {
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
  /* margin-left: 30px; */
}
.button__theme-purple:hover {
  background-color: #613a93;
  color: white;
  opacity: 0.9;
}

.button__theme-width {
  width: 100%;
  height: 82px;
  background-color: #fbfbfb;
  margin-bottom: 30px;
  margin-top: 60px;
}

.button__theme-width:hover {
  background-color: #f8f8f8;
}

.button__theme-input {
  margin-left: 30px;
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
}

.button__disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
