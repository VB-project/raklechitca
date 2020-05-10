<template>
  <nav class="menu">
    <ul class="menu__items">
      <li class="menu__item">
        <nuxt-link
          exact
          no-prefetch
          active-class="active"
          class="menu__link"
          to="/"
        >
          Главная
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          exact
          no-prefetch
          active-class="active"
          class="menu__link"
          to="/stories"
        >
          Истории
        </nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link
          exact
          no-prefetch
          active-class="active"
          class="menu__link"
          to="/tellstory"
        >
          Рассказать историю
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  width: 28%;
  margin-right: 5%;
}
.menu__items {
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
}
.menu__link:hover {
  opacity: 0.8;
}
</style>
