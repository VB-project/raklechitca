<template>
  <div class="statusbar">
    <div class="statusbar__fill" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    maxValue: Number,
  },
  computed: {
    style() {
      return `width: ${(this.value / this.maxValue) * 100}%`;
    },
  },
};
</script>

<style scoped>
.statusbar {
  width: 260px;
  height: 40px;
  background: #f4f4f4;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.statusbar__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #613a93;
}

@media screen and (max-width: 1280px) {
  .statusbar {
    width: 229px;
    height: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .statusbar {
    width: 188px;
    height: 28px;
  }
}

@media screen and (max-width: 768px) {
  .statusbar {
    width: 196px;
    height: 28px;
  }
}
</style>
