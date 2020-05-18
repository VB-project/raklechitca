<template>
  <div class="a">
    <slider :cellArray="users"></slider>
  </div>
</template>

<script>
import Slider from '@/components/Slider';

export default {
  components: {
    slider: Slider,
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
};
</script>

<style scoped>
.a {
  background-color: red;
  width: 300px;
}
</style>
