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

<style scoped></style>
