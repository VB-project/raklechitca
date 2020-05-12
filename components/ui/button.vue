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
  box-sizing: border-box;
  max-width: 100%;
  flex: 0 0 auto;
  border: none;
}
.button_theme_light {
  background-color: white;
  color: black;
  padding: 0;
  font-size: 1.125rem;
  margin-left: 20px;
}
.button_theme_light:hover {
  opacity: 0.9;
  background-color: white;
  color: black;
}
.button_theme_purple {
  background-color: #613a93;
  color: white;
  width: 280px;
  height: 52px;
  /* margin-left: 30px; */
}
.button_theme_purple:hover {
  background-color: #613a93;
  color: white;
  opacity: 0.9;
}

.button_theme_width {
  width: 100%;
  height: 82px;
  background-color: #fbfbfb;
  margin-bottom: 30px;
  margin-top: 60px;
}

.button_theme_width:hover {
  background-color: #f8f8f8;
}
</style>
