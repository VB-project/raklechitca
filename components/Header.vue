<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <div class="header__menu-container">
      <main-menu />
      <nxt-button @btnClick="showPopUp" class="menu__button" :theme="'light'">
        Рассказать историю
      </nxt-button>
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';

export default {
  components: {
    'main-menu': Menu,
    'nxt-button': Button,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
}
.header__logo {
  font-size: 1rem;
  text-decoration: none;
  max-width: 25%;
  margin-left: 60px;
}
.header__menu-container {
  display: flex;
  /* width: 28%; */
  margin-right: 60px;
}
</style>
