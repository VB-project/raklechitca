<template>
  <div class="container">
    <info :theme="'fixed'" />
    <story />
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
    <instagram />
    <about>
      <nxt-textBlock
        :description="content[0].description"
        :option1="content[0].option1"
        :option2="content[0].option2"
        :content="content[0].content"
      >
        <nxt-button :theme="'purple'" @btnClick="showPopUp"
          >Заполнить форму</nxt-button
        >
      </nxt-textBlock>
    </about>

    <statistics />
    <info :theme="'tall'">
      <nxt-title :theme="'info'">
        #РАКЛЕЧИТСЯ
      </nxt-title>
      <about :theme="'purple'">
        <nxt-textBlock
          :description="content[1].description"
          :option1="content[1].option1"
          :option2="content[1].option2"
          :content="content[1].content"
          :content2="content[1].content2"
        ></nxt-textBlock>
      </about>
    </info>
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
import TextBlock from '@/components/TextBlock';
import Title from '@/components/Title';

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
    'nxt-textBlock': TextBlock,
    'nxt-button': Button,
    'nxt-title': Title,
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
.container {
  margin: 0px 60px 0px 60px;
}
.index__title-span {
  font-weight: bold;
}
input {
  display: block;
}
</style>
