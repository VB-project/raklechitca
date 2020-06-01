<template>
  <div class="popup">
    <div
      :class="['close', `close_theme_${theme}`]"
      @click="$emit('closeClick')"
    ></div>
    <slot>Содержимое окна</slot>
  </div>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 920px;
  height: 600px;
  box-sizing: border-box;
  padding: 40px;
  background-color: #fff;
  z-index: 2;
}
.close {
  position: absolute;
  top: 44px;
  right: 42px;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background: center;
  cursor: pointer;
  background-image: url('~@/assets/images/close.svg');
}

@media screen and (max-width: 768px) {
  .popup {
    min-width: 580px;
    min-height: 520px;
  }
}
</style>
