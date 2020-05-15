<template>
  <div :class="`info__container info__container_${theme}`">
    <slot>
      <h1 class="info__title">#РАКЛЕЧИТСЯ</h1>
    </slot>
  </div>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: {
    panel: Panel,
  },
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.info__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #613a93;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.info__container_fixed {
  min-height: calc(100vh - 76px);
  margin-left: -60px;
  margin-right: -60px;
}

.info__container_tall {
  margin-left: -60px;
  margin-right: -60px;
  margin-bottom: 0;
}

.info__container_thin {
  flex-direction: column;
  max-height: 100%;
  margin-top: 60px;
  height: 86px;
}

.info__title {
  width: 100%;
  font-size: 5.75rem;
  text-align: center;
}
</style>
