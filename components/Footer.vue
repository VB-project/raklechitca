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
  align-items: center;
}
.footer__logo {
  color: #898989;
  font-size: 1.125rem;
}
.footer__author {
  color: #898989;
  font-size: 1.125rem;
}
@media screen and (min-width: 768px) {
  .footer__container {
    padding-bottom: 50px;
  }
  .footer__author {
    margin-right: 50px;
  }
  .footer__logo {
    margin-left: 50px;
  }
}
@media screen and (min-width: 1440px) {
  .footer__container {
    padding-bottom: 60px;
  }
  .footer__author {
    margin-right: 60px;
  }
  .footer__logo {
    margin-left: 60px;
  }
}
</style>
