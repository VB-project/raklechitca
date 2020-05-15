<template>
  <div class="stories-page">
    <nxt-title>Истории неизлечимых привычек</nxt-title>
    <form class="stories-page__search-container">
      <nxt-input />
      <nxt-button theme="purple">Поиск</nxt-button>
    </form>
    <div class="stories-page__cards">
      <panel
        v-for="user in users.slice(0, 16)"
        :key="user.id"
        class="stories-page__panel"
      >
        <card
          :title="user.name"
          :text="user.description"
          :url="user.image"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Panel from '@/components/Panel';
import Card from '@/components/Card';
export default {
  components: {
    'nxt-title': Title,
    'nxt-input': Input,
    'nxt-button': Button,
    panel: Panel,
    card: Card,
  },
  beforeMount() {
    this.$store.dispatch('users/fetchUsersApi');
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
  },
};
</script>

<style lang="css" scoped>
.stories-page {
  margin: 100px 60px 0px 60px;
}
.stories-page__search-container {
  display: flex;
}
.stories-page__cards {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(4, auto);
  column-gap: 40px;
  row-gap: 60px;
  margin-top: 70px;
  margin-bottom: 40px;
}
</style>
