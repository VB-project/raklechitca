<template>
  <button
    :class="['button', `button_theme_${theme}`]"
    @click="$emit('btnClick')"
  >
    <slot>Some Button</slot>
  </button>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.button {
  font-size: 16px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
}
.button_theme_light {
  background-color: white;
  color: black;
  border: none;
}
.button_theme_light:hover {
  opacity: 0.9;
  background-color: white;
  color: black;
}
.button_theme_purple {
  background-color: #613a93;
  color: white;
}
.button_theme_purple:hover {
  background-color: #613a93;
  color: white;
  opacity: 0.9;
}
@media screen and (max-width: 390px) {
  .button {
    font-size: 12px;
    padding: 5px;
  }
}
</style>
