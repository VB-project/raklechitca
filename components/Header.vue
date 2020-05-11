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
      <nxt-button
        @btnClick="$emit('btnClick')"
        class="menu__button"
        :theme="'light'"
      >
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
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  text-decoration: none;
  max-width: 340px;
}
.header__menu-container {
  display: flex;
}
@media screen and (max-width: 1023px) {
  .header__menu-container {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .header__logo {
    font-size: 16px;
    line-height: 18px;
  }
  .header {
    margin: 18px 50px 18px 50px;
  }
}
@media screen and (min-width: 1440px) {
  .header__logo {
    line-height: 20px;
  }
  .header {
    margin: 18px 60px 18px 60px;
  }
}
</style>
