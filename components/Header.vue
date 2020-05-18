<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <mobile-icon class="header__mobile-icon" />

    <div class="header__menu-container">
      <main-menu class="header__main-menu" @btnClick="showPopUp" />
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import MobileIcon from '@/components/ui/MobileIcon';

export default {
  components: {
    'main-menu': Menu,
    'nxt-button': Button,
    'mobile-icon': MobileIcon,
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
  color: #000;
  font-weight: bold;
}
.header__menu-container {
  display: flex;
  /* width: 28%; */
  margin-right: 60px;
}
.header__mobile-icon {
  display: none;
}

@media screen and (max-width: 768px) {
  .header__main-menu {
    display: none;
  }
  .header__mobile-icon {
    display: block;
  }
}
</style>
