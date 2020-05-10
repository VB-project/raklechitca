<template>
  <header class="header">
    <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
      >Проект Благотворительного Фонда Константина Хабенского</nuxt-link
    >
    <h1 class="header__logo" v-else>
      Проект Благотворительного Фонда Константина Хабенского
    </h1>
    <main-menu />
  </header>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    'main-menu': Menu,
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
  max-width: 20%;
  margin-left: 5%;
}
</style>
