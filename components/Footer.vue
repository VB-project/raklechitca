<template>
  <div class="footer__container">
    <span class="footer__logo">Рак Лечится 2020</span>
    <span class="footer__author">Сделано студентами Яндекс Практикум</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 76px;
  align-items: center;
}
.footer__logo {
  margin-left: 5%;
  color: #898989;
  font-size: 1.125rem;
}
.footer__author {
  margin-right: 5%;
  color: #898989;
  font-size: 1.125rem;
}
</style>
