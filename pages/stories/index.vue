<template>
  <div class="stories-page">
    <nxt-title>Истории неизлечимых привычек</nxt-title>
    <form class="stories-page__search-container">
      <nxt-input />
      <nxt-button theme="purple">Поиск</nxt-button>
    </form>
    <div class="stories-page__cards">
      <panel v-for="user in users" :key="user.id" class="stories-page__panel">
        <card
          :title="user.name"
          :text="user.description"
          :url="user.image"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
    <nxt-pagination
      :totalItems="this.$store.state.users.users.length"
      :ItemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Pagination from '@/components/ui/Pagination';
export default {
  components: {
    'nxt-title': Title,
    'nxt-input': Input,
    'nxt-button': Button,
    panel: Panel,
    card: Card,
    'nxt-pagination': Pagination,
  },
  beforeMount() {
    this.$store.dispatch('users/fetchUsersApi');
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'].filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.itemsPerPage - 1
      );
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
  },
  data() {
    return {
      itemsPerPage: 16,
      startIndex: 1,
    };
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
  column-gap: 40px;
  row-gap: 60px;
  margin-top: 70px;
  margin-bottom: 40px;
}
</style>
