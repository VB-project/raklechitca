<template>
  <div class="container">
    <info :theme="'fixed'" />

    <story :users="users" />
    <info :theme="'thin'">
      <nxt-title :theme="'wide'" class="index__title"
        >И В ОТЛИЧИЕ ОТ РАКА,
        <span class="index__title-span">#ЭТОНЕЛЕЧИТСЯ</span></nxt-title
      >
    </info>
    <habits>
      <panel
        v-for="user in users.slice(0, 8)"
        :key="user.id"
        class="container__panel"
      >
        <card
          :title="user.name"
          :text="user.description"
          :url="user.image"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </habits>
    <info :theme="'thin'">
      <nxt-title :theme="'wide'"
        >РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
        <span class="index__title-span">#ЭТОНЕЛЕЧИТСЯ</span></nxt-title
      >
    </info>
    <instagram :itemArray="users"> </instagram>
    <about> </about>

    <statistics />
    <info :theme="'tall'">
      <nxt-title :theme="'info'">
        #РАКЛЕЧИТСЯ
      </nxt-title>

      <tellStory />
    </info>
    <nxt-footer />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Info from '@/components/Info';
import Story from '@/components/Story';
import Habits from '@/components/Habits';
import Instagram from '@/components/Instagram';
import About from '@/components/About';
import Card from '@/components/Card';
import Statistics from '@/components/Statistics';
import Button from '@/components/ui/Button';
import TellStory from '@/components/TellStory';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default {
  components: {
    panel: Panel,
    info: Info,
    story: Story,
    card: Card,
    habits: Habits,
    instagram: Instagram,
    about: About,
    statistics: Statistics,
    tellStory: TellStory,
    'nxt-button': Button,
    'nxt-title': Title,
    'nxt-footer': Footer,
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
    content() {
      return this.$store.getters['content/getContent'];
    },
  },

  // async fetch({store}) {
  //   await store.dispatch('users/fetchUsersApi');
  // }
};
</script>

<style>
.img {
  width: 100%;
}
.container {
  padding: 0px 60px;
}

.index__title-span {
  font-weight: bold;
}

input {
  display: block;
}

@media screen and (max-width: 1280px) {
  .container {
    padding: 0px 50px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0px 40px;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0px 15px;
  }
}
</style>
