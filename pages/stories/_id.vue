<template>
  <div class="card">
    <panel class="card__panel">
      {{ $route.path }}
    </panel>
    <thanks />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Thanks from '@/components/Thanks';
export default {
  components: {
    panel: Panel,
    thanks: Thanks,
  },
};
</script>

<style lang="css" scoped>
.card {
  margin: 100px 60px;
}
</style>
