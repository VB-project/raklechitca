<template>
  <div class="stories-page">
    <nxt-title>Истории неизлечимых привычек</nxt-title>
    <form @submit="submit" class="stories-page__search-container">
      <nxt-input />
      <nxt-button class="stories-page__search-btn" theme="purple"
        >Поиск</nxt-button
      >
    </form>
    <div class="stories-page__cards">
      <panel v-for="user in users" :key="user.id" class="stories-page__panel">
        <card
          :title="user.author"
          :text="user.title"
          :url="url + user.ImageUrl[0].formats.small.url"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
    <nxt-pagination
      :totalItems="this.$store.state.users.users.length"
      :ItemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
    <nxt-footer :blockName="'footer'" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Pagination from '@/components/ui/Pagination';
import Footer from '@/components/Footer';

export default {
  components: {
    'nxt-title': Title,
    'nxt-input': Input,
    'nxt-button': Button,
    panel: Panel,
    card: Card,
    'nxt-pagination': Pagination,
    'nxt-footer': Footer,
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'].filter(
        (item, index) =>
          index >= this.startIndex &&
          index <= this.startIndex + this.itemsPerPage - 1
      );
    },
    url() {
      return process.env.BASE_URL;
    },
    submit(value) {
      this.appliedStoriesName = value;
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
      storiesName: '',
      appliedStoriesName: '',
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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 60px;
  margin-top: 70px;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .stories-page {
    margin: 80px 40px 0px 40px;
  }
  .stories-page__search-container {
    margin-top: 20px;
  }
  .stories-page__search-btn {
    max-width: 208px;
    margin-left: 20px;
  }
}
</style>
