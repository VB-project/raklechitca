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
  props: ['theme'],
};
</script>

<style scoped>
.info__container {
  display: flex;
  background-color: #613a93;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.info__container_tall {
  height: 689px;
  font-size: 5.75rem;
}

.info__container_thin {
  flex-direction: column;
  max-height: 100%;
  font-size: 1.875rem;
  margin-left: 60px;
  margin-right: 60px;
}
</style>
