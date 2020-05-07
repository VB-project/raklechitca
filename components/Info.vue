<template>
  <div class="info__container">
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
};
</script>

<style scoped>
.info__container {
  background-color: #613a93;
}
</style>
