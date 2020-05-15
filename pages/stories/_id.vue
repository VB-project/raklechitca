<template>
  <div class="card">
    <panel class="card__panel">
      <div v-html="currentUser.description"></div>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
export default {
  components: {
    panel: Panel,
  },
  // async fetch({ store, route }) {
  //   await store.dispatch('users/fetchUsersApiWithID', { id: route.params.id });
  // },
  computed: {
    currentUser() {
      return this.$store.getters['users/getCurrentUsers'];
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  margin: 100px 60px;
}
</style>
