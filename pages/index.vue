<template>
  <div class="container">
    <info :theme="'fixed'" :titleTheme="'main'" :blockName="'cover'" />
    <story :users="users" :blockName="'videos'" />
    <info :theme="'thin'" :titleTheme="'wide'" :blockName="'note-1'"></info>
    <habits :blockName="'stories'">
      <panel
        v-for="user in users.slice(0, 8)"
        :key="user.id"
        class="container__panel"
      >
        <card
          :title="user.author"
          :text="user.title"
          :url="url + user.ImageUrl[0].formats.small.url"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </habits>
    <info :blockName="'note-2'" :theme="'thin'" :titleTheme="'wide'"></info>
    <instagram :itemArray="users" :blockName="'instagram'"></instagram>
    <about :blockName="'story'" />
    <statistics :blockName="'statistics'" />
    <tellStory :blockName="'about'" />
    <nxt-footer :blockName="'footer'" />
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
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
    onResize() {
      this.mobile = document.documentElement.clientWidth > 320 ? false : true;
    },
  },
  computed: {
    users() {
      return this.$store.getters['users/getUsers'];
    },
    url() {
      return process.env.BASE_URL;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
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
  .statistics__title {
    display: none;
  }
}
</style>
