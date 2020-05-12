<template>
  <div :class="`info__container info__container_${theme}`">
    <slot>
      <h1 class="info__title_tall">#РАКЛЕЧИТСЯ</h1>
    </slot>
  </div>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  components: {
    panel: Panel,
  },
  props: ['theme'],
};
</script>

<style scoped>
.info__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #613a93;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.info__container_fixed {
  height: 689px;
  margin-left: -60px;
  margin-right: -60px;
}

.info__container_tall {
  margin-left: -60px;
  margin-right: -60px;
}

.info__container_thin {
  flex-direction: column;
  max-height: 100%;
  margin-top: 60px;
  height: 86px;
}

.info__title {
  width: 100%;
  font-size: 1.875rem;
  text-align: center;
}

.info__title_tall {
  width: 100%;
  font-size: 5.75rem;
  text-align: center;
}
</style>
