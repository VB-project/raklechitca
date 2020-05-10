<template>
  <nav class="menu">
    <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="menu__link"
      to="/"
    >
      Главная
    </nuxt-link>
    <nuxt-link
      exact
      no-prefetch
      active-class="active"
      class="menu__link"
      to="/stories"
    >
      Истории
    </nuxt-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu__link {
  text-decoration: none;
  font-size: 1.125rem;
  color: #000000;
  margin: 0 20px;
}
.menu__link:hover {
  opacity: 0.8;
}
</style>
